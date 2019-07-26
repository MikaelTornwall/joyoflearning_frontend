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
        <Form.Input icon='user' iconPosition='left' label="Username" type="text" name="username" value={username} onChange={setUsername} />
      </Form.Field>
      <Form.Field inline>
        <Form.Input icon='lock' iconPosition='left' label="Password" type="password" name="password" value={password} onChange={setPassword} />
      </Form.Field>
      <Button type="submit" color="green">Log In</Button>
    </Form>
  </Container>
)

export default Login
