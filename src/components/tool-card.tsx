import Link from "next/link"
import React from "react"

interface ToolCardProps {
    title: string;
    description: string;
    href: string;
    icon: React.ReactNode;
}

export function ToolCard({ title, description, href, icon }: ToolCardProps) {
    return (
        <Link
            href={href}
            className="group flex flex-col gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 dark:bg-slate-900 dark:border-slate-800"
        >
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center dark:bg-blue-900/30 dark:text-blue-400">
                {icon}
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900 group-hover:text-blue-600 dark:text-slate-100 dark:group-hover:text-blue-400 transition-colors">
                    {title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {description}
                </p>
            </div>
        </Link>
    )
}
