const { Thought, Reaction } = require('../models');

module.exports = {
  async getReactions(req, res) {
    try {
      const reactions = await Reaction.find();
      res.json(reactions);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Get a single reaction
  async getSingleReaction(req, res) {
    try {
      const reaction = await Reaction.findOne({ _id: req.params.reactionId });

      if (!reaction) {
        return res.status(404).json({ message: 'No reaction found with that id' });
      }

      res.json(reaction);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Create a reaction
  async createReaction(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.body.thoughtId });

      if (thought) {
        const reaction = await Reaction.create(req.body);
        thought.reactions.push(reaction._id);
        await thought.save();
        res.json({ message: 'Reaction created' });
      } else {
        res.status(404).json({ message: 'Thought not found with this ID' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
};
