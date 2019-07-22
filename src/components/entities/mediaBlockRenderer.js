import React from "react"
import { EditorState, RichUtils, AtomicBlockUtils } from "draft-js"

export const mediaBlockRenderer = block => {
  console.log('Hit!')
  // console.log('Block type: '. block.getType())
  if (block.getType() === 'atomic') {
    return {
      component: Media,
      editable: false
    }
  }
  return null
}

const Image = (props) => {
  // console.log('Image props: ', props)
  if (!!props.src) {
    return <img src={props.src} />
  }
  return null
}

const Video = (props) => {
  if (!!props.src) {
    let src = props.src

    if (src.includes('watch?v=')) {
        src = src.replace('watch?v=', 'embed/')
    } else if (src.includes('youtu.be')) {
        src = src.replace('youtu.be', 'youtube.com/embed/')
    }

    return <iframe width="806" height="453" src={src} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  }
}

const Audio = (props) => {
  if (!!props.src) {
    return <audio controls src={props.src} />
  }
}

const Media = (props) => {
  // console.log('Media props: ',  props)
  const entity = props.contentState.getEntity(props.block.getEntityAt(0))
  const { src } = entity.getData()
  const type = entity.getType()

  let media

  if (type === 'image') {
    media = <Image src={src} />
  } else if (type === 'video') {
    media = <Video src={src} />
  } else if (type === 'audio') {
    media = <Audio src={src} />
  }

  return media
}
