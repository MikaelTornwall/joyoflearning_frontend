import React, { useState, useEffect, useLayoutEffect } from 'react';
import lecture from './lecture.png';
import { createBrowserHistory } from 'history'

// Components
import Nav from './components/Nav'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import Profile from './components/Profile'
import Course from './components/Course'
import CreateCourse from './components/CreateCourse'
import RenderImage from './components/RenderImage'
import ImageForm from './components/ImageForm'

// Services
import userService from './services/users.js'
import imageService from './services/images.js'
import loginService from './services/login.js'
import courseService from './services/courses.js'

// Styles
import { Container, Image, Header } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

const history = createBrowserHistory()

const App = () => {

  const [loggedIn, setLoggedIn] = useState(false)
  const [images, setImages] = useState([])
  const [page, setPage] = useState('home')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [organization, setOrganization] = useState('')
  const [logo, setLogo] = useState(null)
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    const getImages = async () => {
      const images = await imageService.getAll()
      setImages(images)
    }
    getImages()
  }, [])

  useEffect(() => {
    const profileData = async () => {
      const loggedUserJSON = window.localStorage.getItem('loggedUser')
      if (loggedUserJSON) {
        const user = JSON.parse(loggedUserJSON)
        setUser(user)
        loginService.setToken(user.token)
        await getProfile(user.id)
        console.log("!!!!!")
      }
    }
    profileData()
  }, [])

  // Login/logout functions
  const handleLogin = async (event) => {
    event.preventDefault()
    console.log("Logging in with username ",  username, " and password ", password)

    try {
      const user = await loginService.login({
        username, password
      })

      window.localStorage.setItem('loggedUser', JSON.stringify(user))

      loginService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch(error) {
      setErrorMessage('Incorrect username or password')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const handleLogout = () => {
    setUser(null)
    window.localStorage.removeItem('loggedUser')
  }

  // Signup functions
  const submit = async (event) => {
    event.preventDefault()

    const formData = new FormData()
    await formData.append('firstname', firstname)
    await formData.append('lastname', lastname)
    await formData.append('email', email)
    await formData.append('username', username)
    await formData.append('password', password)
    await formData.append('organization', organization)
    await formData.append('logo', logo)
    await userService.create(formData)

    setFirstname('')
    setLastname('')
    setEmail('')
    setUsername('')
    setPassword('')
    setOrganization('')
    setLogo(null)
  }

  // Profile services
  const getProfile = async (id) => {
    const profile = await userService.getUser(id)
    setProfile(profile)
  }

  // Course services
  const sendCourseToServer = async (data) => {
    console.log('Data: ', data)

    const course = {
      title: 'Kurssi1',
      content: data
    }

    console.log(course)

    await courseService.create(course, user.token)
  }


  const Home = () => (
    <Container>
      <Image src={lecture} fluid />
      <Header as='h1'>Welcome to Joy of Learning</Header>
      <RenderImage
        images={images}
      />
    </Container>
  )

  return (
    <Container className="App">
      <Router history={history}>
        <Nav
          user={user}
          onClick={({target}) => setPage(target.id)}
          handleLogout={handleLogout}
        />
        <Route exact path="/" render={() => <Home />} />
        <Route path="/signup" render={() =>
          user
          ? <Redirect to="/" />
          : <SignUp
            submit={submit}
            firstname={[firstname, ({target}) => setFirstname(target.value)]}
            lastname={[lastname, ({target}) => setLastname(target.value)]}
            email={[email, ({target}) => setEmail(target.value)]}
            username={[username, ({target}) => setUsername(target.value)]}
            password={[password, ({target}) => setPassword(target.value)]}
            organization={[organization, ({target}) => setOrganization(target.value)]}
            logo={[logo, ({target}) => setLogo(target.files[0])]}
          />
        } />
        <Route path="/login" render={() =>
          user
          ? <Redirect to="/" />
          : <LogIn
            errorMessage={errorMessage}
            username={username}
            password={password}
            setUsername={({target}) => setUsername(target.value)}
            setPassword={({target}) => setPassword(target.value)}
            onSubmit={handleLogin}
           />
        } />
        <Route path="/profile" render={() =>
          <Profile
            profile={profile}
            logo={logo}
          />
        } />
        <Route path="/mycourses" render={() =>
          <Course />
        }
        />
        <Route path="/createcourse" render={() =>
          <CreateCourse
            onSubmit={sendCourseToServer}
          />
        } />
      </Router>
    </Container>
  )
}

export default App
