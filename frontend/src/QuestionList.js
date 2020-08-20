import React from 'react';
import Question from './Question';

function QuestionList(props) {

    const questions = props.questionURLs;
    if (!questions) {
        return (
            <div>
                No Questions.
            </div>
        )
    }
    const listItems = questions.map((question, index) =>
        <Question key={index} question={question} />
    );

    return (
        <ul>{listItems}</ul>
    );
}

export default QuestionList;