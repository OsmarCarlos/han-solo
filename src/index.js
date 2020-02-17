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
        console.log(this.props)
        return (
            <div>
                <h1>{this.props.data.title}</h1>
                <h2>{this.props.data.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
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
    render() {
        return (
            <div>
                <p>Add option!</p>
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

ReactDom.render(<IndecisionApp/>, document.getElementById('app'));