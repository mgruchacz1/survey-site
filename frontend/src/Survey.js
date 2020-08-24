import React from 'react';
import QuestionList from './QuestionList';
import './Survey.css';
import Card from 'react-bootstrap/Card';

function Survey(props) {
    const survey = props.survey;
    var chooseSurvey = props.chooseSurvey;
    return (
        <div>
            <Card className="Survey" onClick={() => chooseSurvey(survey)}>
                <Card.Header>{survey.title}</Card.Header>
                <Card.Body>
                    <QuestionList questionURLs={survey.questions} />
                </Card.Body>
            </Card>
        </div >
    )
}

export default Survey;