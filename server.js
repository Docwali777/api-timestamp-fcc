var express = require('express');
var app = express();
const bodyParser = require('body-parser')
const querystring = require('querystring');
const ejs = require('ejs');
const URL = require('url').URL;



const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: true }))
app.use(express.static('public'))
app.set('view engine', 'ejs')


app.get('/', (req, res)=>{
res.render('index', {
  unix: '',
  date: ''
})
})
app.get('/:date', (req, res)=>{

let { date } = req.params



let setMonth = {
  0 : 'January',
  1 : 'February',
  2 : 'March',
  3 : 'April',
  4 : 'May',
  5 : 'June',
  6 : 'July',
  7 : 'August',
  8 : 'September',
  9: 'October',
  10: 'November',
  11: 'December'
}
var d = new Date();
var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";


let day =(new Date(+req.params.date).getDate())
let month = (new Date(+date).getMonth())
let year = new Date(+date).getFullYear()
let dateAndUnix = {
  unix: Boolean(new Date(date).valueOf()) ===false ? (+date > 1 ? +date : 'Please enter correct Unix Time') : new Date(date).valueOf()
}
dateAndUnix.date= +date !== dateAndUnix.unix ? (+new Date(date) > 0 ? date : 'Please enter correct Date format') : `${setMonth[month]} ${day}, ${year} `

  res.render('index', {
     unix: dateAndUnix.unix,
     date: dateAndUnix.date
   }
 )
})







app.listen(PORT, ()=>{
  console.log(`PORT ${PORT}`)
})
