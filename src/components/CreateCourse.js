import React from 'react'
import CourseEditor from './Editor'

const CreateCourse = ({ onSubmit, course }) => {

  return (
    <CourseEditor
      onSubmit={onSubmit}
      course={course}
    />
  )
}

export default CreateCourse
