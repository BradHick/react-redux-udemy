const _ = require('lodash');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('./user');
const env = require('../../.env');

/**
|--------------------------------------------------
| Validate Email
|--------------------------------------------------
*/
const emailRegex = /\S+@\S+\.\S+/;

/**
|--------------------------------------------------
| validate password
|--------------------------------------------------
*/
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/;

const sendErrorsFromDB = (res, dbErrors) => {
  const errors = [];
  _.forIn(dbErrors.errors, error => errors.push(error.message));
  return res.status(400).json({errors});
};