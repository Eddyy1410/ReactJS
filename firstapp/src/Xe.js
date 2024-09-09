import React from "react";

class Car extends React.Component {
    render() {
        return <h2 style={{ color: this.props.color }}>Hi, Tôi là chiếc xe {this.props.value}!</h2>;
    }
}

export default Car;
