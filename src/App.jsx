import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import axios from 'axios';

function App() {
    const [posts, setposts] = useState([]);
    useEffect( () => {
        const fetchPosts = async () =>{
            const response = await axios.get(
                'http://119.56.230.161:11111/posts'
            );
            setposts(response.data);
        };
        fetchPosts();
    },[]);
    return (
        <div>
            {posts.map((post) =>{
                return(
                    <Card  
                        key ={post.id}
                        title = {post.title}
                        content = {post.content}
                        date = {new Date(post.createdAt).toLocaleDateString()}
                    />
                );
            })}
            <Card title ='제목' content = '컴소공' date = '2025-06-10'/>
            <div>hi</div>
        </div>
    );
}

export default App;
