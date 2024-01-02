const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb://localhost:27017/foodwaste`, {
      useNewUrlParser: true,
    });
    console.log("Connect to Mongodb Database Successfully");
  } catch (err) {
    console.error(`Error connecting to database ${err}`);
  }
};

module.exports=connectDB