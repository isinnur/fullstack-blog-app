import { Link } from "react-router-dom";
import "./topbar.css";
import { useContext, useState } from "react";
import { Context } from "../../context/Contex";
import { useTheme, ThemeProvider } from "../../context/theme/Context";

export const TopBar = () => {
  const { user, dispatch } = useContext(Context);
  const { theme, toggleTheme } = useTheme();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    console.log(user);
  };
  const PF = "http://localhost:5000/images/";
  return (
    <div className={`top ${theme}`}>
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
          <Link to="/settings">
            <img className="topImg" src={PF + user.profilePic} alt="" />
          </Link>
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
        <div>
          {theme === "light" ? (
            <i onClick={toggleTheme} class="themeIcon  fa-solid fa-moon"></i>
          ) : (
            <i onClick={toggleTheme} class="themeIcon  fa-solid fa-sun"></i>
          )}
        </div>
      </div>
    </div>
  );
};
