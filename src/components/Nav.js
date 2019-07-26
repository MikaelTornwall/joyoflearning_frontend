import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const Nav = ({ user, onClick, handleLogout }) => {

  console.log('User: ', user)
  const NotLoggedNav = () => (
      <Menu secondary>
        <Menu.Item
          as={Link} to="/"
          id="home"
          name="home"
          onClick={onClick} />
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

    const AdminNav = () => (
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

    const StudentNav = () => (
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

    const nav = () => {
      if (!user) {
        return <NotLoggedNav />
      } else if (user.role === "Admin") {
        return <AdminNav />
      } else if (user.role === "Student") {
        return <StudentNav />
      }
    }

    return nav()
}

export default Nav
