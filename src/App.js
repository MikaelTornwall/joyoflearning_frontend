import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm'
import ImageForm from './components/ImageForm'
import RenderImage from './components/RenderImage'
import imageService from './services/images.js'

class App extends Component {

  state = {
    images: []
  }

  componentDidMount = async () => {
    const images = await imageService.getAll()
    this.setState({ images: images })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <ImageForm />
          <hr />
          <UserForm />
          <RenderImage
            images={this.state.images}
          />
        </div>
      </div>
    )
  }
}

export default App
