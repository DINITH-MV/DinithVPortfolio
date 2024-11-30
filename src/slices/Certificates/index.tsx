import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

const Certificates = (): JSX.Element => {

  const slice_type = "Certificates";
  const heading = "Certificates";
  const variation = "default";

  const title = "Generative AI Language Modeling with Transformers";
  const time_period = "2021 - 2022";
  const institution = "Coursera";
  const description = [
    {
      type: "paragraph",
      text: "Pursued a Master's degree in Human-Computer Interaction, specializing in designing user-friendly interfaces and conducting user research. Gained expertise in creating seamless digital experiences that prioritize user needs and preferences.",
      spans: [],
      direction: "ltr",
    },
  ];

  return (
    <Bounded data-slice-variation={variation}>
      <Heading as="h2" size="lg">
        {heading}
      </Heading>

      <div className="ml-6 mt-8 max-w-prose md:ml-12 md:mt-16">
        <Heading as="h3" size="sm">
          {title}
        </Heading>

        <div className="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-slate-400">
          <span>{time_period}</span>{" "}
          <span className="text-3xl font-extralight">/</span>{" "}
          <span>{institution}</span>
        </div>
        <div className="prose prose-lg prose-invert mt-4">
          <PrismicRichText field={description} />
        </div>
      </div>
    </Bounded>
  );
};

export default Certificates;
