import '@testing-library/jest-dom';
import { render, screen } from '@/utils/test-utils';
import NavMenu from '@/app/ui/navMenu';

describe('NavMenu', () => {
    beforeEach(async () => {
        render(<NavMenu />);
    });

    it('renders a Today button', () => {
        const button = screen.getByText('Today', { selector: 'button' });
        expect(button).toBeInTheDocument();
    });

    it('renders a Random day button', () => {
        const button = screen.getByText('Random day', { selector: 'button' });
        expect(button).toBeInTheDocument();
    });

    it('renders a Theme changer', () => {
        const button = screen.getByRole('button', { name: 'Dark mode toggle' });
        expect(button).toBeInTheDocument();
    });
});
