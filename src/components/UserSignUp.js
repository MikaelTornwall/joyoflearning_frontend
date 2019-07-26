import React, { useRef } from 'react'
import { Container, Header, Form, Button } from 'semantic-ui-react'

const UserSignUp = ({ submit, firstname, lastname, email, username, password, organization, logo }) => {

  const ref = useRef(null)

  return (
    <Container>
      <Header as='h1'>Sign up to create courses</Header>
        <Form onSubmit={submit}>
          <Form.Group widths="equal">
            <Form.Field>
              <label>First name:</label>
              <input type="text" name="firstname" value={firstname[0]} onChange={firstname[1]} />
            </Form.Field>
            <Form.Field>
              <label>Lastname:</label>
              <input type="text" name="lastname" value={[lastname[0]]} onChange={lastname[1]} />
            </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field>
              <label>Email:</label>
              <input type="email" name="email" value={email[0]} onChange={email[1]} />
            </Form.Field>
            <Form.Field>
              <label>Organization:</label>
              <input type="text" name="organization" value={organization[0]} onChange={organization[1]} />
            </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field>
              <label>Username:</label>
              <input type="text" name="username" value={username[0]} onChange={username[1]} />
            </Form.Field>
            <Form.Field>
              <label>Password:</label>
              <input type="password" name="password" value={password[0]} onChange={password[1]} />
            </Form.Field>
          </Form.Group>
        <Form.Group>
          <Form.Field>
            <input
              style={{display: 'none'}}
              type="file"
              encType="multipart/form-data"
              name="image"
              onChange={logo[1]}
              ref={ref}
            />
            <div onClick={() => ref.current.click()}>Select file</div>
            <span>{logo[0] && logo[0].name}</span>
          </Form.Field>
        </Form.Group>
        <Button style={{marginTop: "10px"}} type="submit" color="green">Submit</Button>
      </Form>
    </Container>
  )
}

export default UserSignUp
