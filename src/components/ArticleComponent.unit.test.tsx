import React from 'react';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import ArticleComponent from './ArticleComponent';

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
  useLocation: () => ({
    pathname: '/',
  }),
}));

describe('ArticleComponent', () => {
  test('show article title and tags are correctly', () => {
    const { getAllByTestId } = render(<ArticleComponent />);
    expect(screen.getByText(/The latest/i)).toBeInTheDocument();
    const cards = getAllByTestId('card-component');
    expect(cards.length).toBe(6);

  });
  test('show more article button correctly and when click it should increase by 3', () => {
    const { getAllByTestId } = render(<ArticleComponent />);
    fireEvent.click(screen.getByText('More articles'));
    const cards = getAllByTestId('card-component');
    expect(cards.length).toBe(9);
  });
  test('show 3 cards in mobile device', () => {
    global.innerWidth = 768;
    const { getAllByTestId } = render(<ArticleComponent />);
    const cards = getAllByTestId('card-component');
    expect(cards.length).toBe(3);
  })
});
