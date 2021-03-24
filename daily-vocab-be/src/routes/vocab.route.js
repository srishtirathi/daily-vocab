const express = require('express');
const handlers = require('../handlers/vocab.handler');

const vocabRouter = express.Router();

vocabRouter.get('', handlers.getAllVocab);
vocabRouter.post('', handlers.postVocabHandler);
vocabRouter.put('', handlers.updateVocabHandler);
module.exports = { vocabRouter };
