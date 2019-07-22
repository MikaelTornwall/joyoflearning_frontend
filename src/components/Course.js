import React, { useLayoutEffect, useState, useRef } from 'react'
import CourseEditor from './Editor'
import { Editor, EditorState, RichUtils, AtomicBlockUtils, convertToRaw, convertFromRaw } from 'draft-js'
import { Container, Button, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Helper from './utils/editorHelper'
import { mediaBlockRenderer } from "./entities/mediaBlockRenderer"
import courseService from '../services/courses.js'
import 'draft-js/dist/Draft.css'
import './styles/Course.css'

const Course = ({ id, editing }) => {

  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [title, setTitle] = useState('')
  const [edit, setEdit] = useState(editing)

  useLayoutEffect(() => {
    getCourse()
  }, [])

  const getCourse = async () => {
    const course = await courseService.getCourse(id)
    const content = convertFromRaw(course.content)
    setEditorState(EditorState.createWithContent(content))
    setTitle(course.title)
  }

  const Render = () => {
    if (edit) {
      return (
        <Container>
          <Header as="h1">Editing...</Header>
          <CourseEditor
            course={editorState}
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
        </Container>
      )
    }
  }

  return <Render />
}

export default Course
