const express = require('express')
const path = require('path')
const app = express()
  
// Static Middleware
//app.use(express.static(path.join(__dirname, 'public')))
var public = path.join(__dirname, '/app');
var vendor = path.join(__dirname, '/vendor');


  
// View Engine Setup
// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'ejs')
  
app.get('/', function(req, res) {
    res.sendFile(path.join(public, 'index.html'));
});

app.use('/', express.static(public));
app.use('/', express.static(vendor));
  
app.listen(8080, function(error){
    if(error) throw error
    console.log("Server created Successfully")
})