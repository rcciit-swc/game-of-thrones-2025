import SectionHeader from "@/components/common/SectionHeader";
import { gallery } from "@/utils/functions/constant";

import GalleryCard from "../../app/gallery/_components/GalleryCard";

const Gallery = () => {
  return (
    <div className="relative px-5 pt-[100px]">
      <SectionHeader text="gallery" />
      <div className="relative mx-auto grid max-w-[1600px] grid-cols-1 items-center justify-center gap-20 rounded-2xl px-5 py-10 font-sans md:grid-cols-2 md:border md:px-10 md:py-20 lg:grid-cols-3">
        {gallery.map((photo, index) => (
          <GalleryCard photo={photo} key={index} />
        ))}
        
      </div>
    </div>
  );
};

export default Gallery;