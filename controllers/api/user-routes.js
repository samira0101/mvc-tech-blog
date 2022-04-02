// Dependencies
// Express.js connection
const router = require('express').Router();
// User, Post, Vote models
const { User, Post, Comment } = require('../../models');
// Express Session for the session data
const session = require('express-session');
// Authorization Helper
const withAuth = require('../../utils/auth');
// Sequelize store to save the session so the user can remain logged in
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Routes

// GET /api/users -- get all users
router.get('/', (req, res) => {
    // Access the User model and run .findAll() method to get all users
    User.findAll({
        // When sending the data back, omit off the password property.
        attributes: { exclude: ['password'] }
    })
      // return the data as JSON formatted
      .then(dbUserData => res.json(dbUserData))
      // if server error, return that error
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// GET /api/users/1 -- get a single user by id
router.get('/:id', (req, res) => {
    // To acquire a single user depending on parameters, access the User model and use the findOne() function.
    User.findOne({
      // when the data is sent back, exclude the password property
      attributes: { exclude: ['password'] },
      where: {
        // use id as the parameter for the request
        id: req.params.id
      },
      // include the user's own posts, as well as the posts on which he/she has commented and uploaded.
      include: [
        {
          model: Post,
          attributes: ['id', 'title', 'post_text', 'created_at']
        },
        {
            model: Comment,
            attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            include: {
                model: Post,
                attributes: ['title']
            }
        }
      ]
    })
      .then(dbUserData => {
        if (!dbUserData) {
          // if no user is found, return an error
          res.status(404).json({ message: 'There are no users with this id found.' });
          return;
        }
        // otherwise, return the data for the requested user
        res.json(dbUserData);
      })
      .catch(err => {
        // if there is a server error, return that error
        console.log(err);
        res.status(500).json(err);
      });
  });

