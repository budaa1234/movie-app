import { Search, Moon, Film } from "lucide-react";
export const Header = () => {
  return (
    <div>
      <div className="w-[375px] h-[59px] md:w-full flex p-[20px] items-center justify-between">
        <div className="flex ">
          <Film color="#4338CA" />
          <p className="text-[16px, #4338CA] text-[#4338CA] font-bold">
            Movie Z
          </p>
        </div>
        <div>
            <div className="flex items-center">
            <Search/>
            <input  placeholder="Search..." className="w-[379px] h-[36px] border" />
            </div>
        </div>
        <div className="flex gap-[12px]">
            <button className="w-[36px] h-[36px] border-[#F4F4F5] shadow-sm flex items-center justify-center rounded-md"> <Search className="w-[12px] h-[12px]" /></button>
            <button className="w-[36px] h-[36px] border-[#F4F4F5] shadow-sm flex items-center justify-center rounded-md"> <Moon className="w-[12px] h-[12px]"/></button>
         
        </div>
      </div>
    </div>
  );
};
