import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

class Nav extends React.Component {



  render() {

    const notLoggedNav = () => (
      <Menu secondary>
        <Menu.Item
          as={Link} to="/"
          id="home"
          name="home"
          onClick={this.props.onClick} />
        <Menu.Item
          as={Link} to="/signup"
          id="signup"
          name="sign up"
          onClick={this.props.onClick}
        />
        <Menu.Item
          as={Link} to="/login"
          id="login"
          name="log in"
          onClick={this.props.onClick}
        />
      </Menu>
    )

    const loggedNav = () => (
      <Menu secondary>
        <Menu.Item name="home" onClick={this.props.onClick}>Home</Menu.Item>
        <Menu.Item name="profile" onClick={this.props.onClick}>Profile</Menu.Item>
        <Menu.Item name="mycourses" onClick={this.props.onClick}>My Courses</Menu.Item>
        <Menu.Item name="newcourse" onClick={this.props.onClick}>New Course</Menu.Item>
        <Menu.Item name="settings" onClick={this.props.onClick}>Settings</Menu.Item>
      </Menu>
    )

    return notLoggedNav()
  }
}

export default Nav
