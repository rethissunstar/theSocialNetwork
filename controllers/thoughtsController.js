const { Thought, Reaction } = require('../models');

module.exports = {
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Get a single thought
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: 'No thought found with that id' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Create a thought (comment)
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.json({ message: 'Thought created', thought });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },

  // Delete a thought and associated reactions
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      // Delete reactions associated with the thought
      await Reaction.deleteMany({ thought: req.params.thoughtId });

      res.json({ message: 'Thought and associated reactions deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
