"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Copy, Trash, ListMinus } from "lucide-react"
import { FaqSection } from "@/components/faq-section"

export default function RemoveDuplicateLinesClient() {
    const [text, setText] = useState("")

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

    const handleRemoveDuplicates = () => {
        if (!text) return;

        const lines = text.split(/\r?\n/);
        const originalCount = lines.length;

        // Using Set to remove duplicates
        const uniqueLines = Array.from(new Set(lines));
        const newText = uniqueLines.join("\n");

        const removedCount = originalCount - uniqueLines.length;

        setText(newText)

        if (removedCount > 0) {
            toast.success(`Removed ${removedCount} duplicate line(s)`)
        } else {
            toast.info("No duplicate lines found")
        }
    }

    const faqs = [
        {
            question: "How does the duplicate line remover work?",
            answer: "The tool splits your text into individual lines and compares them. It keeps the first occurrence of each unique line and automatically removes any subsequent identical lines."
        },
        {
            question: "Are empty lines removed?",
            answer: "Empty lines are treated just like any other line. If there are multiple empty lines, only the first one will be kept, and the rest will be removed."
        },
        {
            question: "Is this tool completely free?",
            answer: "Yes, this tool is 100% free with no limits on usage. You do not need to register or log in to use it."
        }
    ]

    return (
        <div className="container mx-auto px-4 max-w-4xl py-12">
            <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold mb-4">Free Remove Duplicate Lines</h1>
                <p className="text-slate-600 dark:text-slate-400">Instantly clean up your text combinations and lists by removing all duplicate lines.</p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 sm:p-6 shadow-sm mb-12">
                <div className="flex mb-4">
                    <Button variant="default" onClick={handleRemoveDuplicates}>
                        <ListMinus className="w-4 h-4 mr-2" />
                        Remove Duplicates
                    </Button>
                </div>

                <Textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Paste your list or text here..."
                    className="min-h-[300px] text-base resize-y mb-4 leading-relaxed"
                />

                <div className="flex justify-between items-center">
                    <div className="text-sm text-slate-500 whitespace-nowrap">
                        {text ? text.split(/\r?\n/).length : 0} lines
                    </div>
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
            </div>

            <FaqSection items={faqs} />
        </div>
    )
}
