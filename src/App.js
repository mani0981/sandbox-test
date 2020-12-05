import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = { displayBio: false };
    console.log("Component this", this);
    this.readMore = this.readMore.bind(this);
  }

  readMore() {
    this.setState({ displayBio: true });
    console.log("readMore", this);
  }

  render() {
    return (
      <div>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen! Chaange</h2>
        {this.state.displayBio ? (
          <div>
            <p>I live in San Jose, I am a hard worker.</p>
            <p>My favorit language HTML/CSS.</p>
            <p>Besides coding, i am alos trying to learn Guitar </p>
          </div>
        ) : (
          <button onClick={this.readMore}>Read More</button>
        )}
      </div>
    );
  }
}

export default App;
