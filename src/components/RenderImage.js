import React from 'react'
import { connect } from 'react-redux'

const RenderImage = (props) => {
    return (
      <div>
        {console.log(props.images)}
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

const ConnectedRenderImage = connect(mapStateToProps, null)(RenderImage)

export default ConnectedRenderImage
