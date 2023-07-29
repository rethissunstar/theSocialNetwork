const router = require('express').Router();
const appRoutes = require('./appRoutes');
const userRoutes = require('./userRoutes');
const reactionRoutes = require('./reactionRoutes'); // Add this line
const thoughtRoutes = require('./thoughtRoutes'); // Add this line

router.use('/apps', appRoutes);
router.use('/users', userRoutes);
router.use('/reactions', reactionRoutes); // Add this line
router.use('/thoughts', thoughtRoutes); // Add this line

module.exports = router;
