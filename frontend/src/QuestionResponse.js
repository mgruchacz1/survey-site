import React from 'react';
import ChoiceList from './ChoiceList';

function QuestionResponse(props) {

    const question = props.question;
    if (!question) {
        return(
            <div className="NoQuestionResponse">
            </div>
        );
    }

    // post request to create questionResponse
    function submitResponse(choice) {
        const response = props.surveyResponse;
        const question = props.question;
        fetch(`http://localhost:8000/questionresponses/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "survey_response": response.id,
                "question": question.id,
                "choice": choice.id
            })
        })
        .then(response => response.json())
        .then(() => {
            props.onSubmit();
        })
        .catch((error) => {
            console.error('Error:', error)
        })
    }

    return (
        <div className="QuestionResponse">
            {question.text} <br />
            <ChoiceList choices={question.choices} onChoose={submitResponse}/>
        </div>
    );
}

export default QuestionResponse;