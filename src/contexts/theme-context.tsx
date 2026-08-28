'use client';

import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useSyncExternalStore,
    type ReactNode,
} from 'react';

export type Theme = 'dark' | 'light';
type ThemeContextValue = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);
const STORAGE_KEY = 'cj-theme';
const THEME_EVENT = 'cj-theme-change';

function subscribe(callback: () => void) {
    window.addEventListener(THEME_EVENT, callback);
    return () => window.removeEventListener(THEME_EVENT, callback);
}

function getTheme(): Theme {
    return document.documentElement.dataset.theme === 'light'
        ? 'light'
        : 'dark';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
    const theme = useSyncExternalStore<Theme>(
        subscribe,
        getTheme,
        () => 'dark'
    );

    const setTheme = useCallback((next: Theme) => {
        document.documentElement.dataset.theme = next;
        document.documentElement.style.colorScheme = next;
        window.localStorage.setItem(STORAGE_KEY, next);
        window.dispatchEvent(new Event(THEME_EVENT));
    }, []);

    const toggleTheme = useCallback(
        () => setTheme(theme === 'dark' ? 'light' : 'dark'),
        [setTheme, theme]
    );
    const value = useMemo(
        () => ({ theme, setTheme, toggleTheme }),
        [setTheme, theme, toggleTheme]
    );
    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used inside ThemeProvider');
    return context;
}
