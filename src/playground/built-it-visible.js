import React from 'react';
import ReactDom from 'react-dom';

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false
        }
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
    }

    handleToggleVisibility() {
        this.setState((prevstate) => {
            return {
                visibility: !prevstate.visibility
            };
        });
    }

    render() {
        return(
            <div>
                <h1>Visibility</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>Hey. These are some details you can now see!</p>
                    </div>
                )}
            </div>
        )
    }
}

export default VisibilityToggle;