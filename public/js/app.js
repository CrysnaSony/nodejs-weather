
const weatherForm=document.querySelector('form')
const latitude=document.getElementById('latitude')
const longitude=document.getElementById('longitude')
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const lat= latitude.value
    const long= longitude.value
    fetch('/weather?lat='+lat+'&long='+long).then((response)=>{
        response.json().then((data)=>{
            console.log(data)
            document.getElementById('message').innerHTML=data.temperature
        })
    })
    console.log('test')
})