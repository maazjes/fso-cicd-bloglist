import axios from 'axios'

let baseUrl = 'http://localhost:8080/api/blogs'

if (process.env.NODE_ENV === 'production') {
    baseUrl = 'https://bloglist-cicd.fly.dev/api/blogs'
}

let token = null

const setToken = (newToken) => {
    token = `bearer ${newToken}`
}

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const create = async (newObject) => {
    const config = {
        headers: { Authorization: token }
    }
    const response = await axios.post(baseUrl, newObject, config)
    return response.data
}

const update = async (id, newObject) => {
    const config = {
        headers: { Authorization: token }
    }
    const response = await axios.put(`${baseUrl}/${id}`, newObject, config)
    return response.data
}

const remove = async (id) => {
    const config = {
        headers: { Authorization: token }
    }
    const response = await axios.delete(`${baseUrl}/${id}`, config)
    return response.data
}

const blogsService = { getAll, setToken, create, update, remove }
export default blogsService
