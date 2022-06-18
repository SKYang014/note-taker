const apiRoutes = require('./routes/apiRoutes');
const htmlroute = require('./routes/htmlRoutes.js')
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();


//middleware which instructs server to make certain files readily available 
app.use(express.static('public'));
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(apiRoutes);
app.use(htmlroute);
//app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});