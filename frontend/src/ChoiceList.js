import React from 'react';

function ChoiceList(props) {
    const choices = props.choices;
    const listItems = choices.map((choice) =>
        <Choice key={choice.id} text={choice.text}></Choice>
    )
    return(
        <ul>{listItems}</ul>
    )
}

export default ChoiceList;