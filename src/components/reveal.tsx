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
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    element.dataset.visible = 'true';
                    observer.disconnect();
                }
            },
            { threshold: 0.12 }
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
