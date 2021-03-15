/* eslint-disable react/jsx-props-no-spreading */
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import AllWords from './AllWords';

describe(AllWords.name, () => {
  const mockProps = {
    Vocab: [{
      word: 'hi',
      map: jest.fn(),
      sentence: 'hii srishti',
    }],

  };
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('sanity check', () => {
    expect(1 + 1).toBe(2);
  });
  it('should match snapshot', () => {
    const { container } = render(<BrowserRouter><AllWords {...mockProps} /></BrowserRouter>);
    expect(container).toMatchSnapshot();
  });
  it('should display text and render card component', () => {
    render(<BrowserRouter><AllWords {...mockProps} /></BrowserRouter>);
    screen.getByText('Welcome Back');
    screen.getAllByTestId('card');
  });
  test('Should take to Home page on click', () => {
    render(<BrowserRouter><AllWords {...mockProps} /></BrowserRouter>);
    const homeLink = screen.getByText('Go Back');
    fireEvent.click(homeLink);
    expect(document.location.href).toBe('http://localhost/');
  });
  test('Should take to new word page on click', () => {
    render(<BrowserRouter><AllWords {...mockProps} /></BrowserRouter>);
    const newWordLink = screen.getByText('Add New Word');
    fireEvent.click(newWordLink);
    expect(document.location.href).toBe('http://localhost/new-word');
  });
});
