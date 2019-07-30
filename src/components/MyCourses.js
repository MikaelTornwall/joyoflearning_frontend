import React from 'react'
import { Container, List, Button, Table, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const MyCourses = (props ) => {
  const { user } = props
  return (
    <Container>
    <Table basic='very' collapsing>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Course</Table.HeaderCell>
          <Table.HeaderCell>Students</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Change status</Table.HeaderCell>
          <Table.HeaderCell>Delete</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {user && user.courses.map(course =>
          <Table.Row key={course.id}>
           <Table.Cell>
              <Link
                to={`/mycourses/${course.id}`}>
              {course.title}</Link>
           </Table.Cell>
           <Table.Cell>0</Table.Cell>
           {course.active ? <Table.Cell positive><Icon name='checkmark' /> Active</Table.Cell> : <Table.Cell negative><Icon name='close' /> Draft</Table.Cell>}
           <Table.Cell><Button size="mini" color="orange">{course.active ? "Unpublish" : "Publish"}</Button></Table.Cell>
           <Table.Cell><Button onClick={() => props.remove(course.id)} size="mini" color="red"><i className="far fa-trash-alt"></i></Button></Table.Cell>
          </Table.Row>
          )}
          </Table.Body>
          </Table>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const ConnectedMyCourses = connect(mapStateToProps)(MyCourses)

export default ConnectedMyCourses
