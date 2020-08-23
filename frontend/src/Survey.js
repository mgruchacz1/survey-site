import React from 'react';
import QuestionList from './QuestionList';
import './Survey.css';
import Card from 'react-bootstrap/Card';

function Survey(props) {
    const survey = props.survey;
    return (
        <div>
            <Card className="Survey">
                <Card.Header>{survey.title}</Card.Header>
                <Card.Body>
                    <Card.Text><QuestionList questionURLs={survey.questions} /></Card.Text>
                </Card.Body>
            </Card>
        </div >
    )
}

export default Survey;