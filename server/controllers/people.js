var mongoose = require('mongoose');
var Person = mongoose.model('Person');

module.exports = {
    index: function (req, res){
        Person.find(function (err, data){
            if(err) {console.log(err);}
            res.render('index', {'people': data});
        })
    },
    new: function (req, res){
        Person.update({name: req.params.name}, {name: req.params.name}, {upsert: true}, function (err, data){
            if(err) {console.log(err);}
            console.log(data);
            res.redirect('/');
        })
    },
    remove: function (req, res){
        Person.remove({name: req.params.name}, function (err){
            if(err) {console.log(err);}
            res.redirect('/');
        })
    },
    show: function (req, res){
        Person.find({name: req.params.name}, function (err, data){
            if(err) {console.log(err);}
            console.log('Data', data);
            res.render('show', {'person': data[0]});
        })
    },
}
