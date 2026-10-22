import { useEffect, useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { whatsappLink } from '../config';
import './Navbar.css';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Collections', href: '#categories' },
  { label: 'Make It Yours', href: '#make-it-yours' },
  { label: 'Gifts', href: '#gifts' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} id="home">
      <div className="container nav">
        <button className="menu-btn" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu size={22} />
        </button>

        <a href="#home" className="logo">
          <strong>LUNE &amp; LUSTER</strong>
          <small>Jewellery &amp; Accessories</small>
        </a>

        <ul className="nav-links">
          {links.map((l) => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
        </ul>

        <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn btn-gold nav-cta">
          <MessageCircle size={16} /> Enquire
        </a>
      </div>

      <div className={`overlay ${open ? 'show' : ''}`} onClick={() => setOpen(false)} />
      <aside className={`drawer ${open ? 'open' : ''}`}>
        <button className="close" onClick={() => setOpen(false)} aria-label="Close menu"><X size={22} /></button>
        <nav>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </nav>
      </aside>
    </header>
  );
}