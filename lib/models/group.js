import mongoose from 'mongoose';

const groupSchema = new mongoose.Schema({
  groupName: {
    type: String,
    required: true,
  },
  userId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

const Group = mongoose.models.Group || mongoose.model('Group', groupSchema);

export default Group;
