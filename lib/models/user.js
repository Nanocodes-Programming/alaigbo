import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },

  firstName: {
    type: String,

    required: true,
  },
  middleName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    unique: true,
  },
  number: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  lga: {
    type: String,
    required: true,
  },
  town: {
    type: String,
    required: true,
  },
  placeOfBirth: {
    type: String,
    required: true,
  },
  village: {
    type: String,
    required: true,
  },
  familyName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  interests: {
    type: String,
    required: true,
  },

  bio: {
    type: String,
  },
  imgUrl: {
    type: String,
    required: true,
  },

  isOnboarded: {
    type: Boolean,
    default: false,
  },

  group: {
    type: String,
    required: true,
  },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
