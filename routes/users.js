var express = require('express');
var router = express.Router();

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

*/

router.get('/logIn', function(req, res) {    // display register route
  res.render('logIn', {                    // display register form view
      title: 'Register User Log In'     // input data to view
  });
});
router.post('/logIn', function(req, res) {   // new user post route
  userHandler.upsertUser(req);
  return res.redirect('/');                   // skip the receipt, return to fp
});

module.exports = router;