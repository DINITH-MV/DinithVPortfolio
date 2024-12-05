import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `MainPage`.
 */
export type MainPageProps = SliceComponentProps<Content.MainPageSlice>;

/**
 * Component for "MainPage" Slices.
 */
const MainPage = ({ slice }: MainPageProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for main_page (variation: {slice.variation}) Slices
    </section>
  );
};

export default MainPage;
