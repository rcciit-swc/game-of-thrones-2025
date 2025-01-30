"use client";

import React, { useState } from "react";
import Image from "next/image";

const GalleryCard = ({ photo }: { photo: string }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="relative h-[300px] w-[400] transform overflow-hidden 
          rounded-2xl grayscale transition-all duration-500 ease-in-out hover:scale-105 hover:grayscale-0
          "
    >
      <Image
        src={photo}
        alt="image"
        fill={true}
        style={{
          objectFit: "cover",
        }}
        onLoad={() => setLoaded(true)}
      />
      {!loaded && (
        <div className="absolute left-0 top-0 h-full w-full animate-pulse bg-gray-100"></div>
      )}
    </div>
  );
};

export default GalleryCard;