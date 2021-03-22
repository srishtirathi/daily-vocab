const { getAllVocab } = require('../vocab.service');
const { Vocab } = require('../../models');

describe('getAllVocab Function', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });
  const spyOnFindAll = jest.spyOn(Vocab, 'findAll');
  it('should return all the vocabs', async () => {
    const expectedValue = 'abc';
    spyOnFindAll.mockResolvedValue(expectedValue);
    const recievedData = await getAllVocab();
    expect(recievedData).toEqual(expectedValue);
  });
});
