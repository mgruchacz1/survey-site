import React from 'react';

function Survey(props) {
    const survey = props.survey;
    return(
        <div>
            <p>{survey.text}</p>
            <QuestionList questions={survey.questions}/>
        </div>
    )
}

export default Survey;