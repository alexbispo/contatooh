module.exports = (app) => {
  app.get('/', app.controllers.home.index);
}
