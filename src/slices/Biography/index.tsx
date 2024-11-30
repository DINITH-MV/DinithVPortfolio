import Avatar from "@/components/Avatar";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import image1 from "../../../public/profile.jpg";
import { Content } from "@prismicio/client";

import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { RichTextField } from "@prismicio/types";

/**
 * Props for `Biography`.
 */
export type BiographyProps = SliceComponentProps<Content.BiographySlice>;

/**
 * Component for "Biography" Slices.
 */
const Biography = ({ slice }: BiographyProps): JSX.Element => {
  console.log("body:", slice.primary.body);

  const avatar = {
    dimensions: {
      width: 743,
      height: 743,
    },
    alt: "Portrait of Andy wearing a cool jacket outdoors",
    copyright: null,
    url: "https://i.ibb.co/cb7CYSW/20240630-085330.jpg",
    id: "ZWuBR1MawoRaJaF_",
    edit: {
      x: 0,
      y: 0,
      zoom: 0,
      background: "transparent",
    },
  };
  const heading = "About Me";
  const body = [
    {
      type: "paragraph",
      text: "Hey, I’m Dinith! My journey as a developer has been fueled by the desire to create impactful solutions that blend innovation and practicality. From hotel reservations to real-time AI systems, every project has shaped my skills and vision.",
      spans: [],  // No text spans for styling like bold or italic
      direction: "ltr"  // Text direction left-to-right
    },
    {
      type: "paragraph",
      text: "It all began with Reserva360, a hotel reservation system I built in early 2023. Later that year, I channeled my love for vehicles into creating AutoDrive, a vehicle service station management system. By early 2024, I was juggling multiple projects, including an Android game called LostHeart and a reservation system named CeylonVibes.",
      spans: [],
      direction: "ltr"
    },
    {
      type: "paragraph",
      text: "Right now, I’m fully engaged in three exciting projects: LearnLoop, an AI-driven code analysis and learning platform; ECO360, an organic accessory store promoting sustainable living; and a Real-time Garbage Management System, which aims to enhance urban cleanliness through cutting-edge technology.",
      spans: [],
      direction: "ltr"
    },
    {
      type: "paragraph",
      text: "Join me as I continue to innovate and push boundaries in the tech world!",
      spans: [],
      direction: "ltr"
    }
  ];
  

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
        <Heading size="xl" className="col-start-1">
          {heading}
        </Heading>

        <div className="prose prose-xl prose-slate prose-invert col-start-1 text-[#8e8e8e] text-justify">
          <PrismicRichText field={body} />
        </div>
        <Button
          linkField={slice.primary.button_link}
          label={slice.primary.button_text}
        />

        <Avatar
          image={avatar}
          className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
        />
      </div>
    </Bounded>
  );
};

export default Biography;
