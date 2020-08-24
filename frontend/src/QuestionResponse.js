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

    return (
        <div className="QuestionResponse">
            {question.text}
            <ChoiceList choices={question.choices}/>
        </div>
    );
}

export default QuestionResponse;