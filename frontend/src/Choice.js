import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import './Choice.css';

function Choice(props) {
    const [choice, setChoice] = React.useState(null)

    useEffect(() => {
        if (props.choice) {
            fetch(props.choice)
                .then(response => response.json())
                .then((choice) => {
                    setChoice(choice)
                })
        }
    }, [props.choice,])

    if (!choice) {
        return (
            <div>
                No choice.
            </div>
        )
    }

    function choose() {
        props.onClick(choice);
    }

    return (
        <div>
            <Button onClick={choose}>{choice.text}</Button>
        </div>
    )
}


export default Choice;