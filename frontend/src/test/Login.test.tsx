// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import { screen } from '@testing-library/dom';
// import '@testing-library/jest-dom/extend-expect';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import Login from '../pages/Authentication/Login';
// import { LoginSchema, LoginValues } from '../validationSchemas/LoginSchema'; // Assuming LoginValues is defined in LoginSchema
// import { toast } from 'react-toastify';

// jest.mock('react-toastify', () => ({
//     ...jest.requireActual('react-toastify'),
//     toast: {
//         error: jest.fn(),
//     },
// }));

// jest.mock('../validationSchemas/LoginSchema', () => ({
//     LoginSchema: {
//         validate: jest.fn(),
//     },
// }));

// describe('Login Component', () => {
//     beforeEach(() => {
//         jest.clearAllMocks();
//     });

//     test('renders login form', () => {
//         render(
//             <Router>
//                 <Login/>
//             </Router>
//         );
//         expect(screen.getByLabelText(/email/i) as any).toBeInTheDocument();
//         expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
//         expect(screen.getByText(/login with google/i)).toBeInTheDocument();
//     });

//     test('calls validation on form submission', async () => {
//         (LoginSchema.validate as jest.MockedFunction<typeof LoginSchema.validate>).mockResolvedValueOnce({} as LoginValues);

//         render(
//             <Router>
//                 <Login />
//                 <ToastContainer />
//             </Router>
//         );

//         const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
//         const passwordInput = screen.getByLabelText(/password/i) as HTMLInputElement;
//         const submitButton = screen.getByRole('button', { name: /login/i });

//         fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
//         fireEvent.change(passwordInput, { target: { value: 'password123' } });

//         fireEvent.click(submitButton);

//         expect(LoginSchema.validate).toHaveBeenCalledWith({
//             email: 'test@example.com',
//             password: 'password123'
//         }, { abortEarly: false });

//         expect(toast.error).not.toHaveBeenCalled();
//     });

//     test('shows error toast on validation failure', async () => {
//         const validationError = {
//             errors: ['Invalid email or password'],
//         };
//         (LoginSchema.validate as jest.MockedFunction<typeof LoginSchema.validate>).mockRejectedValueOnce(validationError);

//         render(
//             <Router>
//                 <Login />
//                 <ToastContainer />
//             </Router>
//         );

//         const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
//         const passwordInput = screen.getByLabelText(/password/i) as HTMLInputElement;
//         const submitButton = screen.getByRole('button', { name: /login/i });

//         fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
//         fireEvent.change(passwordInput, { target: { value: 'short' } });

//         fireEvent.click(submitButton);

//         expect(LoginSchema.validate).toHaveBeenCalledWith({
//             email: 'invalid-email',
//             password: 'short'
//         }, { abortEarly: false });

//         expect(toast.error).toHaveBeenCalledWith('Invalid email or password');
//     });

//     test('navigates back when back link is clicked', () => {
//         const { container } = render(
//             <Router>
//                 <Login />
//             </Router>
//         );

//         const goBackLink = container.querySelector('.top-5.left-5') as HTMLElement;
//         fireEvent.click(goBackLink);

//         expect(window.history.state.idx).toBe(-1);
//     });

//     test('navigates to forgot password page when link is clicked', () => {
//         render(
//             <Router>
//                 <Login />
//             </Router>
//         );

//         const forgotPasswordLink = screen.getByText(/forgot password/i) as HTMLElement;
//         fireEvent.click(forgotPasswordLink);

//         expect(window.location.pathname).toBe('/login');
//     });

//     test('navigates to sign up page when sign up link is clicked', () => {
//         render(
//             <Router>
//                 <Login />
//             </Router>
//         );

//         const signUpLink = screen.getByText(/sign up/i) as HTMLElement;
//         fireEvent.click(signUpLink);

//         expect(window.location.pathname).toBe('/sign-up');
//     });
// });
