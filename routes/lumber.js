var express = require('express');
const lumberData = require('../data/lumberData.js')

var router = express.Router();

/* GET lumber listings. */
router.get('/:width/:length/:height', function(req, res, next) {
  const reqWidth = req.params['width'] || 0
  const reqHeight = req.params['height'] || 0
  const reqLength = req.params['length'] || 0

  res.send(lumberData.filter(lumber => {
      const { width, height, length } = lumber
      return reqWidth < width && reqHeight < height && reqLength < length
    }))
})


module.exports = router;