// User Model

// Dependencies
// use Model and Datatype from sequelize
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// use bcrypt for password hashing
const bcrypt = require('bcrypt');

// create the User model
class User extends Model {
    // Create a method that runs on a user instance and checks the password.
    // in the login route against the hashed database password
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

// define the table columns and configuration
User.init(
  {
    // TABLE COLUMN DEFINITIONS
    // define an id column
    id: {
        // To specify what sort of data it is, utilise the Sequelize DataTypes object.
        type: DataTypes.INTEGER,
        // This is Sequelize's version of the SQL 'NOT NULL' option.
        allowNull: false,
        // define this comlumn as the the Primary Key
        primaryKey: true,
        // turn on auto increment
        autoIncrement: true
        },
        // define a username column
        username: {
        // define the data type
        type: DataTypes.STRING,
        // require the data to be entered
        allowNull: false,
        validate: {
          notEmpty: true,
        }
        },
        // define an email column
        email: {
        // define the data type
        type: DataTypes.STRING,
        // require data to be entered
        allowNull: false,
        // In this table, no duplicate email values are allowed.
        unique: true,
        // if allowNull is set to false, the data can be validated before creating the table data
        validate: {
            // this will check the format of the entry as a valid email by pattern checking <"">@<"">.<"">
            isEmail: true
            }
        },
        // define a password column
        password: {
        // define the data type
        type: DataTypes.STRING,
        // require the data to be entered
        allowNull: false,
        validate: {
            // password must be at least four characters long
            len: [4]
            }
        }
  },
