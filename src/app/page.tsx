import { Portfolio } from '@/components/portfolio';
import { site } from '@/lib/site-data';

export default function Home() {
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: site.name,
        jobTitle:
            'Full-Stack Software Engineer and AI/LLM Applications Developer',
        email: `mailto:${site.email}`,
        url: site.github,
        sameAs: [site.github],
        address: { '@type': 'PostalAddress', addressCountry: 'PH' },
    };
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />
            <Portfolio />
        </>
    );
}
