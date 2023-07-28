const { Schema, model } = require('mongoose');

// Schema for reactions
const reactionSchema = new Schema({
  reactionBody: String,
  username: String,
  thought: {
    type: Schema.Types.ObjectId,
    ref: 'Thought', 
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

// Initialize the Reaction model
const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction;
