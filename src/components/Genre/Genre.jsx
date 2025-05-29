import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Genre = ({ genre }) => {
  return (
    <Button variant="outline" className="h-[20px]">
      {genre?.name}
      <ChevronRight className="w-1 h-2" />
    </Button>
    // 
  );
};
export default Genre;
