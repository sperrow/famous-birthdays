import '@testing-library/jest-dom';
import { render, screen, userEvent } from '@/utils/test-utils';
import DatePicker from '@/app/ui/datePicker';
import { months } from '@/app/lib/definitions';

describe('DatePicker', () => {
    const user = userEvent.setup();

    beforeEach(async () => {
        render(<DatePicker />);
    });

    it('renders a combobox', () => {
        const combobox = screen.getByRole('combobox');

        expect(combobox).toBeInTheDocument();
        expect(combobox).toHaveTextContent('Select a month');
    });

    it('opens a combobox', async () => {
        // Open combobox
        await user.click(screen.getByRole('combobox'));

        // Get listbox and options
        const listbox = screen.getByRole('listbox');
        const options = screen.getAllByRole('option');

        // Assertions
        expect(listbox).toBeInTheDocument();
        expect(options.length).toBe(months.length);
    });

    it('handles a month change', async () => {
        // Open combobox
        await user.click(screen.getByRole('combobox'));

        // Get options
        const options = screen.getAllByRole('option');

        // Select first option
        await user.click(options[0]);

        // Assertions
        const selectedMonth = screen.getByText(/January/i);
        const dayButton = screen.getByText(/Select a day/i);
        expect(selectedMonth).toHaveTextContent(months[0].name);
        expect(dayButton).toBeInTheDocument();
    });

    it('handles a day change', async () => {
        // Open month combobox
        await user.click(screen.getByRole('combobox'));

        // Get options
        const monthOptions = screen.getAllByRole('option');

        // Select first option
        await user.click(monthOptions[0]);

        const dayCombobox = screen.getAllByRole('combobox')[1];

        // Open day combobox
        await user.click(dayCombobox);

        // Get options
        const dayOptions = screen.getAllByRole('option');

        // Select first option
        await user.click(dayOptions[0]);

        // Assertions
        const selectedDay = screen.getByText(/1/i);
        expect(selectedDay).toHaveTextContent('1');
    });
});
