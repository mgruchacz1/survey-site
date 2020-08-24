import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SurveyResponse extends React.Component {

    // props are a survey object, and a callback to execute when survey is complete
    constructor(props) {
        super(props);
        this.state = {questionsAnswered : 0};
    }

    // post request to create survey response object
    componentDidMount() {

    }

    render() {
        let surveyTitle = (this.props.survey ? this.props.survey.title : "No Survey");
        return(
            <div id="SurveyResponse">
                <Modal show={this.props.show} onHide={this.props.onHide} centered size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title id="modal-current-survey-title">
                            Survey Title: {surveyTitle}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Question Title</h4>
                        <h6>Choice List</h6>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.onSubmit}>Submit</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default SurveyResponse;