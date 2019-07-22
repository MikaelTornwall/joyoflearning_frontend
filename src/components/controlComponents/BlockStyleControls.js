import React from 'react'
import StyleButton from '../StyleButton'
import TYPES from '../utils/editorHelper'
import '../styles/RichEditor.css'

const BlockStyleControls = ({ editorState, onToggle }) => {

  const selection = editorState.getSelection()
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType()

  return (
    <div className="RichEditor-controls">
    {console.log(TYPES.BLOCK_TYPES)}
      {TYPES.BLOCK_TYPES.map(type =>
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={onToggle}
          style={type.style}
        />
      )}
    </div>
  )
}

export default BlockStyleControls
