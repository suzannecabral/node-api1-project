const express = require('express');
const generate= require('shortid').generate;

//instantiate server app
const app=express();
app.use(express.json());

//pick a port
const PORT = 2222;

//make some data
const users = [{
    id: generate(), // hint: use the shortid npm package to generate it
    name: "Jane Doe", // String, required
    bio: "Not Tarzan's Wife, another Jane",  // String, required
  },
];








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
