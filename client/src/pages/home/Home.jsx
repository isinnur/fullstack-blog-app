import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import { useLocation } from "react-router";
import "./home.css";
import { useTheme } from "../../context/theme/Context";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <div className={`${theme}`}>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </div>
  );
}
