import React from 'react';
import ReactDom from 'react-dom';

class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put yout life in the hands of a computerh';
        const options = ['Thing one', 'Thing two', 'Thing four']

        const data = {
            title: 'Indecision',
            subtitle: 'Put yout life in the hands of a computerh'
        }

        return (
            <div>
                <Header data={data}/>
                <Action/>
                <Options options={options}/>
                <AddOption/>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.data.title}</h1>
                <h2>{this.props.data.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert('handlePick');
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll() {
        // alert('removeAll')
        console.log(this.props.options)
    }

    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove all</button>
                <ol>
                {
                    this.props.options.map((option, index) => <Option optionText={option} key={index}/>)
                }
                </ol>
            </div>
        );
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();
        let option = e.target.elements.option.value.trim();
        if(option) {
            alert(option);
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" placeholder="Option" id="option" name="option"></input>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <li>
                {this.props.optionText}
            </li>
        );
    }
}

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

ReactDom.render(<Counter/>, document.getElementById('app'));