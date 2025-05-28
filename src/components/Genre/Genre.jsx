import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { getGenre } from "@/lib/api/get-genre";
import { useEffect, useState } from "react";
const Genre = ({ genre }) => {
  console.log(genre);
  return (
    <div className="flex justify-center">
      <div className="w-[335px] h-[513px] md:w-[577px] md:h-[333px] rounded-lg border p-5">
        {/* <p className="text-[24px] font-black">Genres</p>
        <p className="text-[16px]">See lists of movies by genre</p> */}
        <div className="pt-[33px] flex flex-wrap gap-4">
          <Button variant="outline" className="rounded-full h-[20px]">
            {genre?.name}
            <ChevronRight className="w-1 h-2" />
          </Button>

          {/* <Button variant="outline" className="rounded-full h-[20px]">
            Action
            <ChevronRight className="w-1 h-2" />
          </Button>
          <Button variant="outline" className="rounded-full h-[20px]">
            Adventure
            <ChevronRight className="w-1 h-2" />
          </Button>
          <Button variant="outline" className="rounded-full h-[20px]">
            Animation
            <ChevronRight className="w-1 h-2" />
          </Button>
          <Button variant="outline" className="rounded-full h-[20px]">
            Biography
            <ChevronRight className="w-1 h-2" />
          </Button>
          <Button variant="outline" className="rounded-full h-[20px]">
            Comedy
            <ChevronRight className="w-1 h-2" />
          </Button>
          <Button variant="outline" className="rounded-full h-[20px]">
            Crime
            <ChevronRight className="w-1 h-2" />
          </Button>
          <Button variant="outline" className="rounded-full h-[20px]">
            Documentary
            <ChevronRight className="w-1 h-2" />
          </Button>
          <Button variant="outline" className="rounded-full h-[20px]">
            Drama
            <ChevronRight className="w-1 h-2" />
          </Button>{" "}
          <Button variant="outline" className="rounded-full h-[20px]">
            Family
            <ChevronRight className="w-1 h-2" />
          </Button>{" "}
          <Button variant="outline" className="rounded-full h-[20px]">
            Fantasy
            <ChevronRight className="w-1 h-2" />
          </Button>{" "}
          <Button variant="outline" className="rounded-full h-[20px]">
            Film-Noir
            <ChevronRight className="w-1 h-2" />
          </Button>{" "}
          <Button variant="outline" className="rounded-full h-[20px]">
            Game-Show
            <ChevronRight className="w-1 h-2" />
          </Button>{" "}
          <Button variant="outline" className="rounded-full h-[20px]">
            History
            <ChevronRight className="w-1 h-2" />
          </Button>{" "}
          <Button variant="outline" className="rounded-full h-[20px]">
            Horror
            <ChevronRight className="w-1 h-2" />
          </Button>{" "}
          <Button variant="outline" className="rounded-full h-[20px]">
            Music
            <ChevronRight className="w-1 h-2" />
          </Button>{" "}
          <Button variant="outline" className="rounded-full h-[20px]">
            Musical
            <ChevronRight className="w-1 h-2" />
          </Button>{" "}
          <Button variant="outline" className="rounded-full h-[20px]">
            Mystery
            <ChevronRight className="w-1 h-2" />
          </Button>{" "}
          <Button variant="outline" className="rounded-full h-[20px]">
            News
            <ChevronRight className="w-1 h-2" />
          </Button>{" "}
          <Button variant="outline" className="rounded-full h-[20px]">
            Reality-TV
            <ChevronRight className="w-1 h-2" />
          </Button>{" "}
          <Button variant="outline" className="rounded-full h-[20px]">
            Romance
            <ChevronRight className="w-1 h-2" />
          </Button> */}
        </div>
      </div>
    </div>
  );
};
export default Genre;
