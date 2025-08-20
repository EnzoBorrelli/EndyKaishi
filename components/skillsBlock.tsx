import { skills } from "consts/skills";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function SkillsBlock() {
  const blockRefA = useRef<HTMLDivElement>(null);
  const blockRefB = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const skillBlocksA =
        blockRefA.current?.querySelectorAll(".animated-block");
      const skillBlocksB =
        blockRefB.current?.querySelectorAll(".animated-block");

      const tlA = gsap.timeline({ repeat: -1 }); // Infinite loop
      const tlB = gsap.timeline({ repeat: -1 }); // Infinite loop

      tlA
        .fromTo(
          skillBlocksA!,
          { y: 15 },
          { y: 0, duration: 2, stagger: 0.3, ease: "sine.inOut" }
        )
        .to(skillBlocksA!, {
          y: 15,
          duration: 2,
          stagger: 0.3,
          ease: "sine.inOut",
        });
      // Secondary text animation
      tlB
        .fromTo(
          skillBlocksB!,
          { y: 15 },
          { y: 0, duration: 2, stagger: 0.3, ease: "sine.inOut",delay:0.3 }
        )
        .to(skillBlocksB!, {
          y: 15,
          duration: 2,
          stagger: 0.3,
          ease: "sine.inOut",
        });
    });
    return () => ctx.revert(); // Cleanup
  }, []);
  return (
    <div className="grid grid-rows-2 gap-2 px-2 py-4 mt-2 rounded-md bg-gradient-to-tr from-accent-1/70 via-brand-200/80 to-accent-1/70 md:pt-4 md:py-0">
      <div className="flex justify-center gap-4" ref={blockRefA}>
        {skills.slice(0, 4).map((skill, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-1 text-3xl rounded-md size-10 bg-brand-400 animated-block"
          >
            <skill.icon />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4" ref={blockRefB}>
        {skills.slice(4, 8).map((skill, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-1 text-3xl rounded-md size-10 bg-brand-400 animated-block"
          >
            <skill.icon />
          </div>
        ))}
      </div>
    </div>
  );
}
