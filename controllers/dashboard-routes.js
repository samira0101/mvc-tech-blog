// Dependencies
// the router and the database
const router = require('express').Router();
const sequelize = require('../config/connection');
// the models
const { Post, User, Comment } = require('../models');
// Unauthenticated users are redirected to the login page via the authorisation middleware.
const withAuth = require('../utils/auth')

// Only for signed in users, a route to render the dashboard page.
router.get('/', withAuth, (req, res) => {
    // All of the users posts are obtained from the database
    Post.findAll({
      where: {
        // use the ID from the session
        user_id: req.session.user_id
      },
      attributes: [
        'id',
        'post_text',
        'title',
        'created_at',
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => {
        // serialize data before passing to template
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

