'use client'
import { useState } from 'react'
import { Globe, ChevronDown } from 'lucide-react'

const languages = [
  { code: 'en', label: 'English' },
  { code: 'zh-CN', label: '中文 (简体)' },
]

export default function LanguageToggle() {
  const [open, setOpen] = useState(false)

  const selectLanguage = (code: string) => {
    setOpen(false)
    if (code === 'en') return
    const url = `https://translate.google.com/translate?sl=en&tl=${code}&u=${encodeURIComponent(window.location.href)}`
    window.open(url, '_blank')
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-charcoal/70 hover:text-charcoal transition-colors font-body text-sm"
      >
        <Globe size={15} className="text-mauve" />
        <span className="hidden sm:inline">Translate</span>
        <ChevronDown size={13} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-8 z-50 bg-white rounded-2xl shadow-xl border border-blush/30 py-2 min-w-[170px]">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => selectLanguage(lang.code)}
                className="w-full text-left px-4 py-2.5 font-body text-sm hover:bg-blush/20 transition-colors text-charcoal/70 hover:text-charcoal"
              >
                {lang.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
