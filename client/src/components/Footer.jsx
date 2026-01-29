import React from "react";
import {
  Footer,
  FooterTitle,
  FooterLinkGroup,
  FooterLink,
  FooterDivider,
  FooterCopyright,
} from "flowbite-react";
import {
  FooterIcon
} from "flowbite-react";

import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble
} from "react-icons/bs";
import { Link } from "react-router-dom";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
        <div className="mt-5">
          <Link
            to="/"
            className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Nemu's
            </span>
            Blog
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6 mt-5">
          <div>
            <FooterTitle title="About" />
            <FooterLinkGroup col>
              <FooterLink
                href="https://www.100jsprojects.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                100 JS Projects
              </FooterLink>
              <FooterLink
                href="/about"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nemu's Blog
              </FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title="Follow Us" />
            <FooterLinkGroup col>
              <FooterLink
                href="https://github.com/NehaMore31"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </FooterLink>
              <FooterLink href="#">Discord</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title="Legal" />
            <FooterLinkGroup col>
              <FooterLink
                href='#'
                
              >
               Privacy Policy
              </FooterLink>
              <FooterLink
                href='#'
                
              >
               Terms & Conditions
              </FooterLink>
            </FooterLinkGroup>
          </div>
        </div>
      </div>
     <FooterDivider />

      <div className=" w-full sm:flex sm:items-center sm:justify-between">
        <FooterCopyright
          href="#"
          by="Nemu's blog"
          year={new Date().getFullYear()}
        />
<div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">

  <FooterIcon href="#" icon={BsFacebook} />

  <FooterIcon href="#" icon={BsInstagram} />

  <FooterIcon href="#" icon={BsTwitter} />

  <FooterIcon href="https://github.com/NehaMore31" icon={BsGithub} />

  <FooterIcon href="#" icon={BsDribbble} />

</div>

      </div>
      
      </div>
    </Footer>
  );
}
