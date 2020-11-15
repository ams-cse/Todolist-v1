const express = require ('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

const app = express();
const items = ['Apple', 'Mango'];
const workItems = [];

app.set('view engine', 'ejs'); // EJS page setup, must include (views) folder

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static('public'));

app.get('/', function (req, res) {
    const day = date();
    res.render('list', {listTitle: day, newListItems: items});
});

app.post('/', function (req, res) {
    const item = req.body.newItem;
    if(req.body.list === 'Work') {
        if(item === ''){
        }else {
            workItems.push(item);
        }
        res.redirect('/work');
    }else {
        items.push(item);
        res.redirect('/');
    }
});

app.get('/work', function (req, res) {
    res.render('list', {listTitle: 'Work List', newListItems: workItems});
});

app.get('/about', function (req, res) {
    res.render('about');
});




// Sever Port
app.listen(3000, function () {
    console.log('Server started Post is 3000.');
});