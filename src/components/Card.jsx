import React, { useState } from "react";
import "../App.css";

function Card({ onPost }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        if (title && content) {
            setLoading(true);
            try {
                const response = await fetch("http://119.56.230.161:11111/posts", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        title: title,
                        content: content,
                    }),
                });
                if (!response.ok) {
                    throw new Error("네트워크 응답이 올바르지 않습니다.");
                }
                setTitle("");
                setContent("");
                if (onPost) onPost();
            } catch (error) {
                alert("등록 중 오류 발생");
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className="card-container">
            <input
                type="text"
                placeholder="제목"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="card-title-input"
                disabled={loading}
            />
            <textarea
                placeholder="내용"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="card-content-textarea"
                rows={5}
                disabled={loading}
            />
            <button
                onClick={handleSubmit}
                className="card-button"
                disabled={loading}
            >
            </button>
        </div>
    );
}

export default Card;
