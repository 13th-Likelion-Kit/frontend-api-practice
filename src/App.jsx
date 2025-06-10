import './App.css';
import { useEffect, useState } from 'react';
import Card from './components/Card';
import axios from 'axios';

function App() {
    const [posts, setPosts] = useState([]);
    useEffect( () => {
        const fetchPosts = async () => {
            const response = await axios.get(
                'http://119.56.230.161:11111/posts')
    setPosts(response.data);
    };
    
    fetchPosts();},[]);
    return (
        <div>
            {posts.map((post) => {
                return (
                    <Card
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    content={post.content}
                    date={post.date}/>
                );
            })}
        </div>
    );
}

export default App;
