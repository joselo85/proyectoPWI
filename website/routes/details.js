const express = require('express');
const router = express.Router();
const Projects = require('../utils/projects');


router.get('/proyectos/:name', (req, res) => {
    const name = req.params.name
    
    const details = Projects.find((project, index) => {
        if (project.name == name) {
            return true;
        };
    });
    
    return res.render('pages/details', {
        details
    });
});

module.exports = router;