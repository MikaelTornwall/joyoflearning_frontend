import React from 'react'
import StyleButton from './StyleButton'
import TYPES from './utils/editorHelper'
import './styles/RichEditor.css'

const MediaControls = ({ editorState, onClick }) => {

  return (
    <div className="RichEditor-controls">
      <StyleButton
        label="Image"
        onToggle={onClick}
      />
    </div>
  )
}

export default MediaControls
