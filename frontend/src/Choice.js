import React from 'react';

function Choice(props) {
    const choice = props.choice;
    if (!choice) {
        return (
            <div>
                No choice.
            </div>
        )
    }
    return(
        <div>
            {choice.text}
        </div>
    )
}


export default Choice;