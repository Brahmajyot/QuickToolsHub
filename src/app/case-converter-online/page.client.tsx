"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Copy, Trash } from "lucide-react"
import { FaqSection } from "@/components/faq-section"

export default function CaseConverterClient() {
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

    const toUppercase = () => setText(text.toUpperCase())
    const toLowercase = () => setText(text.toLowerCase())
    const toTitleCase = () => {
        setText(
            text.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())
        )
    }
    const toSentenceCase = () => {
        setText(
            text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (char) => char.toUpperCase())
        )
    }

    const faqs = [
        {
            question: "What is a Case Converter?",
            answer: "A case converter is a tool that changes the capitalization of your text. You can easily switch between UPPERCASE, lowercase, Title Case, and Sentence case."
        },
        {
            question: "Is this tool free?",
            answer: "Yes, our tool is completely free. No login or registration is required to use the Case Converter."
        },
        {
            question: "Does it preserve my formatting?",
            answer: "Yes, only the capitalization of the letters changes. Everything else like links, spaces, and special characters remains exactly the same."
        }
    ]

    return (
        <div className="container mx-auto px-4 max-w-4xl py-12">
            <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold mb-4">Free Case Converter Online</h1>
                <p className="text-slate-600 dark:text-slate-400">Convert your text to UPPERCASE, lowercase, Title Case, or Sentence case instantly.</p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 sm:p-6 shadow-sm mb-12">
                <div className="flex flex-wrap gap-2 mb-4">
                    <Button variant="secondary" size="sm" onClick={toSentenceCase}>Sentence case</Button>
                    <Button variant="secondary" size="sm" onClick={toLowercase}>lowercase</Button>
                    <Button variant="secondary" size="sm" onClick={toUppercase}>UPPERCASE</Button>
                    <Button variant="secondary" size="sm" onClick={toTitleCase}>Title Case</Button>
                </div>

                <Textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Type or paste your text here to convert..."
                    className="min-h-[300px] text-base resize-y mb-4"
                />

                <div className="flex justify-between items-center">
                    <div className="text-sm text-slate-500 whitespace-nowrap">
                        {text.length} characters
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
