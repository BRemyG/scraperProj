/**
 * Created by n88047 on 6/21/2016.
 */
var express = require('express');
var app = express();

//Other http methods and impleetation
// app.post('/', function(req, res){
//    res.send('Post request')
//});
//app.put('/', function(req, res){
//    res.send('PUT request')
//});
//app.delete('/', function(req, res){
//    res.send('DELETE request')
//});

//get method to route requests via'/'. send a simple hello world response
app.get('/', function(req, res){
    res.send('Hello World!')
});

// Expose the folder 'myFold', we use the special built-in middle ware called express.static
// Lets expose it with the /myPath
app.use('/myPath', express.static('myFold'));

app.get('/scrape', function(req, res){
    url = 'https://www.google.com/finance?q=yahoo&hl=en&ei=fFFpV8GmCMGvmAGe94yoCw';
    request(url, function(error, response, html){
        if(!error){
            var
        }
    })
})

//publish the app on port 3000
app.listen(3000);
console.log('check out port http://localhost:3000/')