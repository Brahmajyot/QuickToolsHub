import type { Metadata } from "next";
import CaseConverterClient from "./page.client";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Uppercase to Lowercase Converter Online Free - Text Case Tool",
    description: "Easily use our uppercase to lowercase converter online free. Change your text to Title Case, Sentence case, and upper case instantly. Fast and secure.",
    keywords: "uppercase to lowercase converter online free, convert uppercase to lowercase, title case converter, sentence case converter, free online text tool",
    alternates: {
        canonical: "/case-converter-online",
    }
};

export default function CaseConverterPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebApplication",
                "name": "Uppercase to Lowercase Converter Online Free",
                "url": "https://yourwebsite.com/case-converter-online",
                "applicationCategory": "UtilityApplication",
                "operatingSystem": "All",
                "description": "Convert text between UPPERCASE, lowercase, Title Case, and Sentence case instantly for free."
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is a Case Converter?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A case converter is a tool that changes the capitalization of your text. You can easily switch between UPPERCASE, lowercase, Title Case, and Sentence case."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is this tool free?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, our tool is completely free. No login or registration is required to use the Case Converter."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does it preserve my formatting?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, only the capitalization of the letters changes. Everything else like links, spaces, and special characters remains exactly the same."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <CaseConverterClient />

            <article className="container mx-auto px-4 max-w-4xl py-12 prose prose-slate dark:prose-invert lg:prose-lg">
                <h2 className="text-2xl font-bold tracking-tight mt-8 mb-4">The Ultimate Uppercase to Lowercase Converter Online Free</h2>
                <p className="mb-6 leading-relaxed">
                    Welcome to the fastest and most reliable <strong>uppercase to lowercase converter online free</strong> of charge. Have you ever typed an entire paragraph only to realize CAPS LOCK was accidentally on? Instead of deleting everything and rewriting, our online tool allows you to flip the capitalization of your text with a simple click. From UPPERCASE to lowercase and even Title Case, this tool saves you immense amounts of time and frustration.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-3">What is this text case tool?</h3>
                <p className="mb-6 leading-relaxed">
                    This case converter is a web-based text-formatting utility designed to instantly format any unformatted string into your preferred casing style. Whether you need standard <em>Sentence case.</em> for a blog post or <em>Title Case</em> for your newsletter headings, this tool automatically parses the text without requiring any complicated software installations.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-3">How to use this tool</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li><strong>Step 1:</strong> Select and copy the text you want to modify.</li>
                    <li><strong>Step 2:</strong> Paste it into our large, flexible text input unformatted screen above.</li>
                    <li><strong>Step 3:</strong> Click on your preferred output format: <em>Sentence case</em>, <em>lowercase</em>, <em>UPPERCASE</em>, or <em>Title Case</em>.</li>
                    <li><strong>Step 4:</strong> Click the "Copy" button to save it back to your clipboard instantly!</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-3">Benefits of our text converter</h3>
                <p className="mb-6 leading-relaxed">
                    The primary benefit is absolute convenience completely <strong>without login</strong> required. It's incredibly light-weight and performs all modifications directly in your browser, enabling near-instantaneous output speeds. Since data does not go to a server, absolute confidentiality is guaranteed.
                </p>

                <h2 className="text-2xl font-bold tracking-tight mt-12 mb-4">Common Use Cases</h2>
                <p className="mb-6 leading-relaxed">
                    Who relies on this utility every day?
                </p>
                <ul className="list-disc pl-6 mb-8 space-y-2">
                    <li><strong>Developers & DB Admins:</strong> Quickly converting database columns or SQL statements.</li>
                    <li><strong>Students & Academics:</strong> Properly formatting dissertation subtitles and bibliography entries using Title Case.</li>
                    <li><strong>Office Clerks & Writers:</strong> Quickly recovering from "accidental caps-lock syndrome" saving hours of re-typing.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-3">Explore More Free Tools</h3>
                <p className="mb-6 leading-relaxed">
                    Be sure to check out our <Link href="/" className="text-blue-600 hover:underline dark:text-blue-400">Homepage</Link> for additional utilities natively built for you. Analyze the length of your newly formatted paragraphs using our <Link href="/word-counter-online" className="text-blue-600 hover:underline dark:text-blue-400">Word Counter</Link>, or eliminate duplicate lists with our <Link href="/remove-duplicate-lines" className="text-blue-600 hover:underline dark:text-blue-400">Remove Duplicate Lines</Link> utility!
                </p>
            </article>
        </>
    );
}
