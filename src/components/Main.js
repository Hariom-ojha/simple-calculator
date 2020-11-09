import React, { Component } from 'react';
import Buttons from './Buttons';

class Main extends Component {

    constructor(props) {
        super(props)

        this.state = {
            result: ""
        }
    }


    render() {
        return (
            <div className="App">
                <Buttons onClick={this.onClick} />
            </div>
        );
    }
    
}

export default Main;