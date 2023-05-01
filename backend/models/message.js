const { Schema, default: mongoose } = require("mongoose");

const groupSchema = new Schema({
  From: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  to: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  toGroup: {
    type: Schema.Types.ObjectId,
    ref: "Group",
    required: true,
  },

  file: {
    type: Object,
  },
  time: {
    type: Date,
  },
  messageType: {
    type: Number,
  },
  messageText: {
    type: String,
  },

  metaData: {
    type: Object,
  },
});

const Group = mongoose.model("Group", groupSchema);
module.exports = Group;
