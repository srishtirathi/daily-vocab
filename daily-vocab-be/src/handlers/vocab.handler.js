const vocabServices = require('../services/vocab.service');

const getAllVocab = async (req, res) => {
  try {
    const allVocab = await vocabServices.getAllVocab();
    res.status(200).send(allVocab);
  } catch (error) {
    res.status(500).send();
  }
};

const postVocabHandler = async (req, res) => {
  try {
    const { body } = req;
    // send obj
    const createdVocab = await vocabServices.createVocab(body.word, body.sentence);

    res.status(201).send(createdVocab);
  } catch (error) {
    res.status(500).send();
  }
};

module.exports = { getAllVocab, postVocabHandler };
