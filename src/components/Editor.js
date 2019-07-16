import React, { useLayoutEffect, useState, useRef } from 'react'
import BlockStyleControls from './BlockStyleControls'
import InlineStyleControls from './InlineStyleControls'
import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw } from 'draft-js'
import { Button } from 'semantic-ui-react'
import Helper from './utils/editorHelper'
import 'draft-js/dist/Draft.css';

const CourseEditor = () => {

  const getEditorData = () => {
    const data = window.localStorage.getItem('contentState')
    return data ? JSON.parse(data) : null
  }

  const [editorState, setEditorState] = useState(getEditorData() ? EditorState.createWithContent(convertFromRaw(getEditorData())) : EditorState.createEmpty())
  const refContainer = useRef()

  useLayoutEffect(() => {
    refContainer.current.focus()
  })

  const saveEditorData = () => {
    const data = convertToRaw(editorState.getCurrentContent())
    window.localStorage.setItem('contentState', JSON.stringify(data))
  }

  const onChange = (editorState) => {
    setEditorState(editorState)
    saveEditorData()
  }

  const setLastDraft = () => {
    const data = getEditorData()
    if (data) {
      const contentState = convertFromRaw(data)
      setEditorState()
    }
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
    <div>
      <div className="RichEditor-root">
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
        blockStyleFunction={Helper.getBlockStyle}
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
      <Button onClick={saveEditorData}>Save</Button>
      <Button onClick={setLastDraft}>Return</Button>
    </div>
  )
}

export default CourseEditor
