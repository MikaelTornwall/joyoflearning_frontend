import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/images'

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const getOne = async (id) => {  
  const res = await axios.get(`${baseUrl}/${id}`)
  return res.data
}

const create = async (imageObject) => {
    const res = await axios.post(baseUrl, imageObject, {
    onUploadProgress: progressEvent => {
      console.log('Upload progress: ' + (100 * progressEvent.loaded / progressEvent.total) + "%")
    }
  })
  console.log(res)
  return res.data
}

export default { getAll, getOne, create }
