const express = require('express');
const Intersections = require('../schemas/intersections');
const Cars = require('../schemas/cars');
const router = express.Router();

router.get('/', async (req, res, next) => {
    res.render('mainpage', { title: 'main' });
});

router.route('/intersections')
  .get(async (req, res, next) => {
    try {
      
      const intersections = await Intersections.find({});
      res.render('inters', { intersections });
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

router.route('/intersections/:CRSRD_ID')
.get(async (req, res, next) => {
  try {
    cid = req.params.CRSRD_ID;
    const nums = await Cars.find({});
    const intersection = await Intersections.find({CRSRD_ID: cid});
    res.render('video', { name: intersection[0].CRSRD_NM, id:intersection[0].CRSRD_ID, dir1:intersection[0].dir1, dir2:intersection[0].dir2, nums });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;