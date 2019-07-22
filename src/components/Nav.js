import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const Nav = ({ user, onClick, handleLogout }) => {
  const NotLoggedNav = () => (
      <Menu secondary>
        <Menu.Item
          as={Link} to="/"
          id="home"
          name="home"
          //onClick={onClick}
          />
        <Menu.Item
          as={Link} to="/signup"
          id="signup"
          name="sign up"
          onClick={onClick}
        />
        <Menu.Item
          as={Link} to="/login"
          id="login"
          name="log in"
          onClick={onClick}
        />
      </Menu>
    )

    const LoggedNav = () => (
      <Menu secondary>
        <Menu.Item
          as={Link} to="/"
          id="home"
          name="home"
          onClick={onClick} />
        <Menu.Item
          as={Link} to="/profile"
          id="profile"
          name="profile"
          onClick={onClick} />
        <Menu.Item
          as={Link} to="/mycourses"
          id="mycourses"
          name="my courses"
          onClick={onClick} />
        <Menu.Item
          as={Link} to="/createcourse"
          id="newcourse"
          name="new course"
          onClick={onClick} />
        <Menu.Item
          as={Link} to="/settings"
          id="settings"
          name="settings"
          onClick={onClick} />
        <Menu.Item
          as={Link} to="/login"
          id="logout"
          name="logout"
          onClick={handleLogout} />
      </Menu>
    )

    return user === null ? <NotLoggedNav /> : <LoggedNav />
}

export default Nav
