const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    mongoose.connect(db, {
      // useNewUrlParser: true,
      // useCreateIndex: true,
      // useFindAndModify: false
    });
    console.log('Connected to ProfileConnector MongoDB')
  } catch(err) {
    console.error(err.message);
    //Exit process with failure
    process.exit(1);
  }
}

module.exports = connectDB;
//'mongodb+srv://charlesbz:zambrana94@profileconnector.xbblaai.mongodb.net/charles-motors'