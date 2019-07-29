import React from 'react'
import TYPES from '../utils/editorHelper'
import { Container } from 'semantic-ui-react'
import '../styles/RichEditor.css'

const MediaControls = ({ editorState, onClick }) => {

  const onButtonClick = (event, type) => {
    event.preventDefault()
    onClick(type.label, type.message)
  }

  return (
    <Container className="RichEditor-controls">
      {TYPES.MEDIA_TYPES.map(type =>
        <span
          key={type.label}
          className='RichEditor-styleButton RichEditor-mediaButton'
          onClick={(event) => onButtonClick(event, type)}>
          {type.symbol}
        </span>
      )}
    </Container>
  )
}

export default MediaControls
