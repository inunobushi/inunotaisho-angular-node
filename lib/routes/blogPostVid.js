const express = require('express'),
    cloudinary = require('cloudinary'),
    router = express.Router();
let Blog = require('../../models').Blog,
    User = require('../../models').User;

router.post('/video', (req, res) => {
    console.log('jhiuftudjm', req.body)
    cloudinary.uploader.upload(vidUrl, options, 
    function(result) {
        console.log(result)
    });
});

module.exports = router;