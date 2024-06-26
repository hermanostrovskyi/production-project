import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

describe('Button', () => {
    it('Render Button', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    it('Render button with clear theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
    });
});
