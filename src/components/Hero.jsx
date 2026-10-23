import { useEffect, useState } from 'react';
import { whatsappLink } from '../config';
import Media from './Media';
import './Hero.css';

const INTERVAL = 6000; // 6 seconds per slide

const slides = [
  { eyebrow: 'Lune & Luster', title: 'Jewellery That Tells Your Story', image: './images/hero-1.png' },
  { eyebrow: 'Engraved with love', title: 'Words That Last Forever', image: './images/hero-2.png' },
  { eyebrow: 'For the ones you love', title: 'Made For Two', image: './images/hero-3.png' },
  { eyebrow: 'Gifts with meaning', title: 'Wrapped With Love', image: './images/hero-4.png' },
];

export default function Hero() {
  // index = slide on screen, prev = slide that is sliding out to the left
  const [pos, setPos] = useState({ index: 0, prev: null });
  const { index, prev } = pos;

  const goTo = (to) =>
    setPos((p) => (to === p.index ? p : { index: to, prev: p.index }));

  // The timer restarts after every change, so a manual click never causes an instant jump
  useEffect(() => {
    const timer = setInterval(
      () => setPos((p) => ({ index: (p.index + 1) % slides.length, prev: p.index })),
      INTERVAL
    );
    return () => clearInterval(timer);
  }, [index]);

  // active = on screen, leaving = sliding out to the left, waiting = parked off-screen on the right
  const stateOf = (i) => (i === index ? 'active' : i === prev ? 'leaving' : 'waiting');

  return (
    <section className="hero" aria-roledescription="carousel">
      {slides.map((s, i) => (
        <Media key={i} src={s.image} alt={s.title} tone={i} className={`hero-img ${stateOf(i)}`} />
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
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          >
            <i style={{ animationDuration: `${INTERVAL}ms` }} />
          </button>
        ))}
      </div>
    </section>
  );
}