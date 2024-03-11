import React, { useState } from "react";
import { TextField, Select, MenuItem } from '@mui/material';

const QuestionEditor = () => {
    const [topics, setTopics] = useState(["Toán học", "Vật lý", "Hóa học", "Sinh học", "Lịch sử", "Địa lý", "Tiếng Anh", "Tiếng Việt", "GDCD", "Thể dục"]);
    const [question, setQuestion] = useState('');
    const [selectedTopic, setSelectedTopic] = useState('');
    const [urlQuestion, setUrlQuestion] = useState('');

    return (
        <div
            style={{
                margin: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',    
            }}
        >
            <Select
                value={selectedTopic}
                label="Chủ đề"
                onChange={(e) => setSelectedTopic(e.target.value)}
            >
                {topics.map((topic) => {
                    return <MenuItem value={topic}>{topic}</MenuItem>;
                })}
            </Select>
            <TextField 
                label="Câu hỏi" 
                variant="outlined"
                value={question}
                onChange={(e) => setQuestion(e.target.value) }
            />
            <TextField 
                label="URL Câu hỏi" 
                variant="outlined"
                value={urlQuestion}
                onChange={(e) => setUrlQuestion(e.target.value) }
            />
        </div>
    );
}

export default QuestionEditor;