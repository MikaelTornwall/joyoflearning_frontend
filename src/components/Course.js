import React, { useLayoutEffect, useState, useRef } from 'react'
import { Editor, EditorState, RichUtils, AtomicBlockUtils, convertToRaw, convertFromRaw } from 'draft-js'
import { Container, Button, Header } from 'semantic-ui-react'
import Helper from './utils/editorHelper'
import { mediaBlockRenderer } from "./entities/mediaBlockRenderer"
import courseService from '../services/courses.js'
import 'draft-js/dist/Draft.css'
import './styles/Course.css'

const Course = ({ id }) => {

  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [title, setTitle] = useState('')

  useLayoutEffect(() => {
    getCourse()
  }, [])

  const getCourse = async () => {
    const course = await courseService.getCourse(id)
    const content = convertFromRaw(course.content)
    setEditorState(EditorState.createWithContent(content))
    setTitle(course.title)
  }

  console.log(id)

  return (
    <Container className="Course-container">
      <Header as="h1" className="Course-title">{title}</Header>
      <Editor
        blockRendererFn={mediaBlockRenderer}
        editorState={editorState}
        readOnly={true}
      />
    </Container>
  )
}

export default Course
