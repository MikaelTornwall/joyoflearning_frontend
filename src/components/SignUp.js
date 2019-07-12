import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import UserForm from './UserForm'

class SignUp extends React.Component {
    render() {
    return (
      <Container>
        <Header as='h1'>Sign up</Header>
        <UserForm />
      </Container>
    )
  }

}

export default SignUp
