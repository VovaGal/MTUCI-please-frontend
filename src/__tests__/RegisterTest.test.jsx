import { render, screen } from '@testing-library/react';
import Register from '../pages/Home/RegisterComponent.jsx';

test('renders Register component', () => {
    render(<Register />);
    const linkElement = screen.getByText(/Register new account!/i);
    expect(linkElement).toBeInTheDocument();
});