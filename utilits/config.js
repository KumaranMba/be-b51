require('dotenv').config();

console.log(process.env.MONGODB_URI);
console.log(process.env.PORT);

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;

module.exports = {
    MONGODB_URI,
    PORT
}

