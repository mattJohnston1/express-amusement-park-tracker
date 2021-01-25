const express = require('express');
const router = express.Router();

const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

router.get('/', asyncHandler( async (req, res) => {
   res.render('index', {title: 'Home'})
}))

if (process.env.NODE_ENV !== "production") {
   router.get("/error-test", () => {
     throw new Error("This is a test error.");
   });
 }
module.exports = router;
