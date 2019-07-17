import React from 'react'

const BLOCK_TYPES = [
  {label: 'H1', style: 'header-one'},
  {label: 'H2', style: 'header-two'},
  {label: 'H3', style: 'header-three'},
  {label: 'H4', style: 'header-four'},
  {label: 'H5', style: 'header-five'},
  {label: 'H6', style: 'header-six'},
  {label: 'Blockquote', style: 'blockquote'},
  {label: 'UL', style: 'unordered-list-item'},
  {label: 'OL', style: 'ordered-list-item'},
  {label: 'Code Block', style: 'code-block'}
]

const INLINE_STYLES = [
  {label: 'Bold', style: 'BOLD'},
  {label: 'Italic', style: 'ITALIC'},
  {label: 'Underline', style: 'UNDERLINE'},
  {label: 'Monospace', style: 'CODE'}
]

const MEDIA_TYPES = [
  {label: 'image', symbol: <i className="far fa-image"></i>},
  {label: 'video', symbol: <i className="fas fa-video"></i>},
  {label: 'audio', symbol: <i className="fas fa-volume-up"></i>}
]

const getBlockStyle = (block) => {
  if (block.getType() === 'blockquote') return 'RichEditor-blockquote'
  return null
}

export default { BLOCK_TYPES, INLINE_STYLES, MEDIA_TYPES, getBlockStyle }
