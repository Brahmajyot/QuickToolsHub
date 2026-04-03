"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Copy, Trash } from "lucide-react"
import { FaqSection } from "@/components/faq-section"

export default function WordCounter() {
    const [text, setText] = useState("")

    const words = text.trim() ? text.trim().split(/\s+/).length : 0
    const characters = text.length
    const sentences = text.match(/[^.!?]+[.!?]+/g)?.length || 0
    const paragraphs = text.split(/\n+/).filter((p) => p.trim().length > 0).length

    const handleCopy = () => {
        if (!text) {
            toast.error("Nothing to copy")
            return
        }
        navigator.clipboard.writeText(text)
        toast.success("Text copied to clipboard")
    }

    const handleClear = () => {
        setText("")
        toast.success("Text cleared")
    }

    const faqs = [
        {
            question: "What is a Word Counter?",
            answer: "A word counter is a free online tool that helps you count the total number of words, characters, sentences, and paragraphs in your text instantly."
        },
        {
            question: "Is this tool free?",
            answer: "Yes, our tool is 100% free to use. There are no limits and you don't need to create an account or log in."
        },
        {
            question: "Is my text secure?",
            answer: "Absolutely! All processing is done locally in your browser. We do not store or send your text to any server."
        }
    ]

    return (
        <div className="container mx-auto px-4 max-w-4xl py-12">
            <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold mb-4">Free Word Counter Online</h1>
                <p className="text-slate-600 dark:text-slate-400">Instantly count words, characters, sentences, and paragraphs in your text. Fast, free, and no login required.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                    { label: "Words", value: words },
                    { label: "Characters", value: characters },
                    { label: "Sentences", value: sentences },
                    { label: "Paragraphs", value: paragraphs }
                ].map((stat) => (
                    <div key={stat.label} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 text-center shadow-sm">
                        <div className="text-3xl font-bold text-blue-600 dark:text-blue-500 mb-1">{stat.value}</div>
                        <div className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.label}</div>
                    </div>
                ))}
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm mb-12">
                <div className="flex justify-between items-center mb-4">
                    <label htmlFor="text-input" className="font-medium">Type or paste your text here:</label>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={handleClear}>
                            <Trash className="w-4 h-4 mr-2" />
                            Clear
                        </Button>
                        <Button variant="default" size="sm" onClick={handleCopy}>
                            <Copy className="w-4 h-4 mr-2" />
                            Copy
                        </Button>
                    </div>
                </div>
                <Textarea
                    id="text-input"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Start typing or paste your document..."
                    className="min-h-[300px] text-base resize-y"
                />
            </div>

            <FaqSection items={faqs} />
        </div>
    )
}
