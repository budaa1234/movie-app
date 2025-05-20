import { Film } from "lucide-react";
export const Footer = () => {
  return (
    <div>
      <div className=" h-[300px] bg-[#4338CA] ">
        <div className="flex-col gap-y-[12px] pl-[20px] pt-[40px]">
          <div className="flex ">
            <Film color="white" className="w-[20px] h-[20px]" />
            <p className="text-[16px, #4338CA] text-[#fff] font-bold">
              Movie Z
            </p>
          </div>
          <p className="text-[#fff] font-[14px]">
            © 2025 Movie Z. All Rights Reserved.
          </p>
        </div>

        <div></div>
      </div>
    </div>
  );
};
