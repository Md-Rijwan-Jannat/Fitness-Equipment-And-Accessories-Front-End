import HeroIcons from "@/components/icons/HeroIcons";
import { Button } from "@/components/ui/button";

const CancelButton = () => {
  return (
    <Button
      className="border border-buttonHoverColor hover:bg-buttonHoverColor hover:text-secondaryColor rounded-full"
      variant="outline"
    >
      <HeroIcons className="size-6" icon="x" />
    </Button>
  );
};

export default CancelButton;
