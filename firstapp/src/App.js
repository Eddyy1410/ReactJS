import logo from './logo.svg';
import './App.css';
import Xe from './Xe';
import React from 'react';

function App() {
  const html = (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React - Hello World !
        </a>
        <Xe color='red' value='màu đỏ'/>
        <Xe color='yellow' value='màu vàng'/>
        <Xe color='orange' value='màu cam'/>
      </header>
    </div>
  );
  return html;
}

export class Car extends React.Component {
  constructor() {
    super();
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  changeColor = () => {
    this.setState({ color: "blue" });
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color} {this.state.model} from {this.state.year}.
        </p>
        <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
      </div>
    );
  }
}

export default App;