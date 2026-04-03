import Link from "next/link"
import { Layers } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900 dark:text-slate-50 transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                        <Layers className="h-6 w-6 text-blue-600 dark:text-blue-500" />
                        <span>QuickToolsHub</span>
                    </Link>
                </div>
                <nav className="flex items-center gap-4">
                    <Link href="/" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50 transition-colors hidden sm:block">
                        Home
                    </Link>
                    <ThemeToggle />
                </nav>
            </div>
        </header>
    )
}
