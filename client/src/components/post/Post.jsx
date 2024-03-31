import { useTheme } from "../../context/theme/Context";
import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const { theme, toggleTheme } = useTheme();

  const PF = "http://localhost:5000/images/";
  return (
    <div className={`post ${theme}`}>
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>

        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>

        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.description}</p>
    </div>
  );
}
