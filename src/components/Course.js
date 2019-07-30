import React, { useLayoutEffect, useState } from 'react'
import CourseEditor from './Editor'
import { Editor, EditorState, convertFromRaw } from 'draft-js'
import { Container, Button, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { mediaBlockRenderer } from "./entities/mediaBlockRenderer"
import courseService from '../services/courses.js'
import 'draft-js/dist/Draft.css'
import './styles/Course.css'

const Course = ({ id, editing }) => {

  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [title, setTitle] = useState('')
  const [edit, setEdit] = useState(editing)
  const [course, setCourse] = useState(null)

  const getCourse = async () => {
    const course = await courseService.getCourse(id)
    setCourse(course)
    const content = convertFromRaw(course.content)
    setEditorState(EditorState.createWithContent(content))
    setTitle(course.title)
  }

  useLayoutEffect(() => {
    getCourse()
  }, [])

  const saveChanges = () => {
    console.log('saved')
  }

  const Render = () => {
    if (edit) {
      return (
        <Container>
          <Header as="h1">Editing...</Header>
          <CourseEditor
            onSubmit={saveChanges}
            course={editorState}
            id={id}
          />
        </Container>
      )
    } else {
      return (
        <Container className="Course-container">
        <Header as="h1" className="Course-title">{title}</Header>
        <Editor
          blockRendererFn={mediaBlockRenderer}
          editorState={editorState}
          readOnly={true}
        />
        <Button
        as={Link}
        to={`/mycourses/${id}/edit`}
        onClick={() => setEdit(true)}>Edit</Button>
        <Button>
        {course && course.active ? 'Unpublish' : 'Publish'}
        </Button>
        </Container>
      )
    }
  }

  return <Render />
}

export default Course
