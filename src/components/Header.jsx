import { Search, Moon, Film, ChevronDown } from "lucide-react";

export const Header = () => {
  return (
    <div>
      {/* logo */}
      <div className="h-[59px] md:w-full flex p-[20px] items-center md:justify-between justify-between ">
        <div className="flex ">
          <Film color="#4338CA" />
          <p className="text-[16px, #4338CA] text-[#4338CA] font-bold">
            Movie Z
          </p>
        </div>

        <div className="hidden md:flex md:gap-[70px]">
          {/* genre button */}
          <div className="flex items-center">
            <ChevronDown className="w-[16px] h-[16px] relative m-[16px]" />
            <button className="w-[97px] h-[36px] shadow-sm rounded-lg absolute text-[14px] pl-[40px]">
              Genre
            </button>
          </div>

          {/* search */}
          <div className="flex items-center gap-[12px]">
            <div className="flex items-center relative">
              <Search color="#71717A" className="w-[16px] h-[16px] m-[12px]" />
              <input
                placeholder="Search..."
                className="absolute w-[379px] h-[36px] rounded-lg shadow-sm border-none  outline-none pl-[38px]"
              />
            </div>
          </div>
        </div>

        {/* dark mode button */}
        <div className="flex gap-[12px]">
          <button className="w-[36px] h-[36px] border-[#F4F4F5] shadow-sm flex items-center justify-center rounded-md">
            {" "}
            <Search className="w-[12px] h-[12px]" />
          </button>
          <button className="w-[36px] h-[36px] border-[#F4F4F5] shadow-sm flex items-center justify-center rounded-md">
            {" "}
            <Moon className="w-[12px] h-[12px]" />
          </button>
        </div>
      </div>
    </div>
  );
};
