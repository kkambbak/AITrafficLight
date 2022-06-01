const express = require('express');
const Intersections = require('../schemas/intersections');
const router = express.Router();


router.get('/intersections/:CRSRD_ID',function(req,res){
  try {
    res.render('mainpage', { intersections });
  } catch (err) {
    console.error(err);
    next(err);
  }
})



module.exports = router;