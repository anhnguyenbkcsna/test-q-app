import React from "react";
import { Button, TextField } from '@mui/material';
import QuestionCard from '../../components/QuestionCard'
import QuestionEditor from "../../components/QuestionEditor";

const KD = () => {
    return (
        <>

        {/* style : HTML element, HTML tag */}
        <div style={{
            display: 'grid',
            gridTemplateColumns: '7fr 3fr',
            height: '100vh',
        }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                height: '100vh',
            }}>
                {[1, 2, 3, 4, 5, 6].map((id) => {
                    return (
                        <QuestionCard key={id} questionId={id}/>
                    );
                })}
            </div>
            <QuestionEditor />
        </div>
        </>

    );
}

export default KD;