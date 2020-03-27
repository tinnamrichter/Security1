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
router.post('/logIn', async function(req, res) {// new user post route
  let rc = await userHandler.verifyUser(req); // verify credentials
  if (rc) {
      res.render('index', {                   // find the view 'index'
          title: 'Register Home',         // input data to 'index'
          loggedin: true,
          who: req.session.user               // using session var(s)
      });
  } else {
      res.render('login', {                   // find the view 'login'
          title: 'Register User Login',   // input data to 'login'
          loggedin: false
      });
  }
});

module.exports = router;