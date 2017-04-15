var express = require('express');
var app = express();
const bodyParser = require('body-parser')
const querystring = require('querystring');
const URL = require('url').URL;



const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: true }))
app.use(express.static('public'))
app.set('view engine', 'ejs')


app.get('/', (req, res)=>{
res.render('index')
})
app.get('/:date', (req, res)=>{

let { date } = req.params

let dateAndUnix = {
  unix: Boolean(new Date(date).valueOf()) ===false ? +date : new Date(date).valueOf()
}

let setMonth = {
  1 : 'January',
  2 : 'February',
  3 : 'March',
  4 : 'April',
  5 : 'May',
  6 : 'June',
  7 : 'July',
  8 : 'August',
  9 : 'September',
  10: 'October',
  11: 'November',
  12: 'December'
}

let day = (new Date(+date).getDay())
let month = (new Date(+date).getMonth())
let year = new Date(+date).getFullYear()
dateAndUnix.date= +date !== dateAndUnix.unix ? date : `${setMonth[month]} ${day}, ${year} `

  res.json(dateAndUnix)
})


app.listen(PORT, ()=>{
  console.log(`PORT ${PORT}`)
})
