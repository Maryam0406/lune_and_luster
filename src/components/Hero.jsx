import { useEffect, useState } from 'react';
import { whatsappLink } from '../config';
import Media from './Media';
import './Hero.css';

const INTERVAL = 6000; // 6 seconds per slide

const slides = [
  { eyebrow: 'Lune & Luster', title: 'Jewellery That Tells Your Story', image: './images/hero-1.jpg' },
  { eyebrow: 'Engraved with love', title: 'Words That Last Forever', image: './images/hero-2.jpg' },
  { eyebrow: 'For the ones you love', title: 'Made For Two', image: './images/hero-3.jpg' },
  { eyebrow: 'Gifts with meaning', title: 'Wrapped With Love', image: './images/hero-4.jpg' },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // The timer restarts after every change so a manual click doesnt causes an instant jump
  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % slides.length), INTERVAL);
    return () => clearInterval(timer);
  }, [index]);