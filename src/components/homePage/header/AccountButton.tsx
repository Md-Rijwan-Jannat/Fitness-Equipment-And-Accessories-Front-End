import HeroIcons from "@/components/icons/HeroIcons";
import { Button } from "@/components/ui/button";

const AccountButton = () => (
  <Button className="bg-primaryColor text-secondaryColor hover:bg-buttonHoverColor rounded-3xl border border-secondaryColor hover:border-none md:w-[140px] poppins-medium text-[10px] md:text-[16px] md:h-[50px] transition-colors duration-500">
    <HeroIcons icon="userGroup" className="size-4 md:size-5 mr-2" />
    Account
  </Button>
);

export default AccountButton;
