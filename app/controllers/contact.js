const contacts = [
  {_id: 1, name: 'Contato Exemplo 1', email: 'cont1@empresa.com.br'},
  {_id: 2, name: 'Contato Exemplo 2', email: 'cont2@empresa.com.br'},
  {_id: 3, name: 'Contato Exemplo 3', email: 'cont3@empresa.com.br'},
  {_id: 4, name: 'Contato Exemplo 4', email: 'cont4@empresa.com.br'},
];

module.exports = () => {
  return {
    index(req, resp) {
      return resp.json(contacts);
    },

    show(req, resp) {
      const contact = contacts.find((c) => c._id == req.params.id);
      return contact ? resp.json(contact) : resp.status(404).send('Contact not found');
    }
  };
}
