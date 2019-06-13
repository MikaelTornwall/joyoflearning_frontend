import React from 'react'
import { Container, Form, Button } from 'semantic-ui-react'

class LogIn extends React.Component {

  render() {

    return (
      <Container>
        <Form>
          <Form.Field>
            <label>Username</label>
            <input type="text" />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input type="password" />
          </Form.Field>
          <Button color="red">Log In</Button>
        </Form>
      </Container>
    )
  }
}

export default LogIn
