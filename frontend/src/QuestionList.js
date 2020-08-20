import React from 'react';

function QuestionList(props) {
    const questions = props.questions;
    const listItems = questions.map((question) =>
        <Question key={question.id} text={question.text} choices={question.choices} />
    );

    return(
        <ul>{listItems}</ul>
    );
}

export default QuestionList;