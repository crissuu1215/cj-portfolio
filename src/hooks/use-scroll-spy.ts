'use client';

import { useEffect } from 'react';
import { useGlobal } from '@/contexts/global-context';

export function useScrollSpy(sectionIds: string[]) {
    const { setActiveSection } = useGlobal();

    useEffect(() => {
        const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter(Boolean) as HTMLElement[];
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) => b.intersectionRatio - a.intersectionRatio
                    )[0];
                if (visible) setActiveSection(visible.target.id);
            },
            { rootMargin: '-25% 0px -60%', threshold: [0, 0.2, 0.5] }
        );
        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, [sectionIds, setActiveSection]);
}
