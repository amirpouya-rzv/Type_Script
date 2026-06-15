  import { Button } from "@/components/ui/button";
  import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
import { ReactNode } from "react";
import { FieldGroup } from "../ui/field";

type modalType = {
  title: string;
  textbutton: string;
  description: string;
  children?: ReactNode;
};

export function DialogDemo({ title, textbutton, description, children }: modalType) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="dark:bg-dark_Blue dark:hover:bg-light_blue hover:text-white hover:bg-dark_Blue bg-light_blue text-white"
        >
          {textbutton}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm text-black bg-white">
        <form>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <FieldGroup>{children}</FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
