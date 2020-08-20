import React from 'react';
import QuestionList from './QuestionList';

function Survey(props) {
    const survey = props.survey;
    return(
        <div>
            <p>{survey.title}</p>
            <QuestionList questionURLs={survey.questions}/>
        </div>
    )
}

export default Survey;