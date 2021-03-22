const vocabServices = require('../services/vocab.service');

const getAllVocab = async (req, res) => {
  try {
    const allVocab = await vocabServices.getAllVocab();
    res.status(200).send(allVocab);
  } catch (error) {
    res.status(500).send();
  }
};

module.exports = { getAllVocab };
