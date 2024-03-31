import { useTheme } from "../../context/theme/Context";
import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`posts ${theme}`}>
      {posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}
