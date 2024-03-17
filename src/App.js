import Home from "./pages/home/Home";
import { TopBar } from "././components/topbar/TopBar";
import { Single } from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Post from "./components/post/Post";

function App() {
  const user = true;
  return (
    <>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/write" element={<Write />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/post/:postID" element={<Single />} />
      </Routes>
    </>
  );
}

export default App;
