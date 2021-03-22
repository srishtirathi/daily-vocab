/* eslint-disable react/jsx-props-no-spreading */
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import AddNew from './AddNew';

describe(AddNew.name, () => {
  const mockProps = {

    addNewVocab: jest.fn(),
  };
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('sanity check', () => {
    expect(1 + 1).toBe(2);
  });
  it('should match snapshot', () => {
    const { container } = render(<BrowserRouter><AddNew {...mockProps} /></BrowserRouter>);
    expect(container).toMatchSnapshot();
  });
  it('should display name ,word and sentence', () => {
    render(<BrowserRouter><AddNew {...mockProps} /></BrowserRouter>);
    screen.getByText('Add a new word');
    screen.getByText('Word');
    screen.getByText('Sentence');
  });
  it('input should render input', () => {
    render(<BrowserRouter><AddNew {...mockProps} /></BrowserRouter>);
    const word = screen.getByTestId('word');
    fireEvent.change(word, { target: { value: 'srishti' } });
    expect(word.value).toBe('srishti');

    const sentence = screen.getByTestId('sentence');
    fireEvent.change(sentence, { target: { value: 'hii srishti' } });
    expect(sentence.value).toBe('hii srishti');
  });
});
