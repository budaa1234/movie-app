import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "../ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getGenre } from "@/lib/api/get-genre";
import Genre from "./Genre";

const Dropdowm = () => {
  const [movieGenre, setMovieGenre] = useState([]);

  useEffect(() => {
    const getMovieGenre = async () => {
      const data = await getGenre();
      console.log(data);
      setMovieGenre(data);
    };
    getMovieGenre();
  }, []);
  return (
    <Link className="flex" href={`/Genre/Genre`}>
      <DropdownMenu className="flex">
        <DropdownMenuTrigger asChild>
          <Button variant="outline">genre</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-wrap w-[335px] h-[513px] md:w-[577px]">
          <div className="flex flex-wrap w-[335px] h-[513px] md:w-[577px] md:h-[333px]">  
            {movieGenre.genres?.map((genre) => (
                <Button variant="secondary" className=" border-gray-400 border-[1px] rounded-full px-[10px] py-[2px] bg-white">
             <Genre genre={genre} key={genre.id} />
            </Button>
              ))}
          </div>


        </DropdownMenuContent>
      </DropdownMenu>
    </Link>
  );
};
export default Dropdowm;
