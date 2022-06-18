const router = require('express').Router();
const { randomUUID } = require('crypto');
const { response } = require('express');
const fs = require('fs');
const path = require('path')


router.get('/api/notes', (req, res) => {
    const dataNotes = require('../db/db.json')
    //     fs.readFile(pathTo, (err, data) => {
    //         if (err) {
    //             throw err
    //         }
    //         console.log('hello', data)
    //         res.send(data);
    //     })
    console.log(dataNotes)
    res.send(dataNotes)
})
//when we get a post, we get new data which we can add to the db.json file
//this data how to get access to reqest from button
//save to variable
//then add and id, 
//how to add new keys/properties to an object, dot notation
//.id = uuid
//add new into, read file, then add in data
//remember to console.log the data and parse into JS
//then push new object
//then re-write file with old and new data
router.post('/api/notes', (req, res) => {
    //console.log(req.body)
    // const newData = (req.body)
    let newNote = {}
    const { title, text } = req.body;
    if (title && text) {
        newNote = {
            title,
            text,
            id: randomUUID()
        }
        //console.log(newNote)
    }
    const updateDB = () => {
        const data = require('../db/db.json')
        data.push(newNote)
        return data
    }
    const hello = JSON.stringify(updateDB())
    fs.writeFile('./db/db.json', hello, (err) => {
        if (err) {
            throw err
        }
    })
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})
// Convert the data to a string so we can save it
//const reviewString = JSON.stringify(newNote);

// Write the string to a file
// fs.readFile(`../db/db.json`, (err, data) => {
//     // if (err) {
//     //     throw err
//     // }

//     // const oldData = 
//     // fs.writeFile(`./db/db.json`, reviewString, (err) => {
//     //     if (err) {
//     //         throw err
//     //     }

// const response = {
//     status: 'success',
//     body: newNote,
//     //     };
//     //     console.log(response)
//     //     console.log(response.body)
//     //     res.json(response);
//     // })
//     const hello = JSON.parse(data);
//     console.log('post data', hello)

// })


module.exports = router;