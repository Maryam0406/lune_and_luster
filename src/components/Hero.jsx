import { useEffect, useState } from 'react';
import { whatsappLink } from '../config';
import Media from './Media';
import './Hero.css';

const INTERVAL = 6000; // 6 seconds per slide

const slides = [
  { eyebrow: 'Lune & Luster', title: 'Jewellery That Tells Your Story', image: './images/hero-1.webp' },
  { eyebrow: 'Engraved with love', title: 'Words That Last Forever', image: './images/hero-2.jpg' },
  { eyebrow: 'For the ones you love', title: 'Made For Two', image: './images/hero-3.avif' },
  { eyebrow: 'Gifts with meaning', title: 'Wrapped With Love', image: './images/hero-4.avif' },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // The timer restarts after every change so a manual click doesnt causes an instant jump
  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % slides.length), INTERVAL);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <section className="hero" aria-roledescription="carousel">
      {slides.map((s, i) => (
        <Media
          key={i}
          src={s.image}
          alt={s.title}
          tone={i}
          className={`hero-img ${i === index ? 'active' : ''}`}
        />
      ))}
      <div className="hero-shade" />

      <div className="hero-content">
        {/* key={index} replays the text animation on every slide change */}
        <div className="hero-text" key={index}>
          <span className="eyebrow">{slides[index].eyebrow}</span>
          <h1>{slides[index].title}</h1>
          <div className="hero-buttons">
            <a href="#categories" className="hero-btn">Explore Collection</a>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="hero-btn hero-btn-fill">Enquire Now</a>
          </div>
        </div>
      </div>

      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={i === index ? 'on' : ''}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          >
            <i style={{ animationDuration: `${INTERVAL}ms` }} />
          </button>
        ))}
      </div>
    </section>
  );
}