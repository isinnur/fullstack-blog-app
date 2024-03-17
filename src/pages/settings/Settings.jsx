import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Update Your Account</span>
        </div>
        <form className="settingsForm">
          <label className="">Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt=""
            />
            <label htmlFor="fileInput">
              <i class="settingPPIcon fa-solid fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Işınnur" />
          <label>Email</label>
          <input type="email" placeholder="isinunur@gmail.coö" />
          <label>Password</label>
          <input type="password" placeholder="******" />
          <button className="settingsSubmitButton">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
