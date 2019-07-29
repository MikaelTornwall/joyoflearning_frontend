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
import userReducer, { assignUser, logout } from './reducers/userReducer'
import imageReducer, { initImages } from './reducers/imageReducer'

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
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [courses, setCourses] = useState([])

  useEffect(() => {
    props.initImages()
  }, [])

  useEffect(() => {
    const profileData = async () => {
      const loggedUserJSON = window.localStorage.getItem('loggedUser')
      if (loggedUserJSON) {
        const user = JSON.parse(loggedUserJSON)
        props.assignUser(user)
        courseService.setToken(user.token)
        await getProfile(user.id)
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

      courseService.setToken(user.token)
      props.assignUser(user)
      await getProfile(user.id)
      setUsername('')
      setPassword('')
    } catch(error) {
      setErrorMessage('Incorrect username or password')
      setTimeout(() => {
        setErrorMessage(null)
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

  // Profile services
  const getProfile = async (id) => {
    const profile = await userService.getUser(id)
    setProfile(profile)
    setCourses(profile.courses)
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
    let courseArray = courses
    courseArray = courseArray.filter(course => course.id != id)
    setCourses(courseArray)

    await courseService.remove(id)
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
          props.user
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
          props.user
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
          props.user
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
  logout
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default ConnectedApp
