import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useTodoContext } from "../context/AppContextProvider";
import "../css/LoginForm.css";

function LoginFrom() {
  const [account, setAccount] = useState({
    userid: "",
    password: "",
  });

  const history = useHistory();

  const onChange = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const onLogin = async (e) => {
    const res = await fetch("http://localhost:8080/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
      credentials: "include",
      body: JSON.stringify({
        userid: account.userid,
        password: account.password,
      }),
    });
    if (res?.ok) {
      const resultUser = await res.json();
      if (!resultUser?.userid) {
        alert("없는 id 입니다");
        return;
      }
      if (resultUser.password !== account.password) {
        alert("비번 오류");
        return;
      }
      alert("로그인 성공");

      history.replace("/");
    }
  };

  return (
    <div className="login_form">
      <input name="userid" placeholder="ID" onChange={onChange} />
      <input
        name="password"
        type="password"
        placeholder="password"
        onChange={onChange}
      />
      <button className="btn_login" onClick={onLogin}>로그인</button>
    </div>
  );
}

export default LoginFrom;
