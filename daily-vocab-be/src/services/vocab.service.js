/* eslint-disable no-unused-vars */
const { Vocab } = require('../models');

const getAllVocab = async () => {
  const vocabs = await Vocab.findAll();
  return vocabs;
};

const createVocab = async (word, sentence) => {
  const createdTodo = await Vocab.create(
    { word, sentence },
  );
  return createdTodo.dataValues;
};

const updateVocab = async (word, sentence) => {
  const createdTodo = await Vocab.update(
    { word, sentence }, {
      where: {
        word,
      },
    },
  );
  return createdTodo.dataValues;
};

module.exports = { getAllVocab, createVocab };
