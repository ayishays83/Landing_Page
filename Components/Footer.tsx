import { FOOTER_LINKS, FOOTER_OUR_SERVICES, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="flexCenter mb-24 xl:mt-[50px] mt-20 ">
      <div className="padding-container max-container flex w-full flex-col gap-10">
        <div className="flex flex-col items-start justify-center gap-[1%] md:flex-row xl:flex-row">
          <div className="flex flex-col gap-5 xl:flex-shrink">
            <FooterColumn title={SOCIALS.title}>
              <Link href="/" className="mb-3">
                <Image src="/logo.png" alt="logo" width={54} height={20} />
              </Link>
              <div className="w-50">
                <p className="regular-14  text-gray-30">
                  You get just what you need to run your cloud workloads--no
                  more, no less.
                  <br /> Deploy from our single pane of glass, manage them with
                  ease and scale up <br />
                  as fast as your workload grows
                </p>
              </div>

              <ul className="regular-14 flex gap-4 text-gray-30 mb-3 ">
                {SOCIALS.links.map((link) => (
                  <Link href="/" key={link}>
                    <Image src={link} alt="logo" width={24} height={24} />
                  </Link>
                ))}
              </ul>
            </FooterColumn>
            <div className="border bg-gray-20 mb-4 xl:hidden" />
          </div>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1 ">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className="flex flex-col gap-2">
              <FooterColumn title={FOOTER_OUR_SERVICES.title}>
                {FOOTER_OUR_SERVICES.links.map((link) => (
                  <Link
                    href="/"
                    key={link}
                    className="flex gap-4 md:flex-col lg:flex-row xl:flex-row"
                  >
                    <p className="whitespace-nowrap">{link}</p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <div>
          <p className="regular-14 w-full text-center text-gray-30 ">
            Terms & Condition | Privacy Policy
          </p>
          <p className="regular-14 text-center text-gray-30 mt-3">
            Copyright © 2023 EXOCODE TECHNOLOGIES All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
