import React from 'react';
import Choice from './Choice';
import ButtonGroup from 'react-bootstrap/ButtonGroup'

function ChoiceList(props) {
    const choices = props.choices;
    if (!choices) {
        return (
            <div>
                No choices.
            </div>
        )
    }
    const onChoose = props.onChoose;
    const listItems = choices.map((choice, index) =>
        <Choice key={index} choice={choice} onClick={onChoose}/>
    )
    return (
        <ButtonGroup>
            {listItems}
        </ButtonGroup>
    )
}

export default ChoiceList;