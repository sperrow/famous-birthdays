import '@testing-library/jest-dom';
import { render, screen } from '@/utils/test-utils';
import Page from '@/app/page';

describe('Page', () => {
    beforeEach(() => {
        render(<Page />);
    });

    it('renders an About button', () => {
        const button = screen.getByText('About', { selector: 'button' });
        expect(button).toBeInTheDocument();
    });
});
