import "../App.css";
import { Trash2 } from "lucide-react";

function Post({ post, onDelete }) {
    const { title, content, createdAt } = post;

    const formattedDate = createdAt ? createdAt.slice(0, 10) : "";

    return (
        <div className="card-container post-container" style={{ position: "relative" }}>
            <div className="post-header">
                <span className="card-title-view">{title}</span>
                {formattedDate && (
                    <span className="post-date">{formattedDate}</span>
                )}
            </div>
            <div className="card-content-view">
                {content}
            </div>
            <button
                className="post-trash-btn"
                onClick={onDelete}
                style={{
                    position: "absolute",
                    right: 24,
                    bottom: 24,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                }}
                aria-label="delete"
            >
                <Trash2 color="#888" size={22} />
            </button>
        </div>
    );
}

export default Post;
