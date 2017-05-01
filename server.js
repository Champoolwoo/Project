var express = require('express')
var PyhonShell = require('python-shell')
var  mongoose = require('mongoose')
var bodyParser = require('body-parser')
var Schema = mongoose.Schema
var thingSchema = new Schema({}, {strict: false})
var DateEat = mongoose.model('SmartFarm', thingSchema)
var app = express()

mongoose.connect('mongodb://farm:26032538@ds127531.mlab.com:27531/farm')
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/ledOn', function(req, res, next){
	PyhonShell.run('ledOn.py', function(err){
		if(err){res.send(err)}
			else res.send({message: 'done'})
	})
})

app.get('/ledOff', function(req, res, next){
	PyhonShell.run('ledOff.py', function(err){
		if(err){res.send(err)}
			else res.send({message: 'done'})
	})
})

app.get('/pumpOn', function(req, res, next){
	PyhonShell.run('pumpOn.py', function(err){
		if(err){res.send(err)}
			else res.send({message: 'done'})
	})
})

app.get('/pumpOff', function(req, res, next){
	PyhonShell.run('pumpOff.py', function(err){
		if(err){res.send(err)}
			else res.send({message: 'done'})
	})
})

app.get('/takeCam', function(req, res, next){
	PyhonShell.run('takeCam.py', function(err){
		if(err){res.send(err)}
			else res.send({message: 'done'})
	})
})

app.get('/api', function(res, req){
	DateEat.find({})
	.exec(function (err,done){
			if(err) console.log(err)
			res.send(done)
	})
})

app.listen(3000)
console.log('running on port 3000.')