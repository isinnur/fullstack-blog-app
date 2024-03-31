import { useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/theme/Context";

export default function Sidebar() {
  const { theme, toggleTheme } = useTheme();

  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className={`sidebar ${theme}`}>
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME </span>
        <img
          src="https://images.pexels.com/photos/1587037/pexels-photo-1587037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarLİst">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem"> {c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-x-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
}
