import { useUserContext } from "../context/UserContextProvider";
import "../css/JoinForm.css";
import React, { useState } from "react";

function JoinForm() {
  const { user, setUser } = useUserContext();
  const [joinUser, setJoinUser] = useState({});

  const onChangeAccount = (e) => {
    const { name, value } = e.target;
    setJoinUser({ ...joinUser, [name]: value });
  };

  const onSubmitAccount = async (e) => {
    // if(user.userid === "")
    if (!joinUser?.userid) {
      alert("아이디를 입력해야 합니다");
      return;
    }
    if (!joinUser?.password) {
      alert("비밀번호를 입력해야 합니다");
      return;
    }
    if (!joinUser.re_password) {
      alert("비밀번호 확인을 입력해 주세요");
      return;
    }
    if (joinUser?.password !== joinUser?.re_password) {
      alert("비밀번호가 일치하지 않습니다");
      return;
    }
    if (!joinUser?.email) {
      alert("이메일주소는 필수 항목입니다");
      return;
    }

    const joinData = {
      userid: joinUser.userid,
      password: joinUser.password,
      email: joinUser.email,
    };

    const response = await fetch("http://localhost:8080/users/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(joinData),
    });

    if (response.ok) {
      const json = await response.json();
      alert(JSON.stringify(json));
    }
  };
  return (
    <div className="join_form">
      <input
        name="userid"
        value={joinUser.userid}
        placeholder="아이디를 입력해 주세요"
        onChange={onChangeAccount}
      />
      <input
        name="password"
        type="password"
        value={joinUser.password}
        placeholder="비밀번호를 입력해 주세요"
        onChange={onChangeAccount}
      />
      <input
        name="re_password"
        type="password"
        value={joinUser.re_password}
        placeholder="비밀번호를 한번 더 입력해 주세요"
        onChange={onChangeAccount}
      />
      <input
        name="email"
        value={joinUser.email}
        placeholder="e-mail을 입력해 주세요"
        onChange={onChangeAccount}
      />
      <button onClick={onSubmitAccount}>회원가입</button>
    </div>
  );
}

export default JoinForm;
