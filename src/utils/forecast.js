const http = require('http')

const forecast = (country,state,city,callback) => {
    
    const url = 'http://localhost/weather/index.php?country='+encodeURIComponent(country)+'&state='+encodeURIComponent(state)+'&city='+encodeURIComponent(city)
    http.get(url, (res) => {
    let body = ''
    res.on("data", (chunk) => {
      body += chunk
    });
    res.on("end", () => {
      body = JSON.parse(body)
      if(body.error){
        callback(body.error,undefined)
      } else {
        
        callback(undefined,body.description+" It is currently "+body.temperature+" degrees out, and there is " +body.precipitation +" % chance of rain.")
      }
    });
    }).on('error', (e) => {
        callback("Something went wrong!",undefined);
    });
  }

  module.exports = forecast