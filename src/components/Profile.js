import React from 'react'
import { Container, Image, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { assignUser } from '../reducers/userReducer'

const newUser = {
  username: "Simo",
  id: "11111",
  role: "Admin"
}

const Profile = (props) => (
  <Container>
  {console.log('Profile: ', props.user)}
    <Header as='h2'>{props.user.username}</Header>
    {/*<Image  src={profile && profile.logo.image.path} width="400" height="auto" alt="From the database" />*/}
    <button onClick={() => props.assignUser(newUser)}>Switch</button>
  </Container>
)

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  assignUser,
}

const ConnectedProfile = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)

export default ConnectedProfile
