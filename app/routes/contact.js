module.exports = (app) => {
  app.get('/contacts', app.controllers.contact.index);
  app.get('/contacts/:id', app.controllers.contact.show);
}
