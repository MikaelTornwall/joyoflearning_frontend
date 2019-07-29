import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Button, Divider, Form, Grid, Segment, Header } from 'semantic-ui-react'

const SignUpSelect = ({ submit, firstname, lastname, email, username, password, organization, logo }) => {
  return (
    <Container>
      <Segment basic color='pink' circular placeholder style={{width: "600px"}}>
        <Grid columns={2} relaxed='very' stackable>
          <Grid.Column>
            <Button as={Link} to="signup/user" basic color='orange' size='big'><i className="fas fa-chalkboard-teacher"></i> Teach!</Button>
          </Grid.Column>
          <Grid.Column verticalAlign='middle'>
            <Button as={Link} to="signup/student" basic color='yellow' size='big'><i className="fas fa-graduation-cap"></i> Learn!</Button>
          </Grid.Column>
        </Grid>
        <Divider vertical>Or</Divider>
      </Segment>
    </Container>
  )
}

export default SignUpSelect
