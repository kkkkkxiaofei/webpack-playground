import React, { Component } from 'react';

class User extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    }
  }

  render() {
    return (
      <div>
        <h2>User Component</h2>
        <h4 onClick={() => this.setState({ show: !this.state.show })}>click me</h4>
        {this.state.show && <p>this is the description fo user component</p>}
      </div>
    );
  }
}

export default User;