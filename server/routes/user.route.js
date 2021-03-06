/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

const UserController = require('../controllers/user.controller');

module.exports = (api) => {
  api.get('/users', UserController.get);
  api.get('/users/:name', UserController.getNames);
  api.get('/users/roles/:role', UserController.getRoles);
  api.get('/users/u/:username', UserController.findByUserName);
  api.put('/users/', UserController.register);
  api.put('/users/:id', UserController.patch);
  api.delete('/users/:id', UserController.delete);
};
