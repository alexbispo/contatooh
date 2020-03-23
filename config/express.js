const express = require('express');
const load = require('express-load');

module.exports = () => {
  const app = express();
  app.set('port', 3000);

  app.use(express.static('./public'));

  load('models', {cwd: 'app'})
    .then('controllers')
    .then('routes')
    .into(app);

  app.set('view engine', 'ejs');
  app.set('views', './app/views');

  return app;
}
