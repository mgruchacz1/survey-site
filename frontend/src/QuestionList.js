import React from 'react';
import Question from './Question';

function QuestionList(props) {

    const questions = props.questionURLs;
    if (!questions) {
        return (
            <div className="QuestionList">
                No Questions.
            </div>
        )
    }
    const listItems = questions.map((question, index) =>
        <Question key={index} question={question} />
    );

    return (
        <div className="QuestionList">
            <ul>{listItems}</ul>
        </div>
    );
}

export default QuestionList;