/**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

  Each todo has a title and a description. The title is a string and the description is a string.
  Each todo should also get an unique autogenerated id every time it is created
  The expected API endpoints are defined below,
  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos
    
  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123
    
  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
    
  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }
    
  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123

    - For any other route not defined in the server return 404

  Testing the server - run `npm run test-todoServer` command in terminal
 */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
let todos = [{ "id": 1, "title": "Buy groceries", "completed": false, description: "I should buy groceries" }, { "id": 2, "title": "Buy groceries", "completed": false, description: "I should buy groceries" }, { "id": 3, "title": "Buy groceries", "completed": false, description: "I should buy groceries" }];
const port = 3000;


app.get("/todos", (req, res) => {
  try {

    res.status(200).json(todos);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
})


app.get("/todos/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);

  let todo = todos.find((todo) => todo.id == id);
  console.log(todo)
  if (todo !== undefined) {
    res.status(200).json(todo)

  }
  else {
    res.status(404).send("404 Not Found")

  }



})


app.post("/todos",(req,res)=>{
   todos.push(req.body);
   res.status(201).json(req.body);
})

app.put("/todos/:id",(req,res)=>{
  const {id} = req.params;
  const i = todos.findIndex((todo)=>todo.id==id);
  const todo = todos.find((todo)=>todo.id==id);
  const newTodo = {...req.body,id:todo.id}
  todos.splice(i,1,newTodo);

  res.status(200).json(todos);

})


app.delete("/todos/:id",(req,res)=>{
  const {id} = req.params;
  console.log(id);
  todos = todos.filter((todo)=>todo.id!=id);
  console.log(todos);
  res.status(200).json(todos)
})

app.listen(port, () => {
  console.log("Server Runnig on Port No." + port)
})



module.exports = app;