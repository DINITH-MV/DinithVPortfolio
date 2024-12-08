"use client";
import { useEffect, useRef, useState } from "react";
import { Content, KeyTextField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Shapes } from "@/slices/Hero/Shapes";
import Bounded1 from "@/components/Bounded1";
import gsap from "gsap";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const component = useRef(null);
  const [soundEffect, setSoundEffect] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Ensure the code only runs on the client side
    if (typeof window !== "undefined") {
      setSoundEffect(new Audio("/sounds/letterKeyboard7.mp3")); // Initialize sound effect
    }
  }, []);

  useEffect(() => {
    if (!soundEffect) return;

    let ctx = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(
          ".name-animation",
          { x: -100, opacity: 0, rotate: -10 },
          {
            x: 0,
            opacity: 1,
            rotate: 0,
            ease: "elastic.out(1,0.3)",
            duration: 2,
            transformOrigin: "right top",
            stagger: {
              each: 0.1,
              from: "random",
              onStart: () => {
                // Safely play the sound effect if available
                if (soundEffect) {
                  soundEffect.currentTime = 0; // Reset sound
                    soundEffect.play().catch((err: DOMException) => {
                    console.error("Error playing sound effect:", err);
                    });
                }
              },
            },
          },
        )
        .fromTo(
          ".job-title",
          {
            y: 20,
            opacity: 0,
            scale: 1.2,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scale: 1,
            ease: "elastic.out(1,0.3)",
          },
        );
    }, component);

    return () => ctx.revert(); // Cleanup GSAP context
  }, [soundEffect]); // Re-run when soundEffect is ready

  const renderLetters = (name: KeyTextField, key: string) => {
    if (!name) return;
    return name.split("").map((letter, index) => (
      <span
        key={index}
        className={`name-animation name-animation-${key}-${index} inline-block opacity-0`}
      >
        {letter}
      </span>
    ));
  };

  return (
    <Bounded1
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      ref={component}
    >
      <div className="grid min-h-[60vh] grid-cols-1 items-center md:grid-cols-2">
        <Shapes />
        <div className="col-start-1 md:row-start-1" data-speed=".2">
          <h1
            className="-mt-[110px] ml-[40px] text-[clamp(3rem,16vmin,20rem)] font-extrabold leading-none tracking-tighter"
            aria-label={
              slice.primary.first_name + " " + slice.primary.last_name
            }
          >
            <span className="block text-[#76c952]">
              {renderLetters(slice.primary.first_name, "first")}
            </span>
            <span className="-mt-[.2em] block text-[#599f3b]">
              {renderLetters(slice.primary.last_name, "last")}
            </span>
          </h1>
          <div className="job-title mt-[20px] ml-[40px] block bg-gradient-to-br from-[#e68906] via-[#eac28a] to-[#e68906] bg-clip-text text-right text-2xl font-bold uppercase tracking-[.2em] text-transparent opacity-0 md:text-4xl">
            {slice.primary.tag_line_1} {slice.primary.tag_line_2}
          </div>
          <div className="job-title mt-[5px] block bg-gradient-to-tr from-[#e68906] to-[#eac28a] bg-clip-text text-right text-2xl font-bold uppercase tracking-[.2em] text-transparent opacity-0 md:text-4xl">
            {slice.primary.tag_line_more}
          </div>
        </div>
      </div>
    </Bounded1>
  );
};

export default Hero;
