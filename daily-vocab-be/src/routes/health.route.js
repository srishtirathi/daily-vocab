const express = require('express');
const handlers = require('../handlers/health.handler');

const router = express.Router();

// console.log(getAllTodoHandler);
router.get('', handlers.healthHandler);

module.exports = {
  router,
};
