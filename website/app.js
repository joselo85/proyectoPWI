const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const Projects = require('./utils/projects')


// Seteos basicos: donde estan las paginas que vamos a renderizar.
// Donde estan los archivos estaticos que vamos a usar.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


app.get('', (req, res)=> {
    return res.render('index', {
        Projects
    });
});

app.get('/proyectos/:name', (req, res) => {
    const name = req.params.name
    
    const details = Projects.find((project, index) => {
        if (project.name == name) {
            return true;
        };
    })
    
    return res.render('pages/details', {
        details
    })
   
    

})



app.listen(port, () => {
    console.log(`Funcionando en http://localhost:${port}`);
});