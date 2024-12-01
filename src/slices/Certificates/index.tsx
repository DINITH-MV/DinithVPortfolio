import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { PrismicRichText } from "@prismicio/react";

/**
 * Component for "Certificate" Slices.
 */
const Certificate = (): JSX.Element => {
  // Array holding certificate data
  const certificates = [
    {
      certification_name: "Certified React Developer",
      issuing_organization: "Tech Institute",
      issue_date: "2023-01-01",
      expiration_date: "2026-01-01",
      description: [
        {
          type: "paragraph",
          content: {
            text: "A certificate recognizing proficiency in React.js, awarded by Tech Institute after completing the React Developer course.",
            spans: [],
          },
          direction: "ltr",
        },
      ],
    },
    {
      certification_name: "Advanced JavaScript",
      issuing_organization: "Programming Academy",
      issue_date: "2022-06-01",
      expiration_date: "2025-06-01",
      description: [
        {
          type: "paragraph",
          content: {
            text: "This certificate proves advanced knowledge in JavaScript, including ES6 features, asynchronous programming, and DOM manipulation.",
            spans: [],
          },
          direction: "ltr",
        },
      ],
    },
  ];

  return (
    <Bounded data-slice-type="certificates" data-slice-variation="default">
      <Heading as="h2" size="lg">
        Certificates
      </Heading>
      
      {certificates.map((item, index) => (
        <div key={index} className="ml-6 mt-8 max-w-prose md:ml-12 md:mt-16">
          <Heading as="h3" size="sm">
            {item.certification_name}
          </Heading>

          <div className="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-slate-400">
            <span>{item.issue_date}</span>{" "}
            <span className="text-3xl font-extralight">/</span>{" "}
            <span>{item.issuing_organization}</span>
          </div>
          <div className="prose prose-lg prose-invert mt-4">
          </div>
        </div>
      ))}
    </Bounded>
  );
};

export default Certificate;
