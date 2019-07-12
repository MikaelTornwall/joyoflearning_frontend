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
    organization: "",
    logo: null
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
    console.log(this.state)
  }

  submit = async (event) => {
    event.preventDefault()

    const formData = new FormData()

    await formData.append('firstname', this.state.firstname)
    await formData.append('lastname', this.state.lastname)
    await formData.append('email', this.state.email)
    await formData.append('username', this.state.username)
    await formData.append('password', this.state.password)
    await formData.append('organization', this.state.organization)
    await formData.append('logo', this.state.logo)

    await userService.create(formData)

    this.setState({
      firstname: "",
      lastname: "",
      email: "",
      username: "",
      password: "",
      organization: "",
      logo: null
    })
  }

  fileHandler = async (event) => {
    console.log(event.target.files[0])
    await this.setState({ logo: event.target.files[0] })
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
          <Form.Group>
            <Form.Field>
              <input
                style={{display: 'none'}}
                type="file"
                encType="multipart/form-data"
                name="image"
                onChange={this.fileHandler}
                ref={fileInput => this.fileInput = fileInput}
              />
            <div onClick={() => this.fileInput.click()}>Select file</div>
            </Form.Field>
          </Form.Group>
          <Button style={{marginTop: "10px"}} type="submit">Submit</Button>
        </Form>
      )
    }
}

export default UserForm
