import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

type ImageModalProps = {
  imageSrc: string;
  imageAlt?: string;
  text?: string;
};

const ImageModal: React.FC<ImageModalProps> = ({
  imageSrc,
  imageAlt,
  text,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-secondaryColor text-primaryColor hover:text-secondaryColor hover:bg-buttonHoverColor rounded-3xl border border-borderColor hover:border-none transition-colors duration-500 w-[100px]"
          onClick={() => setIsOpen(true)}
        >
          {text}
        </Button>
      </DialogTrigger>
      <DialogContent className="w-11/12 md:8/12">
        <DialogDescription>
          <div className="relative">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-auto rounded-md"
            />
            <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-secondaryColor text-opacity-40 text-2xl font-bold z-10 whitespace-nowrap">
              {imageAlt}
            </h3>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
