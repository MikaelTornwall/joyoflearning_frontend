import React from 'react'

class RenderImage extends React.Component {
  render() {

    return (
      <div>
        {console.log(this.props.images)}
        <p>Images</p>
        {this.props.images.map(data => (
          <img key={data.id} src={data.image.path} width="400" height="auto" alt="From the database" />
        ))}
      </div>
    )
  }
}

export default RenderImage
