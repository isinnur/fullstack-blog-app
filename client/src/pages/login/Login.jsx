import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Username</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your username..."
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your password..."
        />
        <button className="loginButton" type="submit">
          Login
        </button>
      </form>

      <button className="loginRegisterButton">
        <Link className="link" to={"/register"}>
          Register
        </Link>
      </button>
    </div>
  );
}
