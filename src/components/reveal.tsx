'use client';

import { useEffect, useRef, type ReactNode } from 'react';

export function Reveal({
    children,
    delay = 0,
    className = '',
}: {
    children: ReactNode;
    delay?: number;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // Content is visible by default. Only prepare the hidden animation
        // state after JavaScript and IntersectionObserver are available.
        if (!('IntersectionObserver' in window)) return;

        element.dataset.revealReady = 'true';

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    element.dataset.visible = 'true';
                    observer.disconnect();
                }
            },
            {
                threshold: 0.4,
                rootMargin: '0px 0px -40px 0px',
            }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, []);
    return (
        <div
            ref={ref}
            className={`reveal ${className}`}
            style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
        >
            {children}
        </div>
    );
}
