import React from 'react'
import { Container, Form, Button, Label, Header, Message } from 'semantic-ui-react'

const Login = ({ errorMessage, username, password, setUsername, setPassword, onSubmit}) => (
  <Container>
    <Header as='h1'>Log in</Header>
    <Form onSubmit={onSubmit} error>
      <Message
        error
        header={errorMessage}
      />
      <Form.Field inline>
        <label>Username</label>
        <input type="text" name="username" value={username} onChange={setUsername} />
      </Form.Field>
      <Form.Field inline>
        <label>Password</label>
        <input type="password" name="password" value={password} onChange={setPassword} />
      </Form.Field>
      <Button type="submit" color="green">Log In</Button>
    </Form>
  </Container>
)

export default Login
