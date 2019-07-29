import React from 'react'
import { Container, List, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const MyCourses = (props ) => {
  const { user } = props
  return (
    <Container>
      <List>
        {user && user.courses.map(course =>
          <div key={course.id}>
          <List.Item
            as={Link}
            to={`/mycourses/${course.id}`}>
            {course.title}
            </List.Item>
            <Button onClick={() => props.remove(course.id)} size="mini" color="red"><i className="far fa-trash-alt"></i></Button>
            </div>
          )}
        </List>
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
