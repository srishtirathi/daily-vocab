/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const getVocab = async () => {
  const getVocabResponse = await axios.get('/vocab');

  const vocabJson = getVocabResponse.data;

  return vocabJson;
};

export const postVocab = async ({ word, sentence }) => {
  const response = await axios.post('/vocab', { word, sentence });
  console.log(response);
};
