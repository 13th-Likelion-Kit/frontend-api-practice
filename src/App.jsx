import "./App.css";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("http://119.56.230.161:11111/posts");
      setPosts(response.data);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      {posts.map((post) => {
        return (
          <Card
            key={post.id}
            title={post.title}
            content={post.content}
            date={post.createdAt}
          />
        );
      })}

      <div>hi</div>
    </div>
  );
}

export default App;
