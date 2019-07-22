import React from 'react'
import { Container, List, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const MyCourses = ({ courses, remove }) => {

  console.log('courses: ', courses)
  console.log('courses type: ', typeof courses)
  return (
    <Container>
      <List>
        {courses && typeof courses == 'object' && courses.map(course =>
          <div key={course.id}>
          <List.Item
            as={Link}
            to={`/mycourses/${course.id}`}>
            {course.title}
            </List.Item>
            <Button onClick={() => remove(course.id)} size="mini" color="red"><i className="far fa-trash-alt"></i></Button>
            </div>
          )}
        </List>
    </Container>
  )
}

export default MyCourses
