import { CommitteeDetails } from "@/utils/functions/constant";
import SVGIcon from '@/components/common/SVGIcon';
const Committee = () => {
  return (
    <div>
<SVGIcon 
  iconName="contactBg1" 
  className="fixed top-0 right-0 w-[500px] h-[1000px] z-[-1] hidden md:block" 
/>
<SVGIcon 
  iconName="contactBg2" 
  className="fixed top-0 left-0  md:w-[800px] md:h-[1000px] z-[-1] hidden md:block " 
/>

    <div className="flex flex-col items-center justify-center gap-10 lg:gap-16">
    <SVGIcon iconName="sponsorsLines" className="fixed bottom-0 left-0 w-full h-auto bg-cover bg-center z-[-1] md:hidden sm:block" />
    {CommitteeDetails.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-col items-center gap-3 px-5 lg:gap-5"
          >
            <h1 className="text-center font-got text-lg tracking-wider text-primary text-blue-300 lg:text-2xl">
              {item.title}
            </h1>
            <div className="flex flex-row flex-wrap items-center justify-center gap-8 lg:gap-20">
              {item.members.map((member, index) => {
                return (
                  <div
                    key={index}
                    className="text-md flex flex-row flex-wrap items-center gap-2 lg:text-xl"
                  >
                    <div className="flex flex-col items-center text-center">
                      <p className="font-semibold text-white">{member.name}</p>
                      <p className="text-gray-400">{member.role}</p>
                      <a
                        href={`tel:${member.phone}`}
                        className="text-green-100 hover:text-green-500"
                      >
                        {member.phone}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Committee;