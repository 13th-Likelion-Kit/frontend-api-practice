import { Trash2 } from 'lucide-react';
import styles from './card.module.scss';

function Card({ title, content, id, date, onDelete }) {
    const handleDelete = async () => {
        try {
            const response = await fetch(
                `http://119.56.230.161:11111/posts/${id}`,
                {
                    method: 'DELETE',
                },
            );
            if (!response.ok) {
                throw new Error('Failed to delete post');
            }

            onDelete();
        } catch (err) {
            console.error('Failed to delete post:', err);
        }
    };
    return (
        <div className={styles.container}>
            <div className={styles.topBar}>
                <div>{title}</div>
                <div>{date}</div>
            </div>
            <div className={styles.content}>{content}</div>
            <div className={styles.buttonContainer}>
                <button onClick={() => handleDelete()}>
                    <Trash2 width={20} onClick={() => onDelete()} />
                </button>
            </div>
        </div>
    );
}

export default Card;