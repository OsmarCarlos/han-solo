import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';
// import VisibilityToggle from '../src/playground/built-it-visible'

export default class IndecisionApp extends React.Component {
    state = {
        subtitle: 'Put yout life in the hands of a computer',
        options: [],
        selectedOption: undefined
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
    
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined}))
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevstate) => ({
            options: prevstate.options.filter(option => optionToRemove !== option)
        }));
    }

    handlePick = () => {
        let random = Math.floor(Math.random() * this.state.options.length);
        let option = this.state.options[random]
        this.setState(() => ({ selectedOption: option}));
    }

    handleAddOption = (option) => {
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
                <div className="container">
                    <Action 
                        hasOptions={!this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options 
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                >
                </OptionModal>
                {/* <br></br>
                <Counter/> */}
                {/* <br></br>
                <VisibilityToggle/> */}
            </div>
        );
    }
}
