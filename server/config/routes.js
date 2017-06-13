var person = require('../controllers/people.js')

module.exports = function (app){
    app.get('/', function (req, res){
        person.index(req, res);
    })
    app.get('/new/:name/', function (req, res){
        person.new(req, res);
    })
    app.get('/remove/:name/', function (req, res){
        person.remove(req, res);
    })
    app.get('/:name/', function (req, res){
        person.show(req, res);
    })
}
