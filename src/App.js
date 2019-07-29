import React, { useState, useEffect, useLayoutEffect } from 'react';
import lecture from './lecture.png';
import { createBrowserHistory } from 'history'

// Components
import Nav from './components/Nav'
import SignUpSelect from './components/SignUpSelect'
import UserSignUp from './components/UserSignUp'
import LogIn from './components/LogIn'
import Profile from './components/Profile'
import MyCourses from './components/MyCourses'
import Course from './components/Course'
import CreateCourse from './components/CreateCourse'
import RenderImage from './components/RenderImage'
import ImageForm from './components/ImageForm'

// Redux
import { connect } from 'react-redux'

// Reducers
import userReducer, { assignUser, logout, removeCourse } from './reducers/userReducer'
import imageReducer, { initImages } from './reducers/imageReducer'
import messageReducer, { setErrorMessage } from './reducers/messageReducer'

// Services
import userService from './services/users.js'
import imageService from './services/images.js'
import loginService from './services/login.js'
import courseService from './services/courses.js'

// Styles
import { Container, Image, Header } from 'semantic-ui-react'

// Routes
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

const history = createBrowserHistory()

const App = (props) => {

  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [organization, setOrganization] = useState('')
  const [logo, setLogo] = useState(null)
  const [courses, setCourses] = useState([])

  const { user } = props

  useEffect(() => {
    props.initImages()
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    const tokenJSON = window.localStorage.getItem('token')
    const initUser = async () => {
      if (loggedUserJSON) {
        const loggedUser = JSON.parse(loggedUserJSON)
        await props.assignUser(loggedUser.id)
      }
      if (tokenJSON) courseService.setToken(JSON.parse(tokenJSON))
    }
    initUser()
  }, [])


  // Login/logout functions

  const loggaIn = async (event) => {
    console.log('HELLOO!')
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    console.log("Logging in with username ",  username, " and password ", password)

    try {
      const loggedUser = await loginService.login({
        username, password
      })
      
      console.log ('TOKEN: ', loggedUser.token)
      window.localStorage.setItem('token', JSON.stringify(loggedUser.token))
      courseService.setToken(loggedUser.token)
      props.assignUser(loggedUser.id)
      setUsername('')
      setPassword('')
    } catch(error) {
      props.setErrorMessage('Incorrect username or password')
      setTimeout(() => {
        props.setErrorMessage(null)
      }, 5000)
    }
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

  // Course services
  const sendCourseToServer = async (data) => {
    console.log('Data: ', data)

    const course = {
      title: 'Kurssi1',
      content: data
    }

    const newCourse = await courseService.create(course)
    let currentCourses = Array.from(courses)
    currentCourses = currentCourses.concat(newCourse)
    setCourses(currentCourses)
  }

  const findCourse = async (id) => await courseService.getCourse(id)

  const removeCourse = async (id) => {
    //let courseArray = user.courses
    //courseArray = Array.from(courseArray.filter(course => course.id != id))
    // setCourses(user, courseArray)
    console.log('id: ', id)
    console.log('userId: ', user.id)
    props.removeCourse(id, user.id)
    //await courseService.remove(id)
  }

  const Home = () => (
    <Container>
      <Image src={lecture} fluid />
      <Header as='h1'>Welcome to Joy of Learning</Header>
      <RenderImage />
    </Container>
  )

  return (
    <Container className="App">
      <Router history={history}>
        <Nav />
        <Route exact path="/" render={() => <Home />} />

        <Route exact path="/signup" render={() =>
          user
          ? <Redirect to="/" />
          : <SignUpSelect
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

        <Route exact path="/signup/user" render={() =>
          user
          ? <Redirect to="/" />
          : <UserSignUp
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
            username={username}
            password={password}
            setUsername={({target}) => setUsername(target.value)}
            setPassword={({target}) => setPassword(target.value)}
            onSubmit={handleLogin}
           />
        } />

        <Route path="/profile" render={() =>
          <Profile />
        } />

        <Route exact path="/mycourses/:id" render={({ match }) =>
          <Course
            id={match.params.id}
            editing={false}
          />
        } />

        <Route exact path="/mycourses/:id/edit" render={({ match }) =>
          <Course
            id={match.params.id}
            editing={true}
          />
        } />

        <Route exact path="/mycourses" render={() =>
          <MyCourses
            courses={courses}
            remove={removeCourse}
          />
        } />

        <Route path="/createcourse" render={() =>
          <CreateCourse
            onSubmit={sendCourseToServer}
            course={null}
          />
        } />

      </Router>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  initImages,
  assignUser,
  logout,
  removeCourse,
  setErrorMessage
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default ConnectedApp
