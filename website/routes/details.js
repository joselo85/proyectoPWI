const express = require('express');
const router = express.Router();
const data = require('../utils/data');


router.get('/proyectos/:name', (req, res) => {
    const name = req.params.name
    data.getProjects((error, data)=> {
        if (error) {
            return res.send({
                error
            });
        }
        const Projects = JSON.parse(data);

        const details = Projects.find((project, index) => {
        if (project.name == name) {
            return true;
            };
        });    
        return res.render('pages/details', {
            details
        });        
    })
    
});

module.exports = router;