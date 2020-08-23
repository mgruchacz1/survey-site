import React from 'react';

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
        return(
            <div>
                Survey Response
            </div>
        );
    }
}

export default SurveyResponse;