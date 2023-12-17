import { render, screen } from '@testing-library/react';
import Login from '../pages/Home/LoginComponent.jsx';

test('renders Login component', () => {
    render(<Login />);
    const linkElement = screen.getByText(/Login into account/i);
    expect(linkElement).toBeInTheDocument();
});