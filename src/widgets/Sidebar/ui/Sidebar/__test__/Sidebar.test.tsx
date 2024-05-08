import { render, screen } from '@testing-library/react';
import { Sidebar } from '../Sidebar';

describe('Sidebar', () => {
    it('Render Button', () => {
        render(<Sidebar />);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
});
