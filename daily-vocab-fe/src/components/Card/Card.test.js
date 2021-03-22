/* eslint-disable react/jsx-props-no-spreading */
import { render, screen } from '@testing-library/react';
import React from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import Card from './Card';

describe(Card.name, () => {
  const mockProps = {
    vocab: {
      word: 'hi',
      sentence: 'hii srishti',
    },

  };
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('sanity check', () => {
    expect(1 + 1).toBe(2);
  });
  it('should match snapshot', () => {
    const { container } = render(<BrowserRouter><Card {...mockProps} /></BrowserRouter>);
    expect(container).toMatchSnapshot();
  });
  it('should display name ,word and sentence', () => {
    render(<BrowserRouter><Card {...mockProps} /></BrowserRouter>);
    screen.getByText('hi');
    screen.getByText('hii srishti');
  });
});
