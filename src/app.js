
const path =require('path')
const express = require('express')
const hbs = require('hbs')
const app =express()
const request= require('request')

//Define path for Express 
const publicDirPath=path.join(__dirname,'../public')
const viewPath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')

//Setup handlebars engine and views
app.set('view engine','hbs')
app.set('views',viewPath)
hbs.registerPartials(partialsPath
    )
//Setup static directory
app.use(express.static(publicDirPath))
app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather App',
        name:'Krishna Soni'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'Weather App',
        name:'Krishna Soni'
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Weather App',
        message:'THis is a message for help page',
        name:'Krishna Soni'

    })
})



app.get('/weather',(req,res)=>{
    if(!req.query.lat && !req.query.long){
        return res.send({
            error:'Please provide address'
        })
    }
    const url ='http://api.weatherstack.com/current?access_key=881e3b194843e78f36b0e6720324de30&query='+req.query.lat+','+req.query.long
    
    request({url:url,json:true},(error,response)=>{
        // const data =JSON.parse(response.body)
        // console.log(response.body.current.temperature)
        res.send({
            temperature:response.body.current.temperature,
            humidity:response.body.current.humidity,
            latitude:req.query.lat,
            longitude:req.query.long
        })
    })
   
})

app.get('/products',(req,res)=>{
    req.query.search
    res.send({
        products:[]
    })
})
app.get('*',(req,res)=>{
    res.render('404',{
        title:'Error Page',
        name:'Krishna Soni'

    })
})

app.listen(3000,()=>{
    console.log('server up')
})