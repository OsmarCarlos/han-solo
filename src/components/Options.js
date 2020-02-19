import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <button onClick={props.handleDeleteOptions}>Remove all</button>
        {props.options.length === 0 && <p>Please add an option to get started!</p>}
        <ol>
        {
            props.options.map((option, index) => (
            <Option 
                optionText={option} 
                key={index}
                handleDeleteOption={props.handleDeleteOption}
            />
            ))
        }
        </ol>
    </div>
)

export default Options;