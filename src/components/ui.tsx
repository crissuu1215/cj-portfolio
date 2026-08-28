import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';

export function SectionHeading({
    eyebrow,
    title,
    copy,
}: {
    eyebrow: string;
    title: string;
    copy?: string;
}) {
    return (
        <div className="section-heading">
            <p className="eyebrow">
                <span aria-hidden="true">{'//'}</span> {eyebrow}
            </p>
            <h2>{title}</h2>
            {copy && <p className="section-copy">{copy}</p>}
        </div>
    );
}

export function GlassCard({
    children,
    className = '',
}: {
    children: ReactNode;
    className?: string;
}) {
    return <div className={`glass-card ${className}`}>{children}</div>;
}

export function ExternalLink({
    children,
    className = '',
    ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode }) {
    return (
        <a
            {...props}
            className={`external-link ${className}`}
            target="_blank"
            rel="noreferrer"
        >
            {children}
            <ArrowUpRight size={16} aria-hidden="true" />
        </a>
    );
}

export function Tag({ children }: { children: ReactNode }) {
    return <span className="tag">{children}</span>;
}
