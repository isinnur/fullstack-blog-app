import { useTheme } from "../../context/theme/Context";
import "./header.css";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`header ${theme}`}>
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </div>
  );
}
