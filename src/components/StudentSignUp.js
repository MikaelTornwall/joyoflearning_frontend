import React, { useRef } from 'react'
import { Container, Header, Form, Button } from 'semantic-ui-react'

const StudentSignUp = ({ submit, firstname, lastname, email, username, password, organization, logo }) => {

  return (
    <Container>
      <Header as='h1'>Sign up to learn</Header>
      <Form onSubmit={submit}>
        <Form.Group widths="equal">
          <Form.Field>
            <label>Email:</label>
            <input type="email" name="email" value={email[0]} onChange={email[1]} />
          </Form.Field>
          <Form.Field>
            <label>Username:</label>
            <input type="text" name="username" value={username[0]} onChange={username[1]} />
          </Form.Field>
          <Form.Field>
            <label>Password:</label>
            <input type="password" name="password" value={password[0]} onChange={password[1]} />
          </Form.Field>
        </Form.Group>
        <Button style={{marginTop: "10px"}} type="submit" color="green">Submit</Button>
      </Form>
    </Container>
  )
}

export default StudentSignUp
