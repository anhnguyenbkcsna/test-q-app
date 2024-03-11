import React, { useEffect, useState } from "react";
import './index.css';
import { Button } from '@mui/material';

const QuestionCard = ({key, questionId}) => {
    // props
    const [id, setId] = useState(0);
    const [topic, setTopic] = useState('');
    const [question, setQuestion] = useState('');
    const [questionType, setQuestionType] = useState('');
    const [answer, setAnswer] = useState('');

    useEffect(() => {
        setId(questionId);
        setTopic('Chủ đề');
        setQuestion('Câu hỏi');
        setQuestionType('Loại câu hỏi');
        setAnswer('Câu trả lời');
    }, []);
    
    return (
        <div className="container">
            <h1>Câu hỏi số {id}</h1>
            <div className="content">
                <h3>Chủ đề: {topic} </h3>
                <p>{question}</p>
                <p>Đáp án: {answer}</p>
            </div>
            <div className="button-container">
                <Button variant="contained" color="primary">Sửa</Button>
                <Button variant="outlined" color="secondary">Xóa</Button>
            </div>
        </div>
    );
}

export default QuestionCard;