import React, { useLayoutEffect, useState, useRef } from 'react'
import BlockStyleControls from './controlComponents/BlockStyleControls'
import InlineStyleControls from './controlComponents/InlineStyleControls'
import MediaControls from './controlComponents/MediaControls'
import { Editor, EditorState, RichUtils, AtomicBlockUtils, convertToRaw, convertFromRaw } from 'draft-js'
import { Container, Button } from 'semantic-ui-react'
import Helper from './utils/editorHelper'
import { mediaBlockRenderer } from "./entities/mediaBlockRenderer"
import 'draft-js/dist/Draft.css'

const CourseEditor = ({ onSubmit, course, id }) => {

  const getEditorData = () => {
    if (course) return course.getCurrentContent()

    let data = JSON.parse(window.localStorage.getItem('contentState'))

    return data ? convertFromRaw(data) : null
  }

  const [editorState, setEditorState] = useState(getEditorData() ? EditorState.createWithContent(getEditorData()) : EditorState.createEmpty())

  const refContainer = useRef()

  useLayoutEffect(() => {
    refContainer.current.focus()
  })

  const saveEditorData = () => {
    if (!course) {
      const data = convertToRaw(editorState.getCurrentContent())
      window.localStorage.setItem('contentState', JSON.stringify(data))
    } else {
      const data = convertToRaw(editorState.getCurrentContent())
      window.localStorage.setItem('editableCourse', JSON.stringify(data))
    }
  }

  const onChange = (editorState) => {
    setEditorState(editorState)
    saveEditorData()
  }

  const submit = async (event) => {
    event.preventDefault()
    onSubmit(convertToRaw(editorState.getCurrentContent()))
  }

  const addMedia = (type, message) => {
    const urlValue = window.prompt(`Paste ${type} link: \n${message}`)
    if (urlValue === '' || urlValue === null) return
    const contentState = editorState.getCurrentContent()
    const contentStateWithEntity = contentState.createEntity(
      type,
      'IMMUTABLE',
      { src: urlValue }
    )
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey()
    const newEditorState = EditorState.set(
      editorState,
      { currentContent: contentStateWithEntity },
      'create-entity'
    )
    setEditorState(AtomicBlockUtils.insertAtomicBlock(
      newEditorState,
      entityKey,
      ' '
    ))
    setTimeout(() => refContainer.current.focus(), 0);
  }

  const logState = () => console.log(editorState.toJS())

  const handleKeyCommand = ( command, editorState ) => {
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      setEditorState(newState)
      return 'handled'
    }
    return 'not-handled'
  }

  const onTab = (e) => {
    const maxDepth = 4
    setEditorState(RichUtils.onTab(e, editorState, maxDepth))
  }

  const toggleBlockType = (blockType) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType))
  }

  const toggleInlineStyle = (inlineStyle) => {
      setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle))
  }

  let className = 'RichEditor-editor'
  const contentState = editorState.getCurrentContent()
  if (!contentState.hasText()) {
    if (contentState.getBlockMap().first().getType() !== 'unstyled') {
      className +=' RichEditor-hidePlaceholder'
    }
  }

  return (
    <Container>
      <div className="RichEditor-root">
      <MediaControls
        onClick={addMedia}
      />
      <BlockStyleControls
        editorState={editorState}
        onToggle={toggleBlockType}
      />
      <InlineStyleControls
        editorState={editorState}
        onToggle={toggleInlineStyle}
      />
      <div className={className} onClick={focus()}>
      <Editor
        blockRendererFn={mediaBlockRenderer}
        blockStyleFn={Helper.getBlockStyle}
        handleKeyCommand={handleKeyCommand}
        editorState={editorState}
        onChange={onChange}
        onTab={onTab}
        placeholder="Enter some text..."
        ref={refContainer}
        spellCheck={true}
      />
      </div>
      </div>
      <Button onClick={logState}>Log state</Button>
      <Button onClick={submit}>{course ? 'Save changes' : 'Submit'  }</Button>
    </Container>
  )
}

export default CourseEditor
