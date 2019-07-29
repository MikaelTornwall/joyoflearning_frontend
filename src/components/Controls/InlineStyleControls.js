import React from 'react'
import StyleButton from '../StyleButton'
import TYPES from '../utils/editorHelper'
import { Container } from 'semantic-ui-react'
import '../styles/RichEditor.css'

const InlineStyleControls = ({ editorState, onToggle }) => {

  const currentStyle = editorState.getCurrentInlineStyle()

  return (
    <Container className="RichEditor-controls">    
      {TYPES.INLINE_STYLES.map(type =>
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={onToggle}
          style={type.style}
        />
      )}
    </Container>
  )
}

export default InlineStyleControls
