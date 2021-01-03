import React from 'react';
import Form from './components/Form';
import GreetingMessage from './components/GreetingMessage'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Guest'
    }

    this.updateName = this.updateName.bind(this);
  }

  updateName(userName) {
    this.setState({
      name: userName.trim() ? userName : 'Guest'
    })
  }

  render() {
    return (
      <div>
        <GreetingMessage username={this.state.name}/>
        <Form onInput={this.updateName}/>
      </div>
    )
  }
}

export default App;
