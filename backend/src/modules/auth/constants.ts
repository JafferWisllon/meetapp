require('dotenv').config();

export default {
  secret: process.env.secret,
  expiresIn: '60d'
};