"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Copy, Trash, Braces } from "lucide-react"
import { FaqSection } from "@/components/faq-section"

export default function JsonFormatterClient() {
    const [text, setText] = useState("")

    const handleCopy = () => {
        if (!text) {
            toast.error("Nothing to copy")
            return
        }
        navigator.clipboard.writeText(text)
        toast.success("JSON copied to clipboard")
    }

    const handleClear = () => {
        setText("")
        toast.success("Text cleared")
    }

    const handleFormat = () => {
        if (!text.trim()) return;
        try {
            const parsed = JSON.parse(text)
            setText(JSON.stringify(parsed, null, 2))
            toast.success("JSON formatted successfully")
        } catch (e) {
            toast.error("Invalid JSON string")
        }
    }

    const handleMinify = () => {
        if (!text.trim()) return;
        try {
            const parsed = JSON.parse(text)
            setText(JSON.stringify(parsed))
            toast.success("JSON minified successfully")
        } catch (e) {
            toast.error("Invalid JSON string")
        }
    }

    const faqs = [
        {
            question: "What is a JSON Formatter?",
            answer: "A JSON Formatter (or beautifier) is a tool that takes raw, minified, or disorganized JSON data and formats it with proper indentation, making it easier for humans to read and understand."
        },
        {
            question: "How do I format JSON?",
            answer: "Simply paste your raw JSON string into the input area and click 'Format JSON'. If your JSON is valid, it will be instantly prettified."
        },
        {
            question: "Is my JSON data safe?",
            answer: "Yes, all parsing and formatting operations are performed locally in your browser. We do not store or send your data anywhere."
        }
    ]

    return (
        <div className="container mx-auto px-4 max-w-4xl py-12">
            <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold mb-4">Free JSON Formatter Online</h1>
                <p className="text-slate-600 dark:text-slate-400">Beautify and stringify your JSON safely and instantly in your browser.</p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 sm:p-6 shadow-sm mb-12">
                <div className="flex flex-wrap gap-2 mb-4">
                    <Button variant="default" size="sm" onClick={handleFormat}>
                        <Braces className="w-4 h-4 mr-2" />
                        Format JSON
                    </Button>
                    <Button variant="secondary" size="sm" onClick={handleMinify}>
                        Minify JSON
                    </Button>
                </div>

                <Textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder='{"example": "Paste your JSON here"}'
                    className="min-h-[400px] font-mono text-sm resize-y mb-4"
                />

                <div className="flex justify-end items-center">
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={handleClear}>
                            <Trash className="w-4 h-4 mr-2" />
                            Clear
                        </Button>
                        <Button variant="secondary" size="sm" onClick={handleCopy}>
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
