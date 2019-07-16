import React from 'react'

const StyleButton = ({ style, label, active, onToggle }) => {

  const toggle = (event) => {
    event.preventDefault()
    onToggle(style)
  }

  let className = 'RichEditor-styleButton'

  if (active) {
    className += ' RichEditor-activeButton'
  }

  return (
    <span className={className} onClick={toggle}>{label}</span>
  )
}

export default StyleButton
