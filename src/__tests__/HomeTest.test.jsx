import { render, screen } from '@testing-library/react';
import Home from '../pages/Home/Home.jsx';

test('renders Home component', () => {
    render(<Home />);
    const linkElement = screen.getByText(/Welcome to MTUCI PLEASE/i);
    expect(linkElement).toBeInTheDocument();
});