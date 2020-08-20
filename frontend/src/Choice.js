import React from 'react';

class Choice extends React.Component {

    constructor(props) {
        super(props);
        this.state = { choice: null };
    }

    componentDidMount() {
        fetch(this.props.choice)
        .then(response => response.json())
        .then(
            (choice) => {
                this.setState({
                    isLoaded: true,
                    choice: choice
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
        const { error, isLoaded, choice } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            if (choice) {
                return (
                    <div>
                        {choice.text}
                    </div>
                );
            } else {
                return (
                    <div>
                        No choice.
                    </div>
                )
            }
        }
    }
}

export default Choice;