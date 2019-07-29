import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { logout } from '../reducers/userReducer'

const Nav = (props) => {
  const NotLoggedNav = () => (
      <Menu secondary>
        <Menu.Item
          as={Link} to="/"
          id="home"
          name="home" />
        <Menu.Item
          as={Link} to="/signup"
          id="signup"
          name="sign up" />
        <Menu.Item
          as={Link} to="/login"
          id="login"
          name="log in" />
      </Menu>
    )

    const AdminNav = () => (
      <Menu secondary>
        <Menu.Item
          as={Link} to="/"
          id="home"
          name="home" />
        <Menu.Item
          as={Link} to="/profile"
          id="profile"
          name="profile" />
        <Menu.Item
          as={Link} to="/mycourses"
          id="mycourses"
          name="my courses" />
        <Menu.Item
          as={Link} to="/createcourse"
          id="newcourse"
          name="new course" />
        <Menu.Item
          as={Link} to="/settings"
          id="settings"
          name="settings" />
        <Menu.Item
          as={Link} to="/login"
          id="logout"
          name="logout"
          onClick={() => props.logout()} />
      </Menu>
    )

    const StudentNav = () => (
      <Menu secondary>
        <Menu.Item
          as={Link} to="/"
          id="home"
          name="home" />
        <Menu.Item
          as={Link} to="/profile"
          id="profile"
          name="profile" />
        <Menu.Item
          as={Link} to="/mycourses"
          id="mycourses"
          name="my courses" />
        <Menu.Item
          as={Link} to="/settings"
          id="settings"
          name="settings" />
        <Menu.Item
          as={Link} to="/login"
          id="logout"
          name="logout"
          onClick={() => props.logout()} />
      </Menu>
    )

    const nav = () => {
      if (!props.user) {
        return <NotLoggedNav />
      } else if (props.user.role === "Admin") {
        return <AdminNav />
      } else if (props.user.role === "Student") {
        return <StudentNav />
      }
    }

    return nav()
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  logout
}

const ConnectedNav = connect(mapStateToProps, mapDispatchToProps)(Nav)

export default ConnectedNav
