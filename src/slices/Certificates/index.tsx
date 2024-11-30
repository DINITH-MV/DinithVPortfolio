"use client";

import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import data from "./data.json";

/**
 * Props for `Experience`.
 */
export type ExperienceProps = {
  slice: {
    slice_type: string;
    variation: string;
    primary: {
      heading: string;
    };
    version: string;
  };
};

/**
 * Component for "Experience" Slices.
 */
const Experience = ({ slice }: ExperienceProps): JSX.Element => {
  console.log("Slice Data:", slice);
  console.log("Imported JSON Data:", data);

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* Render the heading */}
      <Heading as="h2" size="lg">
        {slice.primary.heading}
      </Heading>

      {/* Map over the JSON data */}
      {data.DataSlices.map((slice, sliceIndex) => (
        <div key={sliceIndex}>
          <Heading as="h3" size="sm" className="mt-8">
            {slice.primary.heading}
          </Heading>
          {slice.items.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className="ml-6 mt-8 max-w-prose md:ml-12 md:mt-16"
            >
              <Heading as="h3" size="sm">
                {item.title}
              </Heading>

              <div className="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-slate-400">
                <span>{item.time_period}</span>{" "}
                <span className="text-3xl font-extralight">/</span>{" "}
                <span>{item.institution}</span>
              </div>
              <div className="prose prose-lg prose-invert mt-4">
                <PrismicRichText field={item.description} />
              </div>
            </div>
          ))}
        </div>
      ))}
    </Bounded>
  );
};

export default Experience;
