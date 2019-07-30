import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/students'

const getAll = async () => {
    const res = await axios.get(baseUrl)
    return res.data
}

const getOne = async (id) => {
  const res = await axios.get(`${baseUrl}/${id}`)
  return res.data
}

const create = async (studentObject) => {
    const res = await axios.post(baseUrl, studentObject)
    return res.data
}

export default { getAll, getOne, create }
