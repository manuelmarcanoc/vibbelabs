import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the hero headline', () => {
  render(<App />);
  const heading = screen.getByText(/productos digitales/i);
  expect(heading).toBeInTheDocument();
});
