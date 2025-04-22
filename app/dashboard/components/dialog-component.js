"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

// import { Button } from "@/components/ui/button";
import { useDialog } from "@/store/store";
import { useUserStore } from "@/store/store";
export function DialogComponent() {
  const { isOpen, onClose } = useDialog();
  const { loggedInUserDetails } = useUserStore();
  console.log(loggedInUserDetails, "loggedInUserDetails");
  return (
    <AlertDialog open={isOpen} defaultOpen={isOpen} onOpenChange={onClose}>
      {/* <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger> */}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Make a Choice</AlertDialogTitle>
          <AlertDialogDescription>
            What do you want to do Today?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Academy</AlertDialogCancel>
          <AlertDialogAction>Copy Traders </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
