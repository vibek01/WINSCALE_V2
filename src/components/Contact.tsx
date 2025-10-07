// src/components/Contact.tsx

import { Mail, Building2, Send } from 'lucide-react';
import { colors } from '../theme/colors';

export default function Contact() {
  // --- FIX APPLIED HERE ---
  // The focus ring color is now handled by a Tailwind class using your CSS variable.
  // This is the correct way to apply focus styles in a Tailwind project.
  const inputStyle = "w-full px-4 py-3 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition-all";
  
  return (
    <section id="contact" className="py-20 px-4" style={{ backgroundColor: colors.surface }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.text }}>
            Let's Build Together
          </h2>
          <p className="text-xl" style={{ color: colors.muted }}>
            Have a project in mind? We'd love to hear about it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: colors.primary }}>
                Contact Information
              </h3>
              <p className="text-lg" style={{ color: colors.muted }}>
                Fill out the form and our team will get back to you within 24 hours.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(23, 37, 84, 0.1)' }}>
                  <Mail className="w-6 h-6" style={{ color: colors.primary }} />
                </div>
                <div>
                  <h4 className="font-semibold" style={{ color: colors.text }}>Email Us</h4>
                  <a href="mailto:hello@agency.com" className="hover:underline" style={{ color: colors.muted }}>winscaleconsultancy@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(23, 37, 84, 0.1)' }}>
                  <Building2 className="w-6 h-6" style={{ color: colors.primary }} />
                </div>
                <div>
                  <h4 className="font-semibold" style={{ color: colors.text }}>Our Office</h4>
                  <p style={{ color: colors.muted }}>123 Innovation Drive, Tech City</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div 
            className="p-8 rounded-2xl shadow-xl border" 
            style={{ 
              backgroundColor: '#FFFFFF',
              borderColor: '#E5E7EB' 
            }}
          >
            <form
              action="https://formspree.io/f/xwprnvnn"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2" style={{ color: colors.text }}>Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className={inputStyle}
                  // --- FIX APPLIED HERE --- (Removed the invalid style property)
                  style={{ borderColor: '#D1D5DB' }}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: colors.text }}>Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className={inputStyle}
                  // --- FIX APPLIED HERE --- (Removed the invalid style property)
                  style={{ borderColor: '#D1D5DB' }}
                  placeholder="you@company.com"
                />
              </div>
               <div>
                <label htmlFor="company" className="block text-sm font-semibold mb-2" style={{ color: colors.text }}>Company Name (Optional)</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  className={inputStyle}
                  // --- FIX APPLIED HERE --- (Removed the invalid style property)
                  style={{ borderColor: '#D1D5DB' }}
                  placeholder="Your Company Inc."
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{ color: colors.text }}>Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  required 
                  className={inputStyle}
                  // --- FIX APPLIED HERE --- (Removed the invalid style property)
                  style={{ borderColor: '#D1D5DB' }}
                  placeholder="How can we help you succeed?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg text-white transition-all hover:scale-105 hover:shadow-2xl"
                style={{ backgroundColor: colors.accent }}
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}