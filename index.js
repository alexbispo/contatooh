const http = require('http');
const app = require('./config/express')();

http.createServer(app).listen(app.get('port'), () =>{
  console.log('Express Server listen on port ' + app.get('port'));
});
