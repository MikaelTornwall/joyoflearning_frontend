import React from 'react'
import userService from '../services/users.js'

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
        <form onSubmit={this.submit}>
          First name: <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} />
          Lastname: <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange} />
          Email: <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
          Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          Organization: <input type="text" name="organization" value={this.state.organization} onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
      )
    }
}

export default UserForm
