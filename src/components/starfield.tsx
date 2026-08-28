'use client';

import { useEffect, useRef, type CSSProperties } from 'react';

type StarfieldProps = {
    className?: string;
    starCount?: number;
};

type Star = {
    x: number;
    y: number;
    size: number;
    opacity: number;
    delay: number;
    duration: number;
};

function seededRandom(seed: number) {
    const value = Math.sin(seed * 999.91) * 43758.5453;
    return value - Math.floor(value);
}

function createStars(count: number, layer: number): Star[] {
    return Array.from({ length: count }, (_, index) => {
        const seed = layer * 1000 + index * 7;

        return {
            x: seededRandom(seed + 1) * 100,
            y: seededRandom(seed + 2) * 100,
            size: 1 + seededRandom(seed + 3) * (layer + 0.7),
            opacity: 0.28 + seededRandom(seed + 4) * 0.66,
            delay: seededRandom(seed + 5) * -7,
            duration: 3.5 + seededRandom(seed + 6) * 4.5,
        };
    });
}

export function Starfield({ className = '', starCount = 72 }: StarfieldProps) {
    const fieldRef = useRef<HTMLDivElement>(null);
    const frameRef = useRef<number | null>(null);
    const layers = [
        createStars(Math.ceil(starCount * 0.46), 1),
        createStars(Math.ceil(starCount * 0.34), 2),
        createStars(Math.ceil(starCount * 0.2), 3),
        createStars(Math.ceil(starCount * 0.1), 4),
    ];

    useEffect(() => {
        const field = fieldRef.current;
        const surface = field?.parentElement;
        if (!field || !surface) return;
        const starfieldElement = field;

        function updatePointer(event: globalThis.PointerEvent) {
            const { left, top, width, height } =
                surface!.getBoundingClientRect();
            const x = ((event.clientX - left) / width - 0.5) * 2;
            const y = ((event.clientY - top) / height - 0.5) * 2;

            if (frameRef.current) cancelAnimationFrame(frameRef.current);
            frameRef.current = requestAnimationFrame(() => {
                starfieldElement.style.setProperty('--star-x', x.toFixed(3));
                starfieldElement.style.setProperty('--star-y', y.toFixed(3));
            });
        }

        function resetPointer() {
            if (frameRef.current) cancelAnimationFrame(frameRef.current);
            starfieldElement.style.setProperty('--star-x', '0');
            starfieldElement.style.setProperty('--star-y', '0');
        }

        surface.addEventListener('pointermove', updatePointer);
        surface.addEventListener('pointerleave', resetPointer);

        return () => {
            surface.removeEventListener('pointermove', updatePointer);
            surface.removeEventListener('pointerleave', resetPointer);
            if (frameRef.current) cancelAnimationFrame(frameRef.current);
        };
    }, []);

    /*
     * Star values are generated from fixed seeds, so server and client markup
     * remain identical while every layer still gets a natural distribution.
     */
    return (
        <div
            ref={fieldRef}
            className={`starfield ${className}`.trim()}
            aria-hidden="true"
        >
            {layers.map((stars, layerIndex) => (
                <div
                    className="starfield-layer"
                    data-depth={layerIndex + 1}
                    key={layerIndex}
                >
                    {stars.map((star, index) => (
                        <i
                            className="starfield-star"
                            key={index}
                            style={
                                {
                                    '--left': `${star.x}%`,
                                    '--top': `${star.y}%`,
                                    '--size': `${star.size}px`,
                                    '--opacity': star.opacity,
                                    '--delay': `${star.delay}s`,
                                    '--duration': `${star.duration}s`,
                                } as CSSProperties
                            }
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}
