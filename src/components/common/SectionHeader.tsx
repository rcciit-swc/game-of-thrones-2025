export default function SectionHeader({ text }: { text: string }) {
    return (
      <div className="relative z-0 flex items-center justify-center py-12 text-center font-got text-[30px] tracking-[10.2px] text-neutral/[0.08] md:text-[100px] text-gray-800">
        {text}
        <div className="z-1 absolute text-center font-bold font-got text-white text-[20px] md:text-[45px] px-3">
          {
            text
          }
        </div>
      </div>
    );
  }