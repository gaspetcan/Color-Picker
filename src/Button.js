import React from 'react';

class Button extends React.Component{
    constructor(props) {
        super(props);
        this.changeColor = this.changeColor.bind(this);
        this.state = {
            color: "",
        }
    }

    changeColor(){
        const colors = ["blue","red","yellow","green","black","aqua"]
        var color = colors[Math.floor(Math.random()*colors.length)];
        this.setState({
            color: color,
        })
    }

    render(){
        return (
            <button
                className={"Button " + this.state.color}
                onClick={this.changeColor}>
            </button>
        );
    }

}

export default Button;
