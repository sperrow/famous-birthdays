import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';

// Mock Next.js router
jest.mock('next/navigation', () => ({
    useRouter() {
        return {
            prefetch: () => null,
            push: jest.fn(),
        };
    },
}));

// Jsdom doesn't implement these so mock them for radix-ui
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});

global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
}));

window.HTMLElement.prototype.hasPointerCapture = jest.fn();
window.HTMLElement.prototype.scrollIntoView = function () {};

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <Theme accentColor="gray">
            <ThemeProvider attribute="class">{children}</ThemeProvider>
        </Theme>
    );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
    render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export * from '@testing-library/user-event';
export { customRender as render };
