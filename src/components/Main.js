import React, { Component } from 'react';
import Buttons from './Buttons';
import Screen from './screen';
import {
    Card, CardText, CardBody, CardTitle
} from 'reactstrap';


class Main extends Component {

    constructor(props) {
        super(props)

        this.state = {
            result: ""
        }
    }

    onClick = (button) => {

        if (button === "=") {
            this.calculate()
        }

        else if (button === "C") {
            this.reset()
        }
        else if (button === "CE") {
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };

    calculate = () => {
        try {
            this.setState({
                result: (eval(this.state.result) || "") + ""
            })
        }
        catch {
            this.setState({
                result: "error"
            })
        }
    }

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };


    render() {
        return (
            <div className="main">
                <h1 className="heading">Calculator</h1>
                <Screen result={this.state.result} />
                <Buttons onClick={this.onClick} />
            </div>
        );
    }
    
}

export default Main;