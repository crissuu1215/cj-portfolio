'use client';

import type { ReactNode } from 'react';
import { GlobalProvider } from '@/contexts/global-context';
import { ThemeProvider } from '@/contexts/theme-context';

export function Providers({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider>
            <GlobalProvider>{children}</GlobalProvider>
        </ThemeProvider>
    );
}
