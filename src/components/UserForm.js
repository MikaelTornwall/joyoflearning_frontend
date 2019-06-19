import React from 'react'
import userService from '../services/users.js'
import { Form, Button } from 'semantic-ui-react'
class UserForm extends React.Component {

  state = {
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    organization: ""
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
    console.log(this.state)
  }

  submit = async (event) => {
    event.preventDefault()

    const data = this.state

    console.log(data)

    userService.create(data)
  }

    render() {
      return (
        <Form onSubmit={this.submit}>
        <Form.Group widths="equal">
          <Form.Field>
            <label>First name:</label>
            <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Lastname:</label>
            <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange} />
          </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
          <Form.Field>
            <label>Email:</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Organization:</label>
            <input type="text" name="organization" value={this.state.organization} onChange={this.handleChange} />
          </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
          <Form.Field>
            <label>Username:</label>
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Password:</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          </Form.Field>
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      )
    }
}

export default UserForm
