const express = require('express');
const cors = require('cors');
const mangoose = require('mongoose')
const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');
const url ='mongodb://localhost/AlienDBex'
const app = express();
mangoose.connect(url, { useNewUrlParser: true })
const connection = mongoose.connection

// connection.on('open', function () {
//   console.log('contected....');
// })

// const alienRouter = require('./routes/aliens')
// app.use('/aliens',alienRouter)
const state = [];
app.use(bodyParser.json());
app.use(cors())
// app.get('/user', (req, res) => {
//   return res.status(200).json({ data: state })
// })

// app.get('/userByID/:id', (req, res) => {
//   const id= req.params;
//   console.log(id);
//   return res.status(200).json({msg:id})
// })
app.post('/form_data', (req, res) => {

  const { name, email, phone, address } = req.body.data;
  console.log(name,email,address,req.body);
  state.push({ name, email, phone, address })
    console.log(state);
   return res.send('User has been added successfully');
})

app.listen(2020, () => {
  console.log('server is up')
})