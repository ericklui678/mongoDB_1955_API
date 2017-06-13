var mongoose = require('mongoose');

var personSchema = new mongoose.Schema({
    name: { type: String, reqired: [true, 'name required'], minlength: 4 },
}, { timestamps: true });
var Person = mongoose.model('Person', personSchema);
