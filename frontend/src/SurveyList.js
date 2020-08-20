import React from 'react';
import App from './App';

function SurveyList(props) {
    const surveys = props.surveys;
    const listItems = surveys.map((survey) => 
        <Survey survey={survey} />
    );
    return (
        <ul>{listItems}</ul>
    );
}

export default SurveyList;