import React, { useState } from 'react'
import { Editor, EditorState, RichUtils } from 'draft-js'
import { Button } from 'semantic-ui-react'
import 'draft-js/dist/Draft.css';

const CourseEditor = () => {

  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  const logState = () => console.log(editorState.toJS())

  const handleKeyCommand = ( command, editorState ) => {
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      setEditorState(newState)
      return 'handled'
    }
    return 'not-handled'
  }

  const toggleBlockType = (blockType) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType))
  }



  return (
    <div>
    Hello World!
    {/*<BlockStyleControls
      editorState={editorState}
      onToggle={toggleBlockType}
    />*/}
    <Editor
      handleKeyCommand={handleKeyCommand}
      editorState={editorState}
      onChange={setEditorState}
      placeholder="Enter some text..."
    />
    <Button onClick={logState}>Log state</Button>
    </div>
  )
}

export default CourseEditor
