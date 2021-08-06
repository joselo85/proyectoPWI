const express = require('express');
const app = express();
const port = process.env.PORT || 3000;;
const path = require('path');
const indexRouter = require('./routes/index');
const detailsRouter = require('./routes/details');


// Seteos basicos: donde estan las paginas que vamos a renderizar.
// Donde estan los archivos estaticos que vamos a usar.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(indexRouter);
app.use(detailsRouter);


app.listen(port, () => {
    console.log(`Funcionando en http://localhost:${port}`);
});