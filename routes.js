const express = require('express');
const router = express.Router();
const asyncHandler = require('express-asynchandler')
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);



router.get('/', asyncHandler( async (req, res) => {
   res.render('index', {title: 'Home'})
}))

if (process.env.NODE_ENV !== "production") {
   router.get("/error-test", () => {
     throw new Error("This is a test error.");
   });
 }


router.get('/alskdjf', (req, res) => {

})
module.exports = router;



















// router.get('/', asyncHandler( async (req, res, next) => {
//    try{const park = await Park.findByPk(1)

//    res.render('index', {title: 'Home'})
//    } catch(err) {
//       next(err)
//    }
// }))
