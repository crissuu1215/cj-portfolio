import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { Providers } from '@/components/providers';
import { useGlobal } from '@/contexts/global-context';
import { useTheme } from '@/contexts/theme-context';

function Consumer() {
    const { theme, toggleTheme } = useTheme();
    const { menuOpen, setMenuOpen } = useGlobal();
    return (
        <>
            <output>{theme}</output>
            <button onClick={toggleTheme}>toggle theme</button>
            <span>{menuOpen ? 'open' : 'closed'}</span>
            <button onClick={() => setMenuOpen(true)}>open menu</button>
        </>
    );
}

describe('application providers', () => {
    beforeEach(() => {
        localStorage.clear();
        document.documentElement.dataset.theme = 'dark';
    });

    it('defaults to dark and persists an explicit theme change', () => {
        render(
            <Providers>
                <Consumer />
            </Providers>
        );
        expect(screen.getByText('dark')).toBeInTheDocument();
        fireEvent.click(screen.getByText('toggle theme'));
        expect(screen.getByText('light')).toBeInTheDocument();
        expect(document.documentElement.dataset.theme).toBe('light');
        expect(localStorage.getItem('cj-theme')).toBe('light');
    });

    it('shares global UI state below the theme provider', () => {
        render(
            <Providers>
                <Consumer />
            </Providers>
        );
        fireEvent.click(screen.getByText('open menu'));
        expect(screen.getByText('open')).toBeInTheDocument();
    });
});
