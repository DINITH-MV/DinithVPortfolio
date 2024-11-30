import React from "react";
import { createClient } from "@/prismicio";

import NavBar from "@/components/NavBar";
import { SettingsDocument } from "../../prismicio-types";

export default async function Header() {
  const settings: SettingsDocument = {
    first_publication_date: "2023-01-01T00:00:00+00:00" as `${number}-${number}-${number}T${number}:${number}:${number}+${number}`,
    last_publication_date: "2023-01-01T00:00:00+00:00" as `${number}-${number}-${number}T${number}:${number}:${number}+${number}`,
    id: "1",
    uid: null,
    url: "/settings",
    type: "settings",
    href: "https://example.com/settings",
    tags: [],
    slugs: ["settings"],
    linked_documents: [],
    lang: "en-us",
    alternate_languages: [],
    data: {
      name: "Dinith Vanderlan",
      nav_item: [        
        {
          link: {
            id: "about-id",
            uid: "about",
            type: "page",
            url: "/about",
            tags: [],
            lang: "en-us",
            slug: "about",
            link_type: "Document",
            isBroken: false,
          },
          label: "About",
        },
        {
          link: {
            id: "project-id",
            uid: "project",
            type: "page",
            url: "/projects",
            tags: [],
            lang: "en-us",
            slug: "project",
            link_type: "Document",
            isBroken: false,
          },
          label: "Projects",
        },
        {
          link: {
            id: "blog-id",
            uid: "blog",
            type: "page",
            url: "/blog",
            tags: [],
            lang: "en-us",
            slug: "blog",
            link_type: "Document",
            isBroken: false,
          },
          label: "Blog",
        },
      ],
      cta_link: {
        id: "cta-id",
        uid: "get-started",
        type: "page",
        url: "/about",
        tags: [],
        lang: "en-us",
        slug: "get-started",
        link_type: "Document",
        isBroken: false,
      },
      cta_label: "Get Started",
      twitter_link: {
        id: "twitter-id",
        uid: "twitter",
        type: "external",
        url: "https://twitter.com/example",
        tags: [],
        lang: "en-us",
        slug: "twitter",
        link_type: "Document",
        isBroken: false,
      },
      github_link: {
        id: "github-id",
        uid: "github",
        type: "external",
        url: "https://github.com/example",
        tags: [],
        lang: "en-us",
        slug: "github",
        link_type: "Document",
        isBroken: false,
      },
      linkedin_link: {
        id: "linkedin-id",
        uid: "linkedin",
        type: "external",
        url: "https://linkedin.com/in/example",
        tags: [],
        lang: "en-us",
        slug: "linkedin",
        link_type: "Document",
        isBroken: false,
      },
      meta_title: "Example Meta Title",
      meta_description: "Example Meta Description",
      og_image: {
        id: "og-image-id",
        url: "https://example.com/og-image.jpg", // Path to your Open Graph image
        dimensions: { width: 1200, height: 630 }, // Typical Open Graph image dimensions
        alt: "An example Open Graph image", // Alternative text for accessibility
        edit: { x: 0, y: 0, zoom: 1, background: "https://example.com/edit" },
        copyright: "Example Copyright",
      },
    },
  };
  
  
  
  
  return (
    <header className="top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4">
      <NavBar settings={settings} />
    </header>
  );
}
