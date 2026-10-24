import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import categories from '../data/categories';
import { SITE, whatsappLink } from '../config';
import './Footer.css';

export default function Footer() {
  const [note, setNote] = useState('');

  // Opens WhatsApp with the visitor's message already typed in
  const submit = (e) => {
    e.preventDefault();
    const text = note.trim()
      ? `Hi Lune & Luster! ${note.trim()}`
      : "Hi Lune & Luster! I'd love to know more.";
    window.open(whatsappLink(text), '_blank', 'noopener');
  };

  return (
    <footer className="footer" id="contact">
      <div className="container contact-grid">
        {/* LEFT: headline + WhatsApp box */}
        <div className="contact-left">
          <h2 className="contact-title">
            <span className="script">It&rsquo;s</span> Always <span className="script">Lune &amp; Luster</span>
          </h2>
          <p className="contact-lead">
            Tell us who it&rsquo;s for, and we&rsquo;ll help you design the perfect personalised piece.
          </p>

          <form className="wa-form" onSubmit={submit}>
            <input
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="What are you looking for?"
              aria-label="Your message"
            />
            <button type="submit" className="wa-btn">
              <MessageCircle size={16} /> WhatsApp Us
            </button>
          </form>
          <p className="fine">Your message opens in WhatsApp. We only use it to reply to your enquiry.</p>
        </div>

        {/* RIGHT: links */}
        <div className="contact-right">
          <div>
            <h4>Collections</h4>
            <ul>{categories.map((c) => <li key={c.id}>{c.name}</li>)}</ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={whatsappLink()} target="_blank" rel="noreferrer">WhatsApp</a></li>
              <li><a href={SITE.instagram} target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href={`mailto:${SITE.email}`} className="keep-case">{SITE.email}</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <p className="copy">&copy; {new Date().getFullYear()} {SITE.brand}. All rights reserved.</p>
      </div>
    </footer>
  );
}