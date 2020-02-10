const express = require('express');

const lumberV2Data = require('../data/lumber-v2-data.js')

const router = express.Router();

function matchingLumber(lumberV2Data, reqWidth, reqHeight, reqLength) {
    return lumberV2Data
    .filter(lumber => {
        const { width, height, length } = lumber.product_details.specification.backend_dimensions
        return reqWidth < width && reqHeight < height && reqLength < length
      })
    .map((lumber) => {
        delete lumber.product_details.specification.backend_dimensions;
        return lumber;
    });
}

router.get('/', (req, res, next) => {
    const reqWidth = req.query['width'] || 0
    const reqHeight = req.query['height'] || 0
    const reqLength = req.query['length'] || 0
    
    return res.send(matchingLumber(lumberV2Data, reqWidth, reqHeight, reqLength));
});

module.exports = router;