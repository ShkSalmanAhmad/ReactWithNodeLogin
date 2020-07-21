var express = require('express');
var router = express.Router();
var pool = require('../database');
// import pool from '../database';
var users = [
  { email: 'abc@gmail.com', password: 'password' }
]

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send("Welcome to backend server");
  // res.render('index', { title: 'Express' });
});
router.post('/login', function (req, res) {

  email = req.body.email;
  password = req.body.password;

  pool.query(`select * from accounts where email=? and password=?`, [email, password], (err, result, fields) => {
    if (err) {
      // return console.log(err);
      res.status(200).send({
        message: 'User not found'
      })
    } else {
      res.status(200).send({
        message: 'logged in'
      })
    }
    // return console.log(result);
  });
  // let result = users.find(user => user.email == req.body.email);
  // if (result) {
  //   if (result.password == req.body.password) {
  // res.status(200).send({
  //   message: 'logged in'
  // })
  //   } else {
  //     res.status(200).send({
  //       message: 'Not logged in'
  //     })
  //   }
  // } else {
  //   res.status(200).send({
  //     message: 'User not found'
  //   })
  // }
});
module.exports = router;
