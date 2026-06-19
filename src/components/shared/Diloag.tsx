import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";
import { FieldGroup } from "../ui/field";

type modalType = {
  title?: string;
  textbutton?: string;
  description?: string;
  children?: ReactNode;
  button?: ReactNode;
  className?: string;
  contentClassName?: string;
  open?: boolean;        
  onOpenChange?: (open: boolean) => void; 
};

export function DialogDemo({
  title,
  textbutton,
  description,
  children,
  button,
  contentClassName,
  open,           
  onOpenChange,   
}: modalType) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}> 
      <DialogTrigger asChild>
        <Button className="...">{textbutton}</Button>
      </DialogTrigger>
      <DialogContent
        className={`text-black bg-white ${contentClassName ?? "sm:max-w-sm"}`}
      >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <FieldGroup>{children}</FieldGroup>
      </DialogContent>
    </Dialog>
  );
}