import React from 'react'
import { Container, List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const MyCourses = ({ courses }) => {

  console.log('courses: ', courses)
  return (
    <Container>
      <List>
        {courses && courses.map(course =>
          <List.Item
            as={Link}
            to={`/mycourses/${course.id}`}
            key={course.id}>            
            {course.title}
            </List.Item>
          )}
        </List>
    </Container>
  )
}

export default MyCourses
