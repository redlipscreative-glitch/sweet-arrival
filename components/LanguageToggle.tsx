'use client'
import { useEffect, useState } from 'react'
import { Globe, ChevronDown } from 'lucide-react'

declare global {
  interface Window {
    googleTranslateElementInit: () => void
    google: {
      translate: {
        TranslateElement: new (config: object, elementId: string) => void
      }
    }
  }
}

const languages = [
  { code: 'en', label: 'English' },
  { code: 'zh-CN', label: '中文 (简体)' },
  { code: 'zh-TW', label: '中文 (繁體)' },
  { code: 'ms', label: 'Bahasa Melayu' },
  { code: 'ja', label: '日本語' },
  { code: 'ko', label: '한국어' },
  { code: 'th', label: 'ภาษาไทย' },
  { code: 'id', label: 'Bahasa Indonesia' },
]

export default function LanguageToggle() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState('English')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // Hidden container for Google Translate to attach to
    if (!document.getElementById('google_translate_element')) {
      const el = document.createElement('div')
      el.id = 'google_translate_element'
      el.style.display = 'none'
      document.body.appendChild(el)
    }

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en', includedLanguages: 'zh-CN,zh-TW,ms,ja,ko,th,id', autoDisplay: false },
        'google_translate_element'
      )
      setReady(true)
    }

    if (!document.querySelector('script[src*="translate.google.com"]')) {
      const script = document.createElement('script')
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      script.async = true
      document.body.appendChild(script)
    } else {
      setReady(true)
    }
  }, [])

  const selectLanguage = (code: string, label: string) => {
    setSelected(label)
    setOpen(false)

    if (code === 'en') {
      // Reset to English
      const iframe = document.querySelector<HTMLIFrameElement>('.goog-te-banner-frame')
      if (iframe) {
        const innerDoc = iframe.contentDocument || iframe.contentWindow?.document
        const restoreBtn = innerDoc?.querySelector<HTMLElement>('.goog-te-banner-restore-button')
        restoreBtn?.click()
      }
      // Remove Google Translate cookie to restore original
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.' + window.location.hostname
      window.location.reload()
      return
    }

    // Trigger translation via cookie + reload
    document.cookie = `googtrans=/en/${code}; path=/`
    document.cookie = `googtrans=/en/${code}; path=/; domain=.${window.location.hostname}`
    window.location.reload()
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-charcoal/70 hover:text-charcoal transition-colors font-body text-sm"
      >
        <Globe size={15} className="text-mauve" />
        <span className="hidden sm:inline max-w-[70px] truncate">{selected}</span>
        <ChevronDown size={13} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          {/* Dropdown */}
          <div className="absolute right-0 top-8 z-50 bg-white rounded-2xl shadow-xl border border-blush/30 py-2 min-w-[170px]">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => selectLanguage(lang.code, lang.label)}
                className={`w-full text-left px-4 py-2.5 font-body text-sm hover:bg-blush/20 transition-colors ${
                  selected === lang.label ? 'text-mauve font-semibold' : 'text-charcoal/70'
                }`}
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
