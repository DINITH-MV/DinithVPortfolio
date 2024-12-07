"use client";
import { useEffect, useRef } from "react";
import { Content, KeyTextField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Shapes } from "@/slices/Hero/Shapes";
import Bounded from "@/components/Bounded";
import gsap from "gsap";
import Bounded1 from "@/components/Bounded1";
import clsx from "clsx";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // create as many GSAP animations and/or ScrollTriggers here as you want...
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
            duration: 1,
            transformOrigin: "left top",
            stagger: { each: 0.1, from: "random" },
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
    return () => ctx.revert(); // cleanup!
  }, []);

  const renderLetters = (name: KeyTextField, key: string) => {
    if (!name) return;
    return name.split("").map((letter, index) => (
      <span
        key={index}
        className={`name-animation name-animation-${key}-index inline-block opacity-0 `}
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
        <div className="col-start-1 md:row-start-1 " data-speed=".2">
          <h1
            className="-mt-[80px] ml-[40px] text-[clamp(3rem,16vmin,20rem)] font-extrabold leading-none tracking-tighter"
            aria-label={
              slice.primary.first_name + " " + slice.primary.last_name
            }
          >
            <span className="block text-[#76c952]">
              {renderLetters(slice.primary.first_name, "first")}
            </span>
            <span className="-mt-[.2em] block text-[#4d942f]">
              {renderLetters(slice.primary.last_name, "last")}
            </span>
          </h1>
            <div className="job-title ml-[40px] block bg-gradient-to-tr from-[#e68906] via-[#eac28a] to-[#e68906] bg-clip-text  text-right font-bold uppercase tracking-[.2em] text-transparent opacity-0 md:text-4xl">
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
