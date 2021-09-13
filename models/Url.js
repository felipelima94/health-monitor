const mongoose = require('mongoose')

const Url = new mongoose.Schema({
    name: { type: String },
    url: { type: String },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
    cron: { type: Number, required: true },
    last_ok: { type: Date },
    last_check: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Url', Url)