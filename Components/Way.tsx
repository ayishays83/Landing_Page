import { WAY_ITEMS_lEFT } from "@/constants";
import Image from "next/image";
import { it } from "node:test";
import React from "react";

function Way() {
  return (
    <div className="max-container padding-container mt-10 ">
      <div className="flexCenter">
        <h1 className="regular-32">The Xerocodee way</h1>
        <Image
          src="/rocket.svg"
          width={50}
          height={50}
          alt="rocket"
          className="inline"
        />
      </div>
      <div className="flexCenter flex-col">
        <h1 className="regular-40">01</h1>
        <div className="border-b-4 rounded w-[60px] border-[#0C5BC6] "></div>
        <h2 className="regular-20 bold-20 mt-4">Self Serve infrastructure</h2>
        <p className="regular-14 text-center">
          Accelerate by self-serving production-ready infrastructure and
          customize as you scale.
        </p>
      </div>
      <div>
        <ul className="hidden h-full gap-12 lg:flex mt-5">
          <li className=" border-[#0C5BC6] border-b-[4px] p-2">Your Cloud</li>
          <li className="border p-2 rounded-sm">Infra Components</li>
          <li className="border p-2">Self hosted Apps</li>
        </ul>
      </div>
      {/* First DIV */}
      <div className="flex xl:flex-row xl:gap-12 flex-col text-center xl:text-left">
        <Image
          src="/cloud.png"
          alt="cloud"
          width={300}
          height={200}
          className="xl:w-[50%]"
        />
        <div className="xl:mt-[10rem]">
          <h2 className="regular-32">In Your Cloud</h2>
          <p className="leading-6">
            Your infrastructure runs on your AWS or GCP account. Never get
            locked in. Infinitely scalable.Azure support coming soon
          </p>
        </div>
      </div>

      {/* 02 div starting..(LEFT).. */}
      {WAY_ITEMS_lEFT.map((item) => (
        <div>
          <FlexColumn title={item.head2} para={item.para} img={item.image} />
        </div>
      ))}
     
    </div>
  );
}

type FlexColumnProps = {
  title: string;
  para: string;
  img: string;
};

const FlexColumn = ({ title, para, img }: FlexColumnProps) => {
  return (
    <div className="flex xl:flex-row xl:gap-12 flex-col text-center xl:text-left">
      <div className="xl:mt-[10rem]">
        <h2 className="regular-32">{title}</h2>
        <p className="leading-6">{para}</p>
      </div>
      <Image
        src={img}
        alt="cloud"
        width={300}
        height={200}
        className="xl:w-[50%]"
      />
    </div>
  );
};

type RightColumnProps = {
  title: string;
  para: string;
  img: string;
};

const RightColumn = ({ title, para, img }: RightColumnProps) => {
  return (
    <div className="flex xl:flex-row xl:gap-12 flex-col text-center xl:text-left">
      <Image
        src={img}
        alt="cloud"
        width={300}
        height={200}
        className="xl:w-[50%]"
      />
      <div className="xl:mt-[10rem]">
        <h2 className="regular-32">{title}</h2>
        <p className="leading-6">{para}</p>
      </div>
    </div>
  );
};

export default Way;
