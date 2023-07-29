const mongoose = require('mongoose');
const db = require('../config/connection');
const User = require('../models/User');
const Thought = require('../models/Thoughts');
const Reaction = require('../models/Reactions');

const seedData = async () => {
  try {
    await mongoose.connect(db.uri, db.options);

    // Seed users
    const users = [
      {
        first: 'Bruce',
        last: 'Wayne',
        username: 'Batman',
        age: 40,
      },
      {
        first: 'Tim',
        last: 'Drake',
        username: 'Robin',
        age: 18,
      },
      {
        first: 'Dick',
        last: 'Grayson',
        username: 'Nightwing',
        age: 28,
      },
    ];

    const createdUsers = await User.insertMany(users);

    // Seed thoughts
    const thoughts = [
      {
        text: 'I am the night!',
        user: createdUsers[0]._id,
      },
      {
        text: 'Holy smokes, Batman!',
        user: createdUsers[1]._id,
      },
      {
        text: 'Time to patrol Gotham.',
        user: createdUsers[2]._id,
      },
    ];

    const createdThoughts = await Thought.insertMany(thoughts);

    // Seed reactions
    const reactions = [
      {
        reactionBody: 'I agree!',
        user: createdUsers[0]._id,
        thought: createdThoughts[1]._id,
      },
      {
        reactionBody: 'Wow, that\'s impressive!',
        user: createdUsers[1]._id,
        thought: createdThoughts[0]._id,
      },
      // Add more reactions here
    ];

    await Reaction.insertMany(reactions);

    mongoose.connection.close();

    console.log('Database seeded successfully!');
  } catch (err) {
    console.error('Error seeding database:', err.message);
  }
};

seedData();
