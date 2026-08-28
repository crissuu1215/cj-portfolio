'use client';

import {
    createContext,
    useContext,
    useMemo,
    useState,
    type ReactNode,
} from 'react';

type GlobalContextValue = {
    activeSection: string;
    setActiveSection: (section: string) => void;
    menuOpen: boolean;
    setMenuOpen: (open: boolean) => void;
};

const GlobalContext = createContext<GlobalContextValue | null>(null);

export function GlobalProvider({ children }: { children: ReactNode }) {
    const [activeSection, setActiveSection] = useState('about');
    const [menuOpen, setMenuOpen] = useState(false);
    const value = useMemo(
        () => ({ activeSection, setActiveSection, menuOpen, setMenuOpen }),
        [activeSection, menuOpen]
    );
    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
}

export function useGlobal() {
    const context = useContext(GlobalContext);
    if (!context)
        throw new Error('useGlobal must be used inside GlobalProvider');
    return context;
}
