import { SCALING } from "@/constants";
import Image from "next/image";
import React from "react";

function SolnFrame() {
  return (
    <div className="max-container padding-container mt-10 ">
      <div className="rounded-lg bg-[#0C5BC6] xl:p-20 p-10">
        <h1 className="text-[#ffff] text-[#242331] xl:regular-40 lg:regular-40 md:regular-40 regular-32 text-center ">
          Modernize apps, infrastructure with cloud native tech for resilience,
          scalability.
        </h1>
        {SCALING.map((item) => (
          <div className="flex xl:flex-row flex-col text-center">
            <Image
              src={item.image}
              width={320}
              height={187.69}
              alt="realtime"
              className="xl:w-[70%] xl:mt-10 mt-4"
            />
            <div className="xl:mt-20 ">
              <h1 className="xl:text-[40px] xl:font-[250] text-[#ffff] text-[25px] mb-3">
                {item.title}
              </h1>
              <p className="xl:text-left xl:w-[500px]  text-[#ffff] xl:mt-5 regular-24  xl:text-[20px] ">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SolnFrame;
