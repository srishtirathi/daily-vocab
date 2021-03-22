const { Vocab } = require('../models');

const getAllVocab = async () => {
  const vocabs = Vocab.findAll();
  return vocabs;
};
module.exports = { getAllVocab };
