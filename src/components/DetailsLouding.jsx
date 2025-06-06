import { Skeleton } from "./ui/skeleton"

export const DetailsLouding = () => {
    return(
        <div className="max-w-[1280px]">
      <div className="flex justify-between p-5 mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-y-2">
          <Skeleton className="w-[144px] h-[30px]"/>
          <Skeleton className="w-[181px] h-[18px]"/>
          </div>
        <div className="flex flex-col gap-2">
            <Skeleton className="w-[82px] h-[20px]"/>
            <Skeleton className="w-[82px] h-[20px] hidden md:inline"/>
        </div>
      </div>
      <div className="flex md:gap-8 md:justify-center">
        <Skeleton  className="md:w-[290px] md:h-[428px] hidden md:inline "/>
         <div className="relative flex">
          <Skeleton className="w-screen md:w-[760px]  h-[211px]  md:h-[428px]"/>  
        </div>
      </div>
      <div className="flex p-[20px] gap-8">
        <Skeleton  className="w-[100px] h-[148px] md:hidden" />
        <div className="flex flex-col gap-y-4 md:justify-center">
          <Skeleton className="w-[201px] h-[130px] md:w-[1280px] md:h-[48px]"/>
        </div>
      </div>
    </div>
    )
}