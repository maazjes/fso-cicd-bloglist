import axios from 'axios'

let baseUrl = 'http://localhost:8080/api/login'

if (process.env.NODE_ENV === 'production') {
    baseUrl = 'https://bloglist-cicd.fly.dev/api/login'
}

const login = async (credentials) => {
    const response = await axios.post(baseUrl, credentials)
    return response.data
}

const loginService = { login }
export default loginService
