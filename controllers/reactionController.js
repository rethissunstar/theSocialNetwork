const { Post, Reaction } = require('../models');

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
      const post = await Post.findOne({ _id: req.body.postId });
      
      if (!post) {
        return res
          .status(404)
          .json({ message: 'Post not found with this ID' });
      }

      const reaction = await Reaction.create(req.body);
      post.reactions.push(reaction._id);
      await post.save();

      res.json({ message: 'Reaction created' });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
};
