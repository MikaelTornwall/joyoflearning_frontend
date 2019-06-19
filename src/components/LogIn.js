import React from 'react'
import { Container, Form, Button } from 'semantic-ui-react'

class LogIn extends React.Component {

  render() {

    return (
      <Container>
        <Form onSubmit={this.props.onSubmit}>
          <Form.Field inline>
            <label>Username</label>
            <input type="text" name="username" value={this.props.username} onChange={this.props.onChange} />
          </Form.Field>
          <Form.Field inline>
            <label>Password</label>
            <input type="password" name="password" value={this.props.password} onChange={this.props.onChange} />
          </Form.Field>
          <Button type="submit" color="red">Log In</Button>
        </Form>
      </Container>
    )
  }
}

export default LogIn
