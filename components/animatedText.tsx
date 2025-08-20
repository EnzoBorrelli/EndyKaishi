import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const texts = ['Endy Kaishi®', 'by Enzo G. Borrelli'];

export default function AnimatedText() {
  const primaryRef = useRef<HTMLDivElement>(null);
  const secondaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const primaryChars = primaryRef.current?.querySelectorAll('.animated-char');
      const secondaryChars = secondaryRef.current?.querySelectorAll('.animated-char');

      const tl = gsap.timeline({ repeat: -1 }); // Infinite loop

      // Primary text animation
      tl.fromTo(
        primaryChars!,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.3, stagger: 0.1, ease: 'power2.out' }
      )
        .to(primaryChars!, {
          opacity: 0,
          y: 10,
          duration: 0.3,
          stagger: 0.2,
          ease: 'power2.in',
          delay: 2,
        })
        // Secondary text animation
        .fromTo(
          secondaryChars!,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.3, stagger: 0.1, ease: 'power2.out' }
        )
        .to(secondaryChars!, {
          opacity: 0,
          y: 10,
          duration: 0.3,
          stagger: 0.2,
          ease: 'power2.in',
          delay: 2,
        });
    });

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div className="relative w-full h-12 px-2 pointer-events-none select-none">
      <h2 className="sr-only">{texts[0] + ' ' + texts[1]}</h2>
      <div
        ref={primaryRef}
        className="my-2 text-2xl font-bold absolute"
        aria-hidden="true"
      >
        {texts[0].split('').map((char, index) => (
          <span key={index} className="inline-block text-brand-200 animated-char">
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
      <div
        ref={secondaryRef}
        className="my-2 text-2xl font-bold absolute"
        aria-hidden="true"
      >
        {texts[1].split('').map((char, index) => (
          <span key={index} className="inline-block animated-char">
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
    </div>
  );
}
