'use client';

import { Github, Mail, Menu, Moon, Sun, X } from 'lucide-react';
import { useGlobal } from '@/contexts/global-context';
import { useTheme } from '@/contexts/theme-context';
import { navigation, site } from '@/lib/site-data';

export function Header() {
    const { activeSection, menuOpen, setMenuOpen } = useGlobal();
    const { theme, toggleTheme } = useTheme();

    const closeMenu = () => setMenuOpen(false);
    return (
        <header className="site-header">
            <div className="header-inner glass-bar">
                <a
                    className="monogram"
                    href="#top"
                    onClick={closeMenu}
                    aria-label="Criss Jericho Geli, back to top"
                >
                    <span>CJ</span>
                    <i />
                </a>
                <nav
                    id="mobile-navigation"
                    className={`nav-links ${menuOpen ? 'is-open' : ''}`}
                    aria-label="Primary navigation"
                >
                    {navigation.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={closeMenu}
                            className={
                                activeSection === item.href.slice(1)
                                    ? 'active'
                                    : ''
                            }
                        >
                            {item.label}
                        </a>
                    ))}
                    <div className="mobile-socials">
                        <a href={site.github} target="_blank" rel="noreferrer">
                            <Github size={17} /> GitHub
                        </a>
                        <a href={`mailto:${site.email}`}>
                            <Mail size={17} /> Email
                        </a>
                    </div>
                </nav>
                <div className="header-actions">
                    <a
                        className="icon-button desktop-action"
                        href={site.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Open GitHub profile"
                    >
                        <Github size={18} />
                    </a>
                    <button
                        className="icon-button"
                        onClick={toggleTheme}
                        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                    >
                        {theme === 'dark' ? (
                            <Sun size={18} />
                        ) : (
                            <Moon size={18} />
                        )}
                    </button>
                    <button
                        className="icon-button menu-button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-navigation"
                        aria-label={
                            menuOpen ? 'Close navigation' : 'Open navigation'
                        }
                    >
                        {menuOpen ? <X size={19} /> : <Menu size={19} />}
                    </button>
                </div>
            </div>
        </header>
    );
}
