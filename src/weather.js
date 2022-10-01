const request= require('request')

const url ='http://api.weatherstack.com/current?access_key=881e3b194843e78f36b0e6720324de30&query=37.8267,-122.4233'

request({url:url,json:true},(error,response)=>{
    // const data =JSON.parse(response.body)
    console.log(response.body.current.temperature)
})