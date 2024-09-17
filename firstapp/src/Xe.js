import React from "react";

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color,
            value: props.value
        }
        console.log('this: ', this)
        // this.shoot = this.shoot.bind(this);
    }

    shoot = a => {
        console.log('shoot this: ', this);
        // console.log('shoot b: ', b);
        alert(a);
        /*onClick={() => this.shoot("HAHA")} called by render*/
    }

    shoot2(a){
        console.log('shoot2 this = ',this)
        // console.log('shoot2 a = ', a)
        alert(a);
        /*onClick={() => this.shoot("HAHA")} called by render*/
    }

    shoot3 = (a, event) => {
        alert(a + event.type);
    }

    render() {
        console.log('render');
        if (1==2) return (
            <h4 onClick={() => this.shoot2("Hello")} style={{ color: this.state.color, cursor: "pointer" }}>
                Hi, Tôi là chiếc xe {this.state.value}!
            </h4>
        )
        else return (
            <h4 onClick={(e) => this.shoot3("HAHA",e)} style={{ color: this.state.color, cursor: "pointer" }}>
                Hi, Tôi là chiếc xe {this.state.value}!
            </h4>
        );
    }
}

export default Car;
