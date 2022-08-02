require('dotenv').config();
// const mongoose = require('mongoose');

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true, useUnifiedTopology:true}); 
//         console.log('MongoDB connection established successfully');
//     } catch (error) {
//         console.error('MongoDB connection failed');
//         console.log(error)
//         process.exit(1);
//     }
// }

// module.exports = connectDB;

const { connect } = require("mongoose");

const connectDB = async () => {
  try {
    await connect(
        "mongodb+srv://sutharm8000:suthar123@shop-cart.wq2m2.mongodb.net/reactshop?retryWrites=true&w=majority"
    );
    console.log("Mongodb connected");
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;
