import Home from "./pages/home/Home";
import { TopBar } from "././components/topbar/TopBar";
import { Single } from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Post from "./components/post/Post";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import { useContext } from "react";
import { Context } from "./context/Contex";

function App() {
  const { user } = useContext(Context);
  return (
    <>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postID" element={<Single />} />
      </Routes>
    </>
  );
}

export default App;
