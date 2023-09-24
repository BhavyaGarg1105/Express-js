const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// const customMiddleware = (req,res,next)=>{
//   console.log(req);
//   next;
// };

// app.use(customMiddleware);

app.get('/', (req, res) => {
//   res.json({
//     "firstName":'Bhavya',
//     "lastName":'Garg',
//     "age":22
// })
  res.sendFile(path.join(__dirname,'./index.html'));
})

app.get('/hello', (req, res) => {
  res.send('Hello World ')
})

app.get('/hello/:name', (req, res) => {
  console.log(req);
  res.send('Hello World - ' + req.params.name)
})

app.get('/about', (req, res) => {
    res.send('About Hello World.')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})