const Collaborator = require('../models/collaborator');

class CollaboratorController {

  async create(req, res) {
    try {
      const collaborator = await Collaborator.create(req.body);
      res.status(201).send(collaborator);

    } catch (erro) {
      res.status(500).send(error);
    }
  }

  async fetch(req, res) {
    try {
      const filter = JSON.parse(req.query.filter);
      let search = '';
      if(filter.search) {
        search = filter.search;
      }

      const collaborators = await Collaborator.find({ name: {$regex : search, $options: 'i'}}).populate('department', 'name');
      res.status(200).send(collaborators);

    } catch (error) {
      res.status(500).send(error)
    }
  }

  async getOne(req, res) {
    try {
      const id = req.params.id;
      const collaborator = await Collaborator.findById(id).populate('department', 'name');
      res.status(200).send(collaborator);

    } catch (error) {
      res.status(500).send(error)
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;
      await Collaborator.findByIdAndUpdate(id, req.body);
      res.status(200).send({ data: { id } });

    } catch (error) {
      res.status(500).send(error);
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      const collaboratorToDelete = await Collaborator.findById(id);
      await Collaborator.findByIdAndDelete(id);

      res.status(200).send({ data: collaboratorToDelete });

    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = new CollaboratorController();