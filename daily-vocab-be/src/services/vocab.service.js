const { Vocab } = require('../models');

const getAllVocab = async () => {
  const vocabs = Vocab.findAll();
  return vocabs;
};

const createVocab = async (word, sentence) => {
  const createdTodo = await Vocab.create(
    { word, sentence },
  );

  return createdTodo.dataValues;
};
module.exports = { getAllVocab, createVocab };
