var koa = require('koa');
var app = koa();

app.use(function *(){
  console.log('**********');
  console.log('**********');
});

app.listen(3000);
