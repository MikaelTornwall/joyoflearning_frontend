import React, { Component } from 'react';
import lecture from './lecture.png';
import Nav from './components/Nav'
import SignUp from './components/SignUp'
import RenderImage from './components/RenderImage'
import imageService from './services/images.js'
import { Container, Image } from 'semantic-ui-react'

class App extends Component {

  state = {
    images: []
  }

  componentDidMount = async () => {
    const images = await imageService.getAll()
    this.setState({ images: images })
  }

  render() {
    const ImageExampleFluid = () => <Image src={lecture} fluid />

    return (
      <Container className="App">
      <Nav />
          {ImageExampleFluid()}
          <h2>Welcome to Joy of Learning</h2>
        <Container>
          <SignUp />
          <RenderImage
            images={this.state.images}
          />
        </Container>
      </Container>
    )
  }
}

export default App
