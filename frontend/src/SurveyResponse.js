import React from 'react';
import Modal from 'react-bootstrap/Modal'

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
        var surveyTitle = (this.props.title ? this.props.title : "No Survey");
        return(
            <div>
                <Modal {...props} centered size="lg">
                    <Modal.Header closeButton>
                        <Modal.title id="modal-current-survey-title">
                            Survey Title: {surveyTitle}
                        </Modal.title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Question Title</h4>
                        <p>choice list</p>
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