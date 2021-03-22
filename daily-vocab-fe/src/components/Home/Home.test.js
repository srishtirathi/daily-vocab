import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import Home from './Home';

describe(Home.name, () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('sanity check', () => {
    expect(1 + 1).toBe(2);
  });
  it('should match snapshot', () => {
    const { container } = render(
      <BrowserRouter>
        {' '}
        <Home />
        {' '}
      </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
  });
  it('should display intro message', () => {
    render(
      <BrowserRouter>
        {' '}
        <Home />
        {' '}
      </BrowserRouter>,
    );
    screen.getByText('Daily Vocab!');
    screen.getByText('Learn a new word everyday');
  });
  test('Should take to All Words on click', () => {
    render(<BrowserRouter><Home /></BrowserRouter>);
    const allWordsLink = screen.getByText('Get Started');
    fireEvent.click(allWordsLink);
    expect(document.location.href).toBe('http://localhost/allwords');
  });
});
