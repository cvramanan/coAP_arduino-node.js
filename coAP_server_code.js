var coap        = require('coap')
  , server      = coap.createServer()
  ,
qs = require('querystring');

server.on('request', function(req, res) {
  if(req.method=='POST') {
            var body='';
            req.on('data', function (data) {
                body +=data;
            });
          }
      //  res.write(qs.parse(body));
      req.on('end',function(){
             var POST =  qs.parse(body);
             console.time(JSON.stringify(POST));
            console.timeEnd(JSON.stringify(POST));
         });


res.end("thank you");
  //res.end('Hello ' + req.url.split('/')[1] + '\n')
});

// the default CoAP port is 5683
server.listen(function() {
console.log("SEAMLESS_ACCESS_SERVER_STARTED");
})
