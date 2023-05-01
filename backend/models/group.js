const { Schema, default: mongoose } = require("mongoose");

const groupSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
  credentials: {
    type: Object,
  },
  email: {
    type: String,
  },
});

const Group = mongoose.model("Group",  groupSchema);
module.exports = Group;
