import { useTheme } from "../../context/theme/Context";
import "./contact.css";
export default function Contact() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="contact">
      <img
        className="contactImg"
        src="https://images.pexels.com/photos/326576/pexels-photo-326576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <p>
        How to reach us
        <span>test@test.com</span>
      </p>
    </div>
  );
}
