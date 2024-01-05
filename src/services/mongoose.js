require('dotenv').config();
const mongoose = require('mongoose');


async function connectDb()  {
    await mongoose.connect(process.env.MONGO_URL)
    console.log('Db connectée!')
}
module.exports = {
    connectDb
}