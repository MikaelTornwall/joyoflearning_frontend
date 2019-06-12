import React from 'react'
import imageService from '../services/images.js'

class ImageForm extends React.Component {

  state = {
    file: null
  }

  fileHandler = (event) => {
    console.log(event.target.files[0])
    this.setState({ file: event.target.files[0] })
    console.log(event.target.files[0])
  }

  fileUploadHandler = async () => {
    const formData = new FormData()
    await formData.append('image', this.state.file)
    imageService.create(formData)
  }

    render() {
    return (
        <div>
          <input
            style={{display: 'none'}}
            type="file"
            encType="multipart/form-data"
            name="image"
            onChange={this.fileHandler}
            ref={fileInput => this.fileInput = fileInput}
          />
          <button onClick={() => this.fileInput.click()}>Select file</button>
          <button onClick={this.fileUploadHandler}>Upload</button>
        </div>
      )
    }
}

export default ImageForm
