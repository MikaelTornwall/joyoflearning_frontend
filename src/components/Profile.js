import React from 'react'
import { Container, Image, Header } from 'semantic-ui-react'

const Profile = ({ profile }) => (
  <Container>
  {console.log(profile)}
    <Header as='h2'>{profile.username}</Header>
  </Container>
)

export default Profile
