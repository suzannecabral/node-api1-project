const express = require('express');
const generate= require('shortid').generate;

//instantiate server app
const app=express();
app.use(express.json());

//pick a port
const PORT = 2222;

//make some data
const data = [{
    id: "a_unique_id", // hint: use the shortid npm package to generate it
    name: "Jane Doe", // String, required
    bio: "Not Tarzan's Wife, another Jane",  // String, required
  },
];


// POST: /api/users
// Creates a user using the information sent inside the request body.
//------------------------


// GET: /api/users
// Returns an array users.
//------------------------


// GET: /api/users/:id
// Returns the user object with the specified id.
//------------------------


// DELETE: /api/users/:id
// Removes the user with the specified id and returns the deleted user.
//------------------------


// PUT: /api/users/:id
// 1. Updates the user with the specified id using data from the request body. 
// 2. Returns the modified user
//------------------------


//CATCHALL ERROR
//------------------------


//server is on:
app.get('/', (req,res)=>{
    res.send("The server is running, better go catch it.");
});


//Listen for reqs
app.listen(PORT, () => {
    console.log(`Ready to roll: http://localhost:${PORT}`)
});
