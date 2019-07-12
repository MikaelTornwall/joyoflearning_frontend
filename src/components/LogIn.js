import React from 'react'
import { Container, Form, Button } from 'semantic-ui-react'

const Login = ({ errorMessage, username, password, setUsername, setPassword, onSubmit}) => (
      <Container>
      <div>{errorMessage}</div>
        <Form onSubmit={onSubmit}>
          <Form.Field inline>
            <label>Username</label>
            <input type="text" name="username" value={username} onChange={setUsername} />
          </Form.Field>
          <Form.Field inline>
            <label>Password</label>
            <input type="password" name="password" value={password} onChange={setPassword} />
          </Form.Field>
          <Button type="submit" color="red">Log In</Button>
        </Form>
      </Container>
)

export default Login
