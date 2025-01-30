"use client";

import { useState } from "react";
import Image from "next/image";

import  SectionHeader  from "@/components/common/SectionHeader";

import Committee from "./Committee";
import Location from "./Location";

const Block = () => {
  const [selected, setSelected] = useState(true);
  return (
    <div className="relative mx-auto min-h-screen overflow-x-hidden pt-20">
      <SectionHeader text="Contact Us" />

      <div className="mx-auto w-[90%] lg:w-1/2 ">
        <div className="flex flex-row gap-1">
          <Image
            onClick={() => setSelected(true)}
            src={"/assets/contacts/location.svg"}
            className="w-20 rounded-md border border-b-0 p-2 lg:w-20 "
            height={0}
            width={0}
            alt="location"
          />
          <Image
            onClick={() => setSelected(false)}
            src={"/assets/contacts/people.svg"}
            className="w-20 rounded-md border p-2 "
            height={0}
            width={0}
            alt="location"
          />
        </div>
        <div className="rounded-md border px-5 py-10 lg:px-10 lg:py-20">
          {selected ? <Location /> : <Committee />}
        </div>
      </div>
    </div>
  );
};

export default Block;