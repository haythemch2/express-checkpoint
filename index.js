var express = require('Express');
var app = express();
// var routes = require('./routes')

app.set('view engine', 'pug')
// app.set('views', path.join(__dirname, 'views'));
app.use((req,res,next)=>{
  var taw=new Date();
  var hour=taw.getHours();
  var day=taw.getDay();
  ((day<=5&&day>=1)&&(hour<17&&hour>=9))?next():res.status(200).send('only available during working hours (Monday to Friday,  from 9 to 17).');
});
app.get('/', (req, res)=>{
  res.render('index');
});
app.get('/services', (req, res)=>{
  res.render('services');
});
app.get('/contact', (req, res)=>{
  res.render('contact');
});
app.get('*', (req, res) => {
	res.status(200).send('Sorry, page not found');
});


app.listen(4000);