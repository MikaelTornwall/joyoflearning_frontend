import React from 'react'
import StyleButton from '../StyleButton'
import TYPES from '../utils/editorHelper'
import '../styles/RichEditor.css'

const InlineStyleControls = ({ editorState, onToggle }) => {

  const currentStyle = editorState.getCurrentInlineStyle()

  return (
    <div className="RichEditor-controls">
    {console.log(currentStyle)}
      {TYPES.INLINE_STYLES.map(type =>
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={onToggle}
          style={type.style}
        />
      )}
    </div>
  )
}

export default InlineStyleControls
