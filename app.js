const express = require('express');
const data = require('./data.json');
const app = express();
const port = 3000;
const path = require('path');




// Set view engine to pug 
app.set('view engine', 'pug');
app.set('views', path.join(__dirname,'views'));


//Serve static files
app.use(express.static('public'));
app.use(express.static('images'));

//routes
//index
app.get('/', (req, res)=> {
    res.render('index', {projects: data.projects});
});

//about
app.get('/about', (req, res) => {
    res.render('about');
});

//projects 
app.get('/project/:id', (req, res) => {
    const projectId= req.params.id;
    const project = data.projects.find(p => p.id == projectId);
    if(project) {
        res.render('project', {project});
    } else {
        res.status(404).send('Project not found');
    }
});

//404 Handler 
app.use((req, res) => {
    const error = new Error('Not Found');
    error.status = 404;
    console.error(error.message);
    res.status(404).render('404', {error});
});

//Global error handler 
app.use((err, req, res, next ) => {
    console.error(err.message);
    res.status(err.status || 500).send('Internal Server Error');
});

// Start Server 
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

