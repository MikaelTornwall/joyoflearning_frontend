import React from 'react'
import StyleButton from '../StyleButton'
import TYPES from '../utils/editorHelper'
import { Container } from 'semantic-ui-react'
import '../styles/RichEditor.css'

const BlockStyleControls = ({ editorState, onToggle }) => {

  const selection = editorState.getSelection()
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType()

  return (
    <Container className="RichEditor-controls">    
      {TYPES.BLOCK_TYPES.map(type =>
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={onToggle}
          style={type.style}
        />
      )}
    </Container>
  )
}

export default BlockStyleControls
