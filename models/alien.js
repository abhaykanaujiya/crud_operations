const mangoose = require('mongoose')

const alienSchema = new mangoose.Schema({
  name: {
    type: String,
    required:true
  },
  tech: {
    type: String,
    required: true
  },
  sub: {
    type: String,
    required: true,
    default:false
  },

})