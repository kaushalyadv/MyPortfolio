const connecttoMongo = require('./db');
const express = require('express')
var cors = require('cors')

connecttoMongo();



const app = express()
const port = process.env.NODE_ENV || 5000

app.use(cors(
  // {
  //     origin: ["https://deploy-Portfolio-Kaushal-1whq.vercel.app"],
  //     methods: ["POST"],
  //     credentials: true
  // }
))

app.use(express.json())

// awilable routes

app.use('/api/auth', require('./routes/auth'))
// app.use('/api/notes', require('./routes/notes'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

if(process.env.NODE_ENV === 'production') {
  app.use(express.static("client/build"));
  // const path = require("path");
  // app.get("*", (req, res) => {
  //   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  // })
}

app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port}`)
})

