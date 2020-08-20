import React from 'react';
import Choice from './Choice';

function ChoiceList(props) {
    const choices = props.choices;
    if (!choices) {
        return (
            <div>
                No choices.
            </div>
        )
    }
    const listItems = choices.map((choice, index) =>
        <Choice key={index} choice={choice}></Choice>
    )
    return(
        <ul>{listItems}</ul>
    )
}

export default ChoiceList;