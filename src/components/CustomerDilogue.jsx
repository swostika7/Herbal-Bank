import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";

function CustomerDilogue({ children }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-center text-primarys">
            Customer Services
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 text-sm text-gray-600">
          <div className="flex items-center gap-3">
            <IoCallOutline className="text-xl" />
            <span>ph: +977 9802374101</span>
          </div>

          <div className="flex items-center gap-3">
            <MdOutlineMarkEmailRead className="text-xl" />
            <span>info@muktinathherbal.com</span>
          </div>

          <div className="flex items-center gap-3">
            <CiLocationOn className="text-xl" />
            <span>Basundhara, Kathmandu</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CustomerDilogue;
