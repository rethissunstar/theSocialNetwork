const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/socialNetwork';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const db = mongoose.connection;

mongoose.connect(uri, options)
  .then(() => {
    console.log('Connected to MongoDB successfully!');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

module.exports = { db, uri, options };
