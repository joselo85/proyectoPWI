const express = require('express');
const router = express.Router();
const Projects = require('../utils/projects');

router.get('/', (req, res) => {
    return res.render('index', {
        Projects
    });
});

module.exports = router;