const mongoose = require('mongoose');


const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Succesfully connected to MongoDB! ${conn.connection.host}`)

    } catch (e) {
        console.error("Could not connect to mongo.." , e)
    }
}

module.exports = connectDB;