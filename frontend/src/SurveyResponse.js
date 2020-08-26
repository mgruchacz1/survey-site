import React from 'react';
import Modal from 'react-bootstrap/Modal';
import QuestionResponse from './QuestionResponse';

class SurveyResponse extends React.Component {

    // props are a survey object, and a callback to execute when survey is complete
    constructor(props) {
        super(props);
        this.state = { question: null, questionsAnswered: 0, surveyResponse: null, };
    }

    // post request to create survey response object
    // get request to get survey questions
    componentDidUpdate(prevProps) {
        // if survey changed, load new question 
        if ((this.props.survey != null) && (prevProps.survey !== this.props.survey)) {
            this.loadQuestion();
            // create survey response object if we don't have one already, or it doesn't match the current survey
            if ((this.props.surveyResponse == null) || (this.props.surveyResponse.survey !== this.props.survey)) {
                this.createSurveyResponse();
            }
        }
    }

    loadNextQuestion() {
        let questionsAnswered = this.state.questionsAnswered;
        this.setState({ questionsAnswered: ++questionsAnswered });
        if (questionsAnswered < this.props.survey.questions.length) {
            this.loadQuestion();
        }
    }

    loadQuestion() {
        let url = this.props.survey.questions[this.state.questionsAnswered];
        fetch(url)
            .then(response => response.json())
            .then(
                (question) => {
                    this.setState({
                        question: question
                    })
                }
            )
    }



    createSurveyResponse() {
        let survey = this.props.survey;
        if (survey) {
            fetch(`http://localhost:8000/surveyresponses/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "survey": survey.id
                })
            })
                .then(response => response.json())
                .then(
                    (surveyResponse) => {
                        this.setState({
                            surveyResponse: surveyResponse
                        })
                    }
                )
                .catch((error) => {
                    console.error('Error:', error);
                })
        }
    }

    render() {
        let survey = this.props.survey;
        let body;
        let title;
        if (survey) {
            let question = this.state.question;
            title = survey.title;
            let surveyResponse = this.state.surveyResponse;
            // if survey not complete, show current question
            if (this.state.questionsAnswered !== survey.questions.length) {
                body = <Modal.Body>
                    <QuestionResponse surveyResponse={surveyResponse} question={question} onSubmit={this.loadNextQuestion.bind(this)} />
                </Modal.Body>
            } else {
                body = <Modal.Body>
                    Survey Complete!
                </Modal.Body>
            }
        } else {
            title = 'No Survey';
        }
        return (
            <div id="SurveyResponse">
                <Modal show={this.props.show} onHide={this.props.onHide} centered size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title id="modal-current-survey-title">
                            {title}
                        </Modal.Title>
                    </Modal.Header>
                    {body}
                </Modal>
            </div>
        );
    }
}

export default SurveyResponse;