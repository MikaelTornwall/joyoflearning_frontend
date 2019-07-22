import React from 'react'
import { Container, List, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const MyCourses = ({ courses, remove }) => {

  console.log('courses: ', courses)
  return (
    <Container>
      <List>
        {courses && courses.map(course =>
          <List.Item
            as={Link}
            to={`/mycourses/${course.id}`}
            key={course.id}>
            {course.title} <Button onClick={() => remove(course.id)} size="mini" color="red"><i className="far fa-trash-alt"></i></Button>
            </List.Item>
          )}
        </List>
    </Container>
  )
}

export default MyCourses
