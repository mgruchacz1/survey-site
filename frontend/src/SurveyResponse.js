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

    // load the next question
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
                body: {
                    'survey': survey
                }
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

    // sent as callback to QuestionResponse component
    // append our questionResponse to our surveyResponse, update our questions answered count
    addQuestionResponse(questionResponse) {
        let surveyResponse = this.state.surveyResponse;
        surveyResponse.questions.push(questionResponse);
        // send update 
        fetch(`/surveyresponses/${surveyResponse.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                'questions': surveyResponse.questions
            }
        })
            .then(response => response.json())
            .then((surveyResponse) => {
                let questionsAnswered = this.state.questionsAnswered;
                ++questionsAnswered;
                this.setState({
                    surveyResponse: surveyResponse,
                    questionsAnswered: questionsAnswered
                })
            })
            .catch((error) => {
                console.error('Error:', error);
            })
    }

    render() {
        let survey = this.props.survey;
        if (survey) {
            let question = this.state.question;
            let body;
            // if survey not complete, show current question
            if (this.state.questionsAnswered !== survey.questions.length) {
                body = <Modal.Body>
                    <QuestionResponse question={question} onSubmit={this.addQuestionResponse} />
                </Modal.Body>
            } else {
                body = <Modal.Body>
                    Survey Complete! 
                </Modal.Body>
            }
            return (
                <div id="SurveyResponse">
                    <Modal show={this.props.show} onHide={this.props.onHide} centered size="lg">
                        <Modal.Header closeButton>
                            <Modal.Title id="modal-current-survey-title">
                                {survey.title}
                            </Modal.Title>
                        </Modal.Header>
                        {body}
                    </Modal>
                </div>
            );
        }
        return (
            <div id="SurveyResponse">
                <Modal show={this.props.show} onHide={this.props.onHide} centered size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title id="modal-current-survey-title">
                            No Survey
                        </Modal.Title>
                    </Modal.Header>
                </Modal>
            </div>
        );
    }
}

export default SurveyResponse;