const { Schema, model } = require('mongoose');

// Schema for thoughts (posts)
const thoughtSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
      maxlength: 280,
    },
    user: { 
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Reaction', 
     },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// Initialize the Thought model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
