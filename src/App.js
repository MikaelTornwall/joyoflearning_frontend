import React, { Component } from 'react';
import lecture from './lecture.png';
import Nav from './components/Nav'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import RenderImage from './components/RenderImage'
import ImageForm from './components/ImageForm'
import imageService from './services/images.js'
import { Container, Image } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

class App extends Component {

  state = {
    loggedIn: false,
    images: [],
    page: "home"
  }

  componentDidMount = async () => {
    const images = await imageService.getAll()
    this.setState({ images: images })
  }

  navigate = (event) => {
    console.log("HIT")
    this.setState({ page: event.target.id })
  }

  render() {
    const ImageExampleFluid = () => <Image src={lecture} fluid />

    const Dump = () => (
      <Container>
        <ImageForm />
        <SignUp />
        <RenderImage
          images={this.state.images}
        />
      </Container>
    )

    return (
      <Container className="App">
        <Router>
          <Nav onClick={this.navigate} />
          {ImageExampleFluid()}
          <h2>Welcome to Joy of Learning</h2>
          <Route exact path="/" render={() => <Dump />} />
          <Route path="/signup" render={() => <SignUp />} />
          <Route path="/login" render={() => <LogIn />} />
        </Router>
      </Container>
    )
  }
}

export default App
