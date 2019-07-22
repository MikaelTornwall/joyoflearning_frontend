import axios from 'axios'
import imageService from './images.js'

const baseUrl = 'http://localhost:3001/api/users'

const getAll = async () => {
    const res = await axios.get(baseUrl)
    return res.data
}

const getUser = async (id) => {
  const res = await axios.get(`${baseUrl}/${id}`)

  if (res.data.logo) {
    const logo = await imageService.getOne(res.data.logo)
    res.data.logo = logo
  }

  const courses = await getUsersCourses(id)

  res.data.courses = courses  
  return res.data
}

const getUsersCourses = async (id) => {
  const res = await axios.get(`${baseUrl}/${id}/courses`)
  return res.data
}

const create = async (userObject) => {
    const res = await axios.post(baseUrl, userObject)
    return res.data
}

export default { getAll, getUser, create }
