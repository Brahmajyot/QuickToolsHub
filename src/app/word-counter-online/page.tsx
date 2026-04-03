import type { Metadata } from "next";
import WordCounterClient from "./page.client";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Free Word Counter Without Login - Fast Online Text Tool",
    description: "Looking for a free word counter without login? Instantly count words, characters, sentences, and paragraphs online. Fast, secure, and easy to use.",
    keywords: "word counter without login, free online word counter, character counter online, fast word counter, simple text tool",
    alternates: {
        canonical: "/word-counter-online",
    }
};

export default function WordCounterPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebApplication",
                "name": "Free Word Counter Without Login",
                "url": "https://yourwebsite.com/word-counter-online",
                "applicationCategory": "UtilityApplication",
                "operatingSystem": "All",
                "description": "Instantly count words, characters, sentences, and paragraphs online. Completely free, no login required."
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is a Word Counter?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A word counter is a free online tool that helps you count the total number of words, characters, sentences, and paragraphs in your text instantly."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is this tool free?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, our tool is 100% free to use. There are no limits and you don't need to create an account or log in."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is my text secure?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely! All processing is done locally in your browser. We do not store or send your text to any server."
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
            <WordCounterClient />

            <article className="container mx-auto px-4 max-w-4xl py-12 prose prose-slate dark:prose-invert lg:prose-lg">
                <h2 className="text-2xl font-bold tracking-tight mt-8 mb-4">The Best Free Word Counter Without Login</h2>
                <p className="mb-6 leading-relaxed">
                    Welcome to the ultimate <strong>free word counter without login</strong>. Whether you're a student writing an essay, a developer crafting documentation, or a content writer optimizing an article, knowing the exact length of your text is critical. Our online word counter allows you to instantly tally words, characters, sentences, and paragraphs securely in your browser.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-3">What is this tool?</h3>
                <p className="mb-6 leading-relaxed">
                    This fast, client-side application is designed to analyze your text in real time. It goes beyond a simple word count by providing character counts (useful for social media limits) and tracking sentences and paragraphs. Because it operates entirely locally, it is arguably the fastest and most secure <strong>word counter online</strong>.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-3">How to use this tool</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li><strong>Step 1:</strong> Type or paste your document directly into the large text area above.</li>
                    <li><strong>Step 2:</strong> Watch as the statistics update instantaneously. You will see your exact word and character counts.</li>
                    <li><strong>Step 3:</strong> Once you're done, use the "Copy" button to save your text to your clipboard.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-3">Benefits of using our free word counter</h3>
                <p className="mb-6 leading-relaxed">
                    Using our <strong>fast online text tool</strong> comes with incredible advantages:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li><strong>No Registration:</strong> We respect your time. Use our word counter without login.</li>
                    <li><strong>100% Privacy:</strong> Everything runs inside your browser. No data leaves your machine.</li>
                    <li><strong>Lightning Fast:</strong> No server lag. See your text metrics the second you start typing.</li>
                </ul>

                <h2 className="text-2xl font-bold tracking-tight mt-12 mb-4">Common Use Cases</h2>
                <p className="mb-6 leading-relaxed">
                    Different professionals rely on word counting for various reasons:
                </p>
                <ul className="list-disc pl-6 mb-8 space-y-2">
                    <li><strong>Writers & Bloggers:</strong> Ensure posts meet minimum length requirements for SEO.</li>
                    <li><strong>Students:</strong> Verify essay lengths conform to strict academic guidelines.</li>
                    <li><strong>Social Media Managers:</strong> Monitor character counts for platforms with strict length limits.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-3">Explore More Free Tools</h3>
                <p className="mb-6 leading-relaxed">
                    Need more than just a word counter? Be sure to check out our <Link href="/" className="text-blue-600 hover:underline dark:text-blue-400">Homepage</Link> for additional utilities. For example, if you need to quickly format strings, try our <Link href="/case-converter-online" className="text-blue-600 hover:underline dark:text-blue-400">Case Converter</Link> or format backend responses with our <Link href="/json-formatter-online" className="text-blue-600 hover:underline dark:text-blue-400">JSON Formatter</Link>.
                </p>
            </article>
        </>
    );
}
