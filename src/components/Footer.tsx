import clsx from "clsx";
import React from "react";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded1 from "@/components/Bounded1";
import { isFilled } from "@prismicio/client";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa6";

export default async function Footer() {
  const client = createClient();

  const name = "Dinith Vanderlan";

  const settings = await client.getSingle("settings");
  return (
    <Bounded1 as="footer" className="text-[#000]">
        <div className="mx-[40px]">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 py-1 sm:flex-row ">
        <div className="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start">
          <Link
            href="/"
            className="text-xl font-extrabold tracking-tighter text-[#b0b0b0] transition-colors duration-150 hover:text-yellow-400"
          >
            {name}
          </Link>
          <span
            className="hidden text-5xl font-extralight leading-[0] text-[#8d8d8d] sm:inline"
            aria-hidden={true}
          >
            |
          </span>
          <p className=" text-sm text-[#8f8f8f] ">
            © {new Date().getFullYear()} {name}
          </p>
        </div>
       
        <div className="socials inline-flex justify-center sm:justify-end">
          {isFilled.link(settings.data.github_link) && (
            <PrismicNextLink
              field={settings.data.github_link}
              className="p-2 text-2xl text-[#8f8f8f] transition-all duration-150 hover:scale-125 hover:text-yellow-400"
              aria-label={name + " on GitHub"}
            >
              <FaGithub />
            </PrismicNextLink>
          )}
          {isFilled.link(settings.data.twitter_link) && (
            <PrismicNextLink
              field={settings.data.twitter_link}
              className="p-2 text-2xl text-[#8f8f8f] transition-all duration-150 hover:scale-125 hover:text-yellow-400"
              aria-label={name + " on Twitter"}
            >
              <FaTwitter />
            </PrismicNextLink>
          )}
          {isFilled.link(settings.data.linkedin_link) && (
            <PrismicNextLink
              field={settings.data.linkedin_link}
              className="p-2 text-2xl text-[#8f8f8f] transition-all duration-150 hover:scale-125 hover:text-yellow-400"
              aria-label={name + " on LinkedIn"}
            >
              <FaLinkedin />
            </PrismicNextLink>
          )}
        </div>
        </div>
      </div>
    </Bounded1>
  );
}
