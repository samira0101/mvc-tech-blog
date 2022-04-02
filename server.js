// Server for MVC Tech Blog

// Dependencies
// path module
const path = require('path');
// dotenv file for sensitive configuration information
require('dotenv').config();
// Express.js server
const express = require('express');
// In the controllers folder, all routes are defined.
const routes = require('./controllers/');
// Sequelize connection to the database
const sequelize = require('./config/connection');
// Handlebars template engine for front-end
const exphbs = require('express-handlebars')
// Express session to handle session cookies
const session = require('express-session')
// To keep the user logged in, utilise the Sequelize store to save the session.
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// Handlebars helpers
const helpers = require('./utils/helpers');

// Initialize handlebars for the html templates
const hbs = exphbs.create({ helpers });

// Initialize sessions
const sess = {
    secret: 'Super secret secret',
    cookie: { maxAge: 7200000 },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

