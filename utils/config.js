require('dotenv').config()

const PORT = 8080
const { MONGODB_URI } = process.env

module.exports = {
    MONGODB_URI,
    PORT
}
