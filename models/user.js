const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name:{
    type: String,
  },
  profileImage:{
    type: String,
  },
  status:{
    type: String,
    enum : ['Accepted', 'Not Accepted'],
    default: "Not Accepted",
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;