import { Link } from "react-router-dom";
import "./topbar.css";
import { useContext } from "react";
import { Context } from "../../context/Contex";

export const TopBar = () => {
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-x-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to={"/"}>
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to={"/about"}>
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to={"/contact"}>
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to={"/write"}>
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img className="topImg" src={user.profilePic} alt="" />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to={"/login"}>
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to={"/register"}>
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i class="topSearc fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};
