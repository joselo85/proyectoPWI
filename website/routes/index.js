const express = require('express');
const router = express.Router();
const data = require('../utils/data');

router.get('/', (req, res) => {
    data.getProjects((error, data)=>{
        if(error) {
            return res.send({
                error
            });
        }
        const Projects = JSON.parse(data);
        return res.render('index', {
            Projects
        });
    })
    
});

module.exports = router;