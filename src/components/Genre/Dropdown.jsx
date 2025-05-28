import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "../ui/button";
import Link from "next/link";

const Dropdowm = ({ genre }) => {
  return (
    <Link href={`/Genre/Genre`}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">genre</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          {genre?.name}
        </DropdownMenuContent>
      </DropdownMenu>
    </Link>
  );
};
export default Dropdowm;
