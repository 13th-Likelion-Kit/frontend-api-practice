import './App.css';
import { useEffect, useState } from 'react';
import Post from './components/Post';
import Card from './components/Card';

function App() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
const fetchPosts = async () => {
            try {
                const response = await fetch('http://119.56.230.161:11111/posts', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if (!response.ok) {
                    throw new Error("네트워크 응답이 올바르지 않습니다.");
                }
                const data = await response.json();
                setPosts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
    useEffect(() => {
        
        fetchPosts();
    }, []);


    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://119.56.230.161:11111/posts/${id}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error("삭제 실패");
            }
            fetchPosts(); 
        } catch (err) {
            alert("삭제 오류 발생: " + err.message);
        }
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", alignItems: "center" }}>
            <Card onPost={fetchPosts}/>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%", alignItems: "center" }}>
                {posts.map((post, idx) => (
                    <Post key={post.id || idx} post={post} onDelete={() => handleDelete(post.id)} />
                ))}
            </div>
        </div>
    );
}

export default App;
