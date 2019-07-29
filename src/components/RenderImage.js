import React from 'react'
import { connect } from 'react-redux'

const RenderImage = (props) => {
    return (
      <div>
        <p>Images</p>
        {props.images.map(data => (
          <img key={data.id} src={data.image.path} width="400" height="auto" alt="From the database" />
        ))}
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    images: state.images
  }
}

const ConnectedRenderImage = connect(mapStateToProps)(RenderImage)

export default ConnectedRenderImage
