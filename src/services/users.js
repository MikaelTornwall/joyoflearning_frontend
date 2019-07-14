import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/users'

const getAll = async () => {
    const res = await axios.get(baseUrl)
    return res.data
}

const getUser = async (id) => {
  const res = await axios.get(`${baseUrl}/${id}`)  
  return res.data
}

const create = async (userObject) => {
    const res = await axios.post(baseUrl, userObject)
    return res.data
}

export default { getAll, getUser, create }
