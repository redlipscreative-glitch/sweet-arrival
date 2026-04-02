'use client'
import { useEffect } from 'react'
import { Globe } from 'lucide-react'

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

export default function GoogleTranslate() {
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'zh-CN,zh-TW,ms,ja,ko,th,id,vi,tl',
          layout: 0,
          autoDisplay: false,
        },
        'google_translate_element'
      )
    }

    const script = document.createElement('script')
    script.src =
      'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="flex items-center gap-1.5">
      <Globe size={15} className="text-mauve shrink-0" />
      <div
        id="google_translate_element"
        className="text-xs font-body [&_.goog-te-gadget-simple]:border-0 [&_.goog-te-gadget-simple]:bg-transparent [&_.goog-te-gadget-simple]:text-charcoal/70 [&_.goog-te-gadget-simple]:text-xs [&_.goog-te-gadget-simple]:p-0 [&_.goog-logo-link]:hidden [&_.goog-te-gadget-simple_span]:text-charcoal/70"
      />
    </div>
  )
}
