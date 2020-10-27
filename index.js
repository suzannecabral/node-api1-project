const express = require('express');
const generate= require('shortid').generate;

//instantiate server app
const app=express();
app.use(express.json());

//pick a port
const PORT = 2222;

//make some data
let users = [{
    id: generate(), // hint: use the shortid npm package to generate it
    name: "Jane Doe", // String, required
    bio: "Not Tarzan's Wife, another Jane",  // String, required
  },{
    id:generate(),
    name:"Jasmine",
    bio:"Tiger Princess"
  },
];



// PUT: /api/users/:id
// 1. Updates the user with the specified id using data from the request body. 
// 2. Returns the modified user
//------------------------


// DELETE: /api/users/:id
// Removes the user with the specified id and returns the deleted user.
//------------------------

//err: 404 user with id not found
//err: ?500 server error removing user from db
app.delete('/api/users/:id', (req,res)=>{

    const { id } = req.params;
    const foundUser = users.find(user => user.id === id);

    if(!foundUser){
        res.status(400).json({
            message:`No user found with id ${id}`
        });
    }else{
        users = users.filter(user => user.id !== id);
        res.status(200).json(foundUser);
    }
//not sure how to add a server error clause
//look this up


//fix: "Cannot DELETE /api/users/wJCr24HFs"
//doesn't display my error message
//id matches an existing id
});

// POST: /api/users
// Creates a user using the information sent inside the request body.
//------------------------
app.post('/api/users', (req,res) => {
    const { name, bio } = req.body;

    //error to user if name or bio are missing
    if(!name || !bio){
        res.status(400).json({
            message:'name and bio are required to post a new user'
        })
    }else{
        //if data passes the check, then post it

        //make the new entry from the request body
        const newUser = {
            id:generate(),
            name,
            bio
        }

        //add to db
        users.push(newUser);
        res.status(201).json(newUser);
    }
});

// GET: /api/users/:id
// Returns the user object with the specified id.
//------------------------
app.get('/api/users/:id', (req,res) => {
    const { id } = req.params;
    const foundUser = users.find(user => user.id === id);
    
    //if user id is not found:
    if (!foundUser){
        //return relevant error
        res.status(404).json({message:`No user found with id: ${id}`});
    }else{
        //send status code and data
        res.status(200).json(foundUser);
    }
});


// GET: /api/users
// Returns an array users.
//------------------------
app.get('/api/users', (req,res) => {
    res.json(users);
});


//server is on:
app.get('/api/', (req,res)=>{
    res.send("The server is running, better go catch it.");
});


//CATCHALL ERROR
//------------------------
app.get('*', (req,res)=>{
    res.status(404).json({ message: '404: Not found'})
});


//Listen for reqs
app.listen(PORT, () => {
    console.log(`Ready to roll: http://localhost:${PORT}`)
});
