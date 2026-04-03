"use client"

import React from "react"

export interface FaqItem {
    question: string;
    answer: string;
}

interface FaqSectionProps {
    items: FaqItem[];
}

export function FaqSection({ items }: FaqSectionProps) {
    return (
        <div className="max-w-3xl mx-auto w-full mt-16 pb-12">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
                {items.map((item, index) => (
                    <div key={index} className="p-6 rounded-2xl bg-white shadow-sm border border-slate-100 dark:bg-slate-900 dark:border-slate-800">
                        <h3 className="text-lg font-semibold mb-2 dark:text-slate-100">{item.question}</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
