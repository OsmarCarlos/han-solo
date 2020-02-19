import React from 'react';
import ReactDom from 'react-dom';
import Counter from '../src/playground/counter'
// import VisibilityToggle from '../src/playground/built-it-visible'

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subtitle: 'Put yout life in the hands of a computer',
            options: props.options
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }

    componentDidMount() {
        try {
            const options = JSON.parse(localStorage.getItem('options'));
            
            if(options) {
                this.setState(() => ({ options: options}));
            }
        } catch (e) {
            // Do nothing at all
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevstate) => ({
            options: prevstate.options.filter(option => optionToRemove !== option)
        }));
    }

    handlePick() {
        let random = Math.floor(Math.random() * this.state.options.length);
        let option = this.state.options[random]
        alert(option);
    }

    handleAddOption(option) {
        if(!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }
        this.setState((prevstate) => ({ 
            options: prevstate.options.concat([option]) 
        }));
    }

    render() {
        return (
            <div>
                <Header subtitle={this.state.subtitle}/>
                <Action 
                    hasOptions={!this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
                {/* <br></br>
                <Counter/> */}
                {/* <br></br>
                <VisibilityToggle/> */}
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
    {props.subtitle && <p>{props.subtitle}</p>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
}

const Options = (props) => {
    return (
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
}


class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();
        let option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        e.target.elements.option.value = '';

        this.setState(() => ({ error }));
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" placeholder="Option" id="option" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

const Option = (props) => {
    return (
        <li>
            {props.optionText}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText)
                }}
            >
                Remove
            </button>
        </li>
    );
}

ReactDom.render(<IndecisionApp/>, document.getElementById('app'));