const express = require('express');
const router = express.Router();

const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);



router.get('/', asyncHandler( async (req, res) => {
   res.render('index', {title: 'Home'})
}))


module.exports = router;
