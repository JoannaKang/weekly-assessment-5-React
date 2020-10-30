const mongoose = require('mongoose');
const { Schema } = mongoose;

const voteinfoSchema = new Schema({
  title: { type: String, required: true },
  published_at: { type: Date, default: Date.now },
  score: { type: Number, default: 0 }
})

module.exports = mongoose.model('Voteinfo', voteinfoSchema);