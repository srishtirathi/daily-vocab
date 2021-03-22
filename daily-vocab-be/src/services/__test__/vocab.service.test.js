const { getAllVocab, createVocab } = require('../vocab.service');
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

describe('createVocab Function', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });
  const MOCK_TODO = {
    word: 'hi',
    sentence: 'hi srishti',
  };

  const spyOnCreate = jest.spyOn(Vocab, 'create');
  it('should append data to database', async () => {
    const MOCK_RESOLVED_VALUE = {
      dataValues: {
        id: '1',
        word: 'hi',
        sentence: 'hi srishti',
      },
    };

    spyOnCreate.mockResolvedValueOnce(MOCK_RESOLVED_VALUE);

    const todo1 = await createVocab(MOCK_TODO);

    expect(todo1).toEqual(MOCK_RESOLVED_VALUE.dataValues);
  });
});
