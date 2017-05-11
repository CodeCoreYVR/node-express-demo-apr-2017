const express = require('express');
const router = express.Router();

// req is shorthand for request
// res is shorthand for response
router.get('/', (req, res) => {
  res.render('index');
});

// when this file will be required, it will return the
// object assigned to module.exports
// (i.e. the router object)
module.exports = router;
