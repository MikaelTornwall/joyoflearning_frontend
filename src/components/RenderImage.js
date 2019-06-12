import React from 'react'

class RenderImage extends React.Component {
  render() {

    return (
      <div>
        {console.log(this.props.images)}
        <p>Images</p>
        {this.props.images.map(data => (
          <img src={data.image.path} width="400" height="auto" />
        ))}
      </div>
    )
  }
}

export default RenderImage
