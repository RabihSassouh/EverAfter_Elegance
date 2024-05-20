import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from './Login';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('Login Component', () => {
  let mockAxios: MockAdapter;

  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
  });

  afterEach(() => {
    mockAxios.reset();
  });

  test('renders login form and handles login correctly', async () => {
    const mockNavigate = jest.fn();
    jest.spyOn(require('react-router-dom'), 'useNavigate').mockImplementation(() => mockNavigate);
  
    mockAxios.onPost('http://127.0.0.1:8080/api/login/').reply(200, {
      token: 'fake-token',
    });
  
    render(
      <Router>
        <Login />
      </Router>
    );
  
    // Simulate user input
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'password123' } });
  
    // Simulate form submission
    fireEvent.click(screen.getByTestId('login-button')); 
  
    // Assert that the axios post request was made with the correct data
    await waitFor(() => {
      expect(mockAxios.history.post.length).toBe(1);
      expect(mockAxios.history.post[0].data).toEqual(
        JSON.stringify({
          email: 'test@example.com',
          password: 'password123',
        })
      );
    });
  
    // Assert that the token is stored in localStorage and navigation happens
    await waitFor(() => {
      expect(window.localStorage.getItem('token')).toBe('fake-token');
      expect(mockNavigate).toHaveBeenCalledWith('/');
    });
  });
  
});
