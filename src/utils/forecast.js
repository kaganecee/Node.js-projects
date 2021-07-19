const request = require("request")

const forecast = (latitude,longitude,callback) => {
    const url = "http://api.weatherstack.com/current?access_key=27409cff975e61e1a5bdd8595490a780&query="+latitude+","+longitude
    request({url , json:true}, (error,response) => { // response-> {body} (Object destructuring)
        if(error){
            callback("Unable to connect to weather service!",undefined)
        }else if (response.body.error){
            callback("Unable to find location.",undefined)
        }else{
            callback(undefined,response.body.current.weather_descriptions[0]+".It is currently "+response.body.current.temperature+" degress out. It feels like "+response.body.current.feelslike+" degress out.")
        }
    })
}
module.exports = forecast