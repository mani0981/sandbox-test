import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

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
            <button onClick={this.toggleDisplayBio}>Show Less</button>
          </div>
        ) : (
          <button onClick={this.toggleDisplayBio}>Read More</button>
        )}
      </div>
    );
  }
}

export default App;
