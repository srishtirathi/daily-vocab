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

export const updateVocab = async ({ word, sentence, id }) => {
  const response = await axios.put('/vocab', { word, sentence, id });
  console.log('response', response);
};
