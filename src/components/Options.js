import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button 
            onClick={props.handleDeleteOptions}
            className="button button--link"
            >
                Remove all
            </button>
        </div>
        {props.options.length === 0 && <p className="widget__message">Please add an option to get started!</p>}
        {/* <ol> */}
        {
            props.options.map((option, index) => (
            <Option 
                optionText={option}
                count={index + 1}
                key={index}
                handleDeleteOption={props.handleDeleteOption}
            />
            ))
        }
        {/* </ol> */}
    </div>
)

export default Options;