const express = require('express');
const router  = express.Router();

router.get('/', (requestAnimationFrame, res) => {
    res.render('index', {
        msg : 'Learning Ng for MCG Health'
    })
})

module.exports = router;