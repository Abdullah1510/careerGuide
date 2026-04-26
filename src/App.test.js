import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders the career guide homepage', () => {
  window.scrollTo = jest.fn();

  render(
    <MemoryRouter
      initialEntries={['/']}
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/Your next career decision/i)).toBeInTheDocument();
});
