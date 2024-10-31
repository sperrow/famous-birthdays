import '@testing-library/jest-dom';
import { render, screen } from '@/utils/test-utils';
import Header from '@/app/ui/header';

describe('Header', () => {
    it('renders images', () => {
        render(<Header />);

        const images = screen.getAllByRole('img');

        expect(images.length).toBe(2);
    });

    it('renders h1', () => {
        render(<Header />);

        const header = screen.getByRole('heading', { level: 1 });

        expect(header).toBeInTheDocument();
    });

    it('renders link if month and day are passed', () => {
        render(<Header month="january" day="1" />);

        const link = screen.getByRole('link');

        expect(link).toBeInTheDocument();
    });
});
