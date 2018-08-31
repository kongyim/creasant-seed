let express = require('express')
let _ = require('lodash')
let log4js = require('log4js')
let cors = require('cors')
let bodyParser = require('body-parser')

let pkg = require('./package.json')

let logger = log4js.getLogger();
logger.level = 'debug'

let userList = [
  {
    name: 'kong',
    birthday: new Date('2011-11-12')
  },
  {
    name: 'alex'
  },
  {
    name: 'joseph'
  }
]

let app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/api/users', (req, res, next)=> {
  res.send(userList);
})

app.post('/api/users', (req, res, next)=> {
  userList.push(req.body)
  res.send(userList);
})

let server = app.listen(pkg.config.port, ()=>{
  logger.info("%s started at http://localhost:%s", pkg.name, server.address().port)
})

