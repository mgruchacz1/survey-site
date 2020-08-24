import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import QuestionResponse from './QuestionResponse';

class SurveyResponse extends React.Component {

    // props are a survey object, and a callback to execute when survey is complete
    constructor(props) {
        super(props);
        this.state = { question: null, questionsAnswered: 0, };
    }

    // post request to create survey response object
    // get request to get survey questions
    componentDidUpdate(prevProps) {
        // if survey changed, load new questions and create survey response
        if ((this.props.survey != null) && (prevProps.survey !== this.props.survey)) {
            this.loadQuestion();
            this.createSurveyResponse();
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
        // fetch(`/surveys/`)
    }

    render() {
        let survey = this.props.survey;
        if (survey) {
            let question = this.state.question;
            return (
                <div id="SurveyResponse">
                    <Modal show={this.props.show} onHide={this.props.onHide} centered size="lg">
                        <Modal.Header closeButton>
                            <Modal.Title id="modal-current-survey-title">
                                {survey.title}
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <QuestionResponse question={question} />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.props.onSubmit}>Submit</Button>
                        </Modal.Footer>
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