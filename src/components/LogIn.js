import React from 'react'
import { Container, Form, Button, Label, Header, Message } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { setErrorMessage } from '../reducers/messageReducer'


const Login = (props) => {

return (
  <Container>
    <Header as='h1'>Log in</Header>
    <Form onSubmit={props.onSubmit} error>
      {<Message
        error
        header={props.message}
      />}
      <Form.Field inline>
        <Form.Input icon='user' iconPosition='left' label="Username" type="text" name="username" value={props.username} onChange={props.setUsername} />
      </Form.Field>
      <Form.Field inline>
        <Form.Input icon='lock' iconPosition='left' label="Password" type="password" name="password" value={props.password} onChange={props.setPassword} />
      </Form.Field>
      <Button type="submit" color="green">Log In</Button>
    </Form>
  </Container>
)
}
const mapStateToProps = (state) => {
  return {
    message: state.message
  }
}

const mapDispatchToProps = {
  setErrorMessage
}
/*
const mapDispatchToProps = dispatch => {
  return {
      setErrorMessage: value => {
        dispatch(setErrorMessage(value))
      }
  }
}*/

const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login)

export default ConnectedLogin
