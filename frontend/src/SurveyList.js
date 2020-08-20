import React from 'react';
import Survey from './Survey';

class SurveyList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { surveys: null };
    }

    componentDidMount() {
        fetch("http://localhost:8000/surveys/")
            .then(response => response.json())
            .then(
                (surveys) => {
                    this.setState({
                        isLoaded: true,
                        surveys: surveys
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )

    }

    render() {
        const { error, isLoaded, surveys } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            if (surveys) {
                const listItems = surveys.map((survey) =>
                    <Survey survey={survey} key={survey.id} />
                );
                return (
                    <ul>{listItems}</ul>
                );
            } else {
                return (
                    <div>
                        No Surveys.
                    </div>
                )
            }
        }
    }
}

export default SurveyList;