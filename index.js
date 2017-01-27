const _ = require('koa-route');
const koa = require('koa');
const app = koa();

const db = {
  tobi: { name: 'tobi', species: 'ferret' },
  loki: { name: 'loki', species: 'ferret' },
  jane: { name: 'jane', species: 'ferret' }
};

const petsHandler = {
  list: function *(){
    const names = Object.keys(db);
    console.log(`pets: ${names.join(', ')}`);
    this.response = 200;
  },
  show: function *(name){
    const pet = db[name];
    if (!pet) return this.throw('cannot find that pet', 404);
    this.response = 200;
  }
};

app.use(_.get('/pets', petsHandler.list));
app.use(_.get('/pets/:name', petsHandler.show));

app.listen(3000);
console.log('listening on port 3000');
