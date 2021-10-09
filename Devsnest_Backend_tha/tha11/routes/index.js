var express = require('express');
var router = express.Router();
var registerInitialCheck=require('../middlewares/registerChecks');
var register =require("../controllers/register");
/* GET home page. */
router.get('/', function(req, res, next) {
  const sess=req.session;
  sess.username='umang'; 
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {

  console.log('Redis value',req.session.username);
  res.render('index', { title: 'Express' });
});

//@email @lastname@ firstname @ password @confrim===body
//desc
//email valkidate
//password validate
//js injection(tha)

//check thr email---lvl 3
//password hash
//email in lowercase
//save
router.post('/register',registerInitialCheck,register);
module.exports = router;
