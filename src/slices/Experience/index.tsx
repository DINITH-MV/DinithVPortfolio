import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Logo from "@/components/Logo";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { it } from "node:test";

/**
 * Props for `Experience`.
 */
export type ExperienceProps = SliceComponentProps<Content.ExperienceSlice>;

/**
 * Component for "Experience" Slices.
 */
const Experience = ({ slice }: ExperienceProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading as="h2" size="lg">
        {slice.primary.heading}
      </Heading>
      {slice.items.map((item, index) => (
        <div
          key={index}
          className="ml-6 mt-8 flex flex-col md:ml-12 md:mt-16 md:flex-row md:items-start"
        >
          <div className="flex-1 md:pr-8">
            {" "}
            {/* Text Section */}
            <Heading as="h3" size="sm">
              {item.title}
            </Heading>
            <div className="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-slate-400">
              <span>{item.time_period}</span>{" "}
              <span className="text-3xl font-extralight">/</span>{" "}
              <span>{item.institution}</span>
            </div>
            <div className="prose prose-lg prose-invert mt-4 text-justify text-[#8e8e8e]">
              <PrismicRichText field={item.description} />
            </div>
          </div>

          <div className="mt-4 w-full flex-shrink-0 md:ml-8 md:mt-0 md:w-1/3">
            {" "}
            {/* Image Section */}
            <Logo
              image={item.cover_image}
              className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
            />
          </div>
        </div>
      ))}
    </Bounded>
  );
};

export default Experience;
