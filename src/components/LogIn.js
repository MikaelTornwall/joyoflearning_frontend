import React from 'react'
import { Container, Form, Button, Label, Header } from 'semantic-ui-react'

const Login = ({ errorMessage, username, password, setUsername, setPassword, onSubmit}) => (
      <Container>
        <Header as='h1'>Log in</Header>
        {errorMessage !== null && <Label basic color="red">{errorMessage}</Label>}
        <Form onSubmit={onSubmit}>
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
