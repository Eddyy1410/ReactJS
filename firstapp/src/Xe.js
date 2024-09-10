import React from "react";

class Car extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            color: props.color,
            value: props.value
        } 
        console.log('Xe constructor: ',props)
    }

    
    render() {
        return <h4 style={{ color: this.state.color }}>Hi, Tôi là chiếc xe {this.state.value}!</h4>;
    }
}

export default Car;
