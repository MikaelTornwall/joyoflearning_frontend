import React from 'react'
import { Container, Image, Header } from 'semantic-ui-react'

const Profile = ({ profile, logo }) => (
  <Container>
  {console.log('Profile: ', profile)}
    <Header as='h2'>{profile && profile.username}</Header>
    <Image  src={profile && profile.logo.image.path} width="400" height="auto" alt="From the database" />
  </Container>
)

export default Profile
