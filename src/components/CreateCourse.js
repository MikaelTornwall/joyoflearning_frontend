import React from 'react'
import CourseEditor from './Editor'

const CreateCourse = ({ onSubmit }) => {

  return (
    <CourseEditor
      onSubmit={onSubmit}
    />
  )
}

export default CreateCourse
