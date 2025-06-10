import styles from './post.module.scss';
import { useState } from 'react';

function Post({ onPost }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handlePost = async () => {
        const body = {
            title,
            content,
        };

        try {
            const response = await fetch('http://119.56.230.161:11111/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            if (!response.ok) {
                throw new Error('Failed to post');
            }

            const result = await response.json();
            console.log('Post successful:', result);
            onPost();
            setTitle('');
            setContent('');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <input
                    type='text'
                    placeholder='title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className={styles.contentContainer}>
                <textarea
                    placeholder='What is happening?'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <div className={styles.buttonContainer}>
                <button onClick={handlePost}>Post</button>
            </div>
        </div>
    );
}

export default Post;
