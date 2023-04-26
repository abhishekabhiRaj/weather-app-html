function fetchData(){
    var input = document.getElementById('input').value
    var key = '7a48eaf9c344401c8dc170500231602'
    if(input){
        var url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${input}&aqi=no`
        fetch(url)
        .then(res=> res.json())
        .then(res=>updateHTML(res))
    }else{
        window.alert("Empty Location")
    }
    document.getElementById('input').value = ''
}



function updateHTML(data){
    var city = document.getElementById('city')
    var counrty = document.getElementById('country')
    var temperature = document.getElementById('temperature')
    var wind = document.getElementById('wind')
    var humidity = document.getElementById('humidity')
    console.log("data",data)
    console.log("data.location",data.location)
    console.log("data.location.country",data.location.country)
    console.log("data.current",data.current)
    console.log("data.current.temp_c",data.current.temp_c)

    // location
    counrty.innerText = data.location.country
    city.innerText = data.location.name

    // temperature
    temperature.innerHTML = data.current.temp_c
    wind.innerHTML = data.current.wind_kph
    humidity.innerHTML = data.current.humidity
}
