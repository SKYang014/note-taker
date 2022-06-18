const router = require('express').Router();
const path = require('path')

router.get('/notes', (req, res) => {
    //send file reads HTML, absolute path using __dirname  
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})

//router first parameter = website addition
router.get('*', (req, res) => {
    //send file reads HTML, absolute path using __dirname  
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

module.exports = router;