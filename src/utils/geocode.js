const http = require('http')

const geocode = (address,callback) => {
    const url = 'http://localhost/weather/getLocation.php?city='+encodeURIComponent(address)
    http.get(url, (res) => {
      let body = ''
      res.on("data", (chunk) => {
        body += chunk
      });
      res.on("end", () => {
        body = JSON.parse(body)
        if(body.error)
        {
          //console.log(body.error)
          callback(body.error, undefined)
        }
        else
        {
          callback(undefined, {
            city: body.city,
            state: body.state,
            country: body.country
          })
        }
      });
    }).on('error', (e) => {
      callback(e.message, undefined)
    });
  }

  module.exports = geocode