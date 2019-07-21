import React, { useLayoutEffect, useState, useRef } from 'react'
import { Editor, EditorState, RichUtils, AtomicBlockUtils, convertToRaw, convertFromRaw } from 'draft-js'
import { Container, Button } from 'semantic-ui-react'
import Helper from './utils/editorHelper'
import { mediaBlockRenderer } from "./entities/mediaBlockRenderer"
import 'draft-js/dist/Draft.css'
import courseService from '../services/courses.js'
const Course = () => {

  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [title, setTitle] = useState('')

  useLayoutEffect(() => {
    getCourse()
  }, [])

  const getCourse = async () => {
    const course = await courseService.getCourse('5d3472a956b79014b6e0de90')
    const content = convertFromRaw(course.content)
    setEditorState(EditorState.createWithContent(content))
    setTitle(course.title)
  }

  return (
    <Container>
      {title}
      <Editor
        blockRendererFn={mediaBlockRenderer}
        editorState={editorState}
        readOnly={true}
      />
    </Container>
  )
}

export default Course
