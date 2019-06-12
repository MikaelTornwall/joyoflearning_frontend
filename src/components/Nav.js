import React from 'react'
import { Menu } from 'semantic-ui-react'

class Nav extends React.Component {
  render() {

    const notLoggedNav = () => (
      <Menu secondary>
        <Menu.Item name="home"></Menu.Item>
        <Menu.Item name="sign up"></Menu.Item>
        <Menu.Item name="log in"></Menu.Item>
      </Menu>
    )

    const loggedNav = () => (
      <Menu secondary>
        <Menu.Item name="home"></Menu.Item>
        <Menu.Item name="profile"></Menu.Item>
        <Menu.Item name="new course"></Menu.Item>
      </Menu>
    )

    return notLoggedNav()
  }
}

export default Nav
