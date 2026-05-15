'use client'
import { useState } from 'react'

export default function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    session: '',
    date: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Hi Sweet Arrival! I'd like to book a session.

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Session Type: ${form.session}
Preferred Date: ${form.date}
Message: ${form.message}`

    window.open(`https://wa.me/601160979138?text=${encodeURIComponent(text)}`, '_blank')
  }

  const inputClass = "w-full px-4 py-3 rounded-2xl border border-blush/40 bg-white font-body text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-mauve transition-colors"

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        type="text"
        placeholder="Your Name *"
        required
        value={form.name}
        onChange={handleChange}
        className={inputClass}
      />
      <input
        name="phone"
        type="tel"
        placeholder="Phone / WhatsApp Number *"
        required
        value={form.phone}
        onChange={handleChange}
        className={inputClass}
      />
      <input
        name="email"
        type="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
        className={inputClass}
      />
      <select
        name="session"
        required
        value={form.session}
        onChange={handleChange}
        className={`${inputClass} ${!form.session ? 'text-charcoal/30' : 'text-charcoal'}`}
      >
        <option value="" disabled>Session Type *</option>
        <option value="Maternity (Indoor)">Maternity — Indoor (RM 499)</option>
        <option value="Maternity (Outdoor)">Maternity — Outdoor (RM 599)</option>
        <option value="Newborn Standard (Studio)">Newborn Standard — Studio (RM 688)</option>
        <option value="Newborn Standard (On-Site)">Newborn Standard — On-Site (RM 888)</option>
        <option value="Newborn Premium (Studio)">Newborn Premium — Studio (RM 1,200)</option>
        <option value="Newborn Premium (On-Site)">Newborn Premium — On-Site (RM 1,400)</option>
      </select>
      <input
        name="date"
        type="date"
        value={form.date}
        onChange={handleChange}
        className={inputClass}
      />
      <textarea
        name="message"
        placeholder="Any questions or special requests?"
        rows={4}
        value={form.message}
        onChange={handleChange}
        className={`${inputClass} resize-none`}
      />
      <button
        type="submit"
        className="w-full bg-mauve text-white py-4 rounded-2xl font-body text-sm hover:bg-charcoal transition-colors"
      >
        Send via WhatsApp
      </button>
      <p className="text-xs font-body text-charcoal/40 text-center">
        Clicking submit will open WhatsApp with your details pre-filled.
      </p>
    </form>
  )
}
