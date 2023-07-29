const router = require('express').Router();
const {
  getreactions,
  getSinglereaction,
  createreaction,
} = require('../../controllers/reactionController');

// /api/reactions
router.route('/').get(getreactions).post(createreaction);

// /api/reactions/:reactionId
router.route('/:reactionId').get(getSinglereaction);

module.exports = router;
