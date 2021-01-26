const express = require('express');
const router = express.Router();
const db = require('./db/models')
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);



router.get('/', asyncHandler( async (req, res) => {
   res.render('index', {title: 'Home'})
}))

router.get('/parks', async(req, res, next) => {
  try {
    const parks = await db.Park.findAll({order: [['parkName', 'ASC']]})
  
    res.render('park-list', {
      parks,
      title: "Parks"
    })
    
  } catch (err) {
    next(err)
  }
})




if (process.env.NODE_ENV !== "production") {
   router.get("/error-test", () => {
     throw new Error("This is a test error.");
   });
 }


module.exports = router;



















// router.get('/', asyncHandler( async (req, res, next) => {
//    try{const park = await Park.findByPk(1)

//    res.render('index', {title: 'Home'})
//    } catch(err) {
//       next(err)
//    }
// }))
