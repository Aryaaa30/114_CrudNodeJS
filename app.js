const express = require('express');
const app = express();
const todoRoutes = require('./routes/todo.js');
const port = 3000;

app.use(express.json());
app.use('/todos', todoRoutes);

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/contact', (req, res) => {
    res.render('contact');
});
app.get('/todos/view', (req, res) => {
    res.render('todos', { todos: todoRoutes.todos }); // Render the todos with the API's todos array
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
