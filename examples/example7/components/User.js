import React, { Component, lazy } from 'react';

const AsyncDescription = lazy(() => import('./AsyncDescription'));

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
        {this.state.show && <AsyncDescription />}
      </div>
    );
  }
}

export default User;