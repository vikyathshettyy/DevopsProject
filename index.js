const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
const port = 3000

app.get('/', (req,res) => {
	res.sendFile(__dirname + '/index.html')
})

app.get('/',(req,res) =>{
	res.send('hello vikyath')

})

app.get('/calculate',(req,res)=> {
    const principle = parseInt(req.query.p);
    const interest = parseInt(req.query.i);
    const years = parseInt(req.query.y);
    console.log(principle,interest,years);
    const total = principle + (principle*(interest/100)*years);
    const amount = total-principle;
    res.json({
        total,
        amount
    })

})

app.listen(port,() => {
	console.log(`app listening on port ${port}`)
})
