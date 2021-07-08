const Department = require('../models/department');

class DepartmentController {

  async create(req, res) {
    try {
      const department = await Department.create(req.body);
      res.status(201).send(department);

    } catch (erro) {
      res.status(500).send(error);
    }
  }

  async fetch(req, res) {
    try {
      const departments = await Department.find({});
      res.status(200).send(departments);

    } catch (error) {
      res.status(500).send(error)
    }
  }

  async getOne(req, res) {
    try {
      const department = await Department.findById(req.params.id);
      res.status(200).send(department);

    } catch (error) {
      res.status(500).send(error)
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;
      await Department.findByIdAndUpdate(id, req.body);
      const departmentToUpdate = await Department.findById(id);

      res.status(200).send({ data: { id }});

    } catch (error) {
      res.status(500).send(error);
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      const departmentToDelete = await Department.findById(id);
      await Department.findByIdAndDelete(id);

      res.status(200).send({ data: departmentToDelete });

    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = new DepartmentController();