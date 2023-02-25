import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react linkssss', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
