import "../css/LoginForm.css";
import { useState } from "react";
import { useUserContext } from "../context";
import { useHistory } from "react-router-dom";
import { fetchLogin } from "../modules/fetchModule";

function LoginForm() {
  const { setUser } = useUserContext();
  const [account, setAccount] = useState({
    userid: "",
    password: "",
  });

  const history = useHistory();

  const onChage = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const onLogin = async (e) => {
    const { userid, password } = account;
    const resultUser = await fetchLogin(userid, password);
    await setUser(resultUser);
    history.replace("/");
    if (!resultUser?.userid) {
      alert("아이디와 비밀번호를 확인해주세요");
      history.replace("/login");
    }
  };

  return (
    <div className="login_form">
      <h1>Login</h1>
      <div className="input-box">
        <input
          id="username"
          type="text"
          name="userid"
          placeholder="아이디"
          onChange={onChage}
        />
        <label for="username">아이디</label>
      </div>

      <div className="input-box">
        <input
          id="password"
          type="password"
          name="password"
          placeholder="비밀번호"
          onChange={onChage}
        />
        <label type="password">비밀번호</label>
      </div>

      <button onClick={onLogin}>로그인</button>
    </div>
  );
}

export default LoginForm;
