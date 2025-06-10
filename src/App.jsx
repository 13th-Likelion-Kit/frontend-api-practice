import './App.css';

import { useEffect, useState } from 'react';

import Card from './components/Card';
import Post from './components/Post';

function App() {
    const [posts, setPosts] = useState([]);
    const fetchPosts = async () => {
        try {
            const response = await fetch('http://119.56.230.161:11111/posts');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setPosts(data.slice(0, 10)); // 첫 10개 포스트만 가져오기
        } catch (err) {
            console.error('Failed to fetch posts:', err);
        }
    };
    useEffect(() => {
        fetchPosts();
    }, []);
    return (
        <div>
            <Post
                onPost={() => {
                    fetchPosts();
                }}
            />
            {posts.map((post) => (
                <Card
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    content={post.content}
                    date={new Date(post.createdAt).toLocaleDateString()}
                    onDelete={() => fetchPosts()}
                />
            ))}
        </div>
    );
}

export default App;
