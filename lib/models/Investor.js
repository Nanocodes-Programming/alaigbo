import mongoose from 'mongoose';

const investorSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  representativeName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
  },
  accreditation: {
    type: String,
    required: true,
  },
  investmentPreference: {
    type: String,
    required: true,
  },
  investmentExperience: {
    type: String,
  },
  isOnboarded: {
    type: Boolean,
    default: false,
  },
  industry: {
    type: String,
    required: true,
  },
});

const Investor =
  mongoose.models.Investor || mongoose.model('Investor', investorSchema);

export default Investor;
