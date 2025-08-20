import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface TemplateProps {
  children: React.ReactNode;
}

export default function Template({ children }: TemplateProps) {
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);
  const layer3Ref = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate background layers
      gsap.fromTo(
        layer1Ref.current,
        { x: '-100vw', y: '100vh', rotate: 45 },
        { x: '100vw', y: '-150vh', rotate: 45, duration: 0.5, ease: 'power2.inOut' }
      );
      gsap.fromTo(
        layer2Ref.current,
        { x: '-100vw', y: '100vh', rotate: 45 },
        { x: '100vw', y: '-150vh', rotate: 45, duration: 0.5, ease: 'power2.inOut', delay: 0.1 }
      );
      gsap.fromTo(
        layer3Ref.current,
        { x: '-100vw', y: '100vh', rotate: 45 },
        { x: '100vw', y: '-150vh', rotate: 45, duration: 0.5, ease: 'power2.inOut', delay: 0.2 }
      );
      // Animate main content
      gsap.fromTo(
        contentRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.7, ease: 'power1.in' }
      );
    });

    return () => ctx.revert(); // Cleanup
  }, []); // Run only on initial mount

  return (
    <div className="relative min-h-screen">
      <div className="absolute w-[100dvw] h-[100dvh] flex z-[-1] overflow-hidden">
        <div
          ref={layer1Ref}
          className="absolute w-[100dvw] h-[100dvh] scale-150 bg-brand-200 background-layer"
        ></div>
        <div
          ref={layer2Ref}
          className="absolute w-[100dvw] h-[100dvh] scale-150 bg-brand-400 background-layer"
        ></div>
        <div
          ref={layer3Ref}
          className="absolute w-[100dvw] h-[100dvh] scale-150 bg-brand-300 background-layer"
        ></div>
      </div>
      <div ref={contentRef} className="relative z-0">
        {children}
      </div>
    </div>
  );
}