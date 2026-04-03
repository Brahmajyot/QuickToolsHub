import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950 mt-auto">
            <div className="container mx-auto py-8 px-4 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                    © {new Date().getFullYear()} Free Online Tools by DevTools. All rights reserved.
                </p>
                <div className="flex gap-4">
                    <Link href="/" className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">
                        Terms
                    </Link>
                    <Link href="/" className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">
                        Privacy
                    </Link>
                </div>
            </div>
        </footer>
    )
}
