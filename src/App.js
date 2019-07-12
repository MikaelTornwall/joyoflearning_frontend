import React, { useState, useEffect } from 'react';
import lecture from './lecture.png';
import Nav from './components/Nav'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import RenderImage from './components/RenderImage'
import ImageForm from './components/ImageForm'
import imageService from './services/images.js'
import loginService from './services/login.js'
import { Container, Image, Header } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

const App = () => {

  const [loggedIn, setLoggedIn] = useState(false)
  const [images, setImages] = useState([])
  const [page, setPage] = useState('home')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    const getImages = async () => {
      const images = await imageService.getAll()
      setImages(images)
    }
    getImages()
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    console.log("Logging in with username ",  username, " and password ", password)

    try {
      const user = await loginService.login({
        username, password
      })

      setUser(user)
      setUsername('')
      setPassword('')
    } catch(error) {
      console.log(error)
      setErrorMessage('Incorrect username or password')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

    const ImageExampleFluid = () => <Image src={lecture} fluid />

    const Home = () => (
      <Container>
        <Header as='h1'>Welcome to Joy of Learning</Header>
        <RenderImage
          images={images}
        />
      </Container>
    )

    const Dump = () => (
      <Container>
        {user !== null && <ImageForm />}
        <SignUp />
        <RenderImage
          images={images}
        />
      </Container>
    )

    return (
      <Container className="App">
        <Router>
          <Nav
            user={user}
            onClick={({target}) => setPage(target.id)}
            />
          {/*<ImageExampleFluid />*/}
          <Route exact path="/" render={() => <Home />} />
          <Route path="/signup" render={() => <SignUp />} />
          <Route path="/login" render={() =>
            !user && <LogIn
              errorMessage={errorMessage}
              username={username}
              password={password}
              setUsername={({target}) => setUsername(target.value)}
              setPassword={({target}) => setPassword(target.value)}
              onSubmit={handleLogin}
             />
          } />
        </Router>
      </Container>
    )
}

export default App
