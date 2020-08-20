import React from 'react';
import ChoiceList from './ChoiceList';

class Question extends React.Component {

    constructor(props) {
        super(props);
        this.state = { question: null };
    }

    componentDidMount() {
        fetch(this.props.question)
        .then(response => response.json())
        .then(
            (question) => {
                this.setState({
                    isLoaded: true,
                    question: question
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
        const {error, isLoaded, question} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            if (question) {
                return (
                    <div>
                        {question.text} <br />
                        <ChoiceList choices={question.choices} />
                    </div>
                );
            } else {
                return (
                    <div>
                        No question.
                    </div>
                )
            }
        }
    }

}

export default Question;