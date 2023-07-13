const mongoose = require("mongoose");


const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://userabc:userabc@cluster0.3thzbz1.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: `);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;




