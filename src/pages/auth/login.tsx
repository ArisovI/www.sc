import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [phone, setPhone] = useState<string>("998901234567");
  const [password, setPassword] = useState<string>("password");

  const { login, getMe } = useContext(AuthContext);
  const nav = useNavigate();

  const handleSubmit = async () => {
    await login({ phone, password }).then(() => {
      nav("/admin");
    });
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (token) {
      getMe().then(() => {
        nav("/admin");
      });
    }
  }, []);

  return (
    <div>
      <h1>Login Page</h1>
      <label>
        Phone:
        <br />
        <input
          type="number"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <br />
      <br />
      <label>
        Password:
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;
