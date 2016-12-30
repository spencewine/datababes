var express = require('express')
var router = express.Router()
module.exports = router

// var api = require('./api');
//
//
// router.use('/api', api)




router.use('/baby', require('./baby'));
router.use('/parent', require('./parent'));


// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
  res.status(404).end();
});
