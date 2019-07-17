import React from 'react'
import StyleButton from './StyleButton'
import TYPES from './utils/editorHelper'
import './styles/RichEditor.css'

const MediaControls = ({ editorState, onClick }) => {

  const onButtonClick = (event, type) => {
    event.preventDefault()
    onClick(type.label)
  }

  return (
    <div className="RichEditor-controls">
      {TYPES.MEDIA_TYPES.map(type =>
        <span key={type.label} className='RichEditor-styleButton' onClick={(event) => onButtonClick(event, type)}>{type.symbol}</span>
      )}
    </div>
  )
}

export default MediaControls
