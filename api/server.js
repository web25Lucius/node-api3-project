const express = require('express');
const router = express.Router();
router.use(express.json())
// remember express by default cannot parse JSON in request bodies

// global middlewares and the user's router need to be connected here

router.get('/', (req, res, next) => {
  res.json({ Message: "Welcome"});
});

module.exports = router;
