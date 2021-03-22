const {
  getAllVocab,
} = require('../vocab.handler');
const vocabServices = require('../../services/vocab.service');

describe('get(/vocab) Handler', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });
  const mockSend = jest.fn();
  const mockResponseObject = {
    status: jest.fn(() => ({ send: mockSend })),
  };
  const mockRequestObject = {};
  const spyOnGetAllTodo = jest.spyOn(vocabServices, 'getAllVocab');
  const MOCK_VOCAB_OBJECT = [
    {
      id: '1',
      description: 'First Task',
      status: 'complete',
    },
    {
      id: '2',
      description: 'Second Task',
      status: 'incomplete',
    },
  ];
  it('should set response status code to 200 on successfull read of vocab', async () => {
    spyOnGetAllTodo.mockResolvedValue(MOCK_VOCAB_OBJECT);
    await getAllVocab(mockRequestObject, mockResponseObject);
    expect(mockResponseObject.status).toHaveBeenCalledWith(200);
  });
  it('should return object of vocab', async () => {
    spyOnGetAllTodo.mockResolvedValue(MOCK_VOCAB_OBJECT);
    await getAllVocab(mockRequestObject, mockResponseObject);
    expect(mockResponseObject.status().send).toHaveBeenCalledWith(MOCK_VOCAB_OBJECT);
  });
  it('should set status code to 500 if error in accessing db', async () => {
    spyOnGetAllTodo.mockRejectedValue(new Error('Error in accessing data'));
    await getAllVocab(mockRequestObject, mockResponseObject);
    expect(mockResponseObject.status).toHaveBeenCalledWith(500);
  });
});
