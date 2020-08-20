import React from 'react';
import ChoiceList from './ChoiceList';

function Question(props) {
    const text = props.text;
    const choices = props.choices;
    return(
        <div>
            <p>{text}</p>
            <ChoiceList choices={choices} />
        </div>
    );
}

export default Question;