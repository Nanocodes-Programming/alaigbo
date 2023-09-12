import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  accommodation: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
  },
  update: {
    type: String,
    required: true,
  },
  participants: {
    type: String,
    required: true,
  },
  prefix: {
    type: String,
    required: true,
  },
  guest: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  registered: {
    type: Boolean,
    default: false,
  },
});

const Book = mongoose.models.Book || mongoose.model('Book', bookingSchema);

export default Book;
