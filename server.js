var express = require('express')
var PyhonShell = require('python-shell')
var app = express()


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

app.listen(3000)
console.log('running on port 3000.')