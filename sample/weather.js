var request = require('request');
var parseString = require('xml2js').parseString;

request('http://www.weather.go.kr/weather/forecast/mid-term-rss3.jsp?stnld=109', function (error, response, body) {
    parseString(body/*여기에 response가 담겨있음*/, function(err,result){
        console.dir(result.rss.channel[0].item[0].description[0].header[0].wf[0]);
    });//channel, item, 그 밑으로 전부 array형식이니까!
});