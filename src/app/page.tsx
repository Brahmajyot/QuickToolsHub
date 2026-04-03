import { ToolCard } from "@/components/tool-card"
import { Type, Brackets, CaseLower, ListMinus } from "lucide-react"

export default function Home() {
  const tools = [
    {
      title: "Word Counter",
      description: "Count words, characters, sentences, and paragraphs in real-time.",
      href: "/word-counter-online",
      icon: <Type className="w-6 h-6" />
    },
    {
      title: "Case Converter",
      description: "Convert text to UPPERCASE, lowercase, Title Case, and more.",
      href: "/case-converter-online",
      icon: <CaseLower className="w-6 h-6" />
    },
    {
      title: "JSON Formatter",
      description: "Format, beautify, and validate your raw JSON strings easily.",
      href: "/json-formatter-online",
      icon: <Brackets className="w-6 h-6" />
    },
    {
      title: "Remove Duplicate Lines",
      description: "Quickly remove duplicate lines from a text collection.",
      href: "/remove-duplicate-lines",
      icon: <ListMinus className="w-6 h-6" />
    }
  ]

  return (
    <div className="container mx-auto px-4 sm:px-8 py-16 sm:py-24 max-w-5xl">
      <div className="text-center mb-16 space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
          Free Online Tools for <br className="hidden sm:block" />
          <span className="text-blue-600 dark:text-blue-500">Developers & Students</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          A collection of simple, fast, and completely free tools. No login required, no ads. Just get your work done faster.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map((tool) => (
          <ToolCard
            key={tool.title}
            title={tool.title}
            description={tool.description}
            href={tool.href}
            icon={tool.icon}
          />
        ))}
      </div>
    </div>
  )
}
