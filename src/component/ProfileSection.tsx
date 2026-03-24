import { Input } from "@/components/ui/input";
import SectionHeader from "./SectionHeader";
import { Label } from "@/components/ui/label"; 
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PencilIcon } from "lucide-react";

const ProfileSection = () => {
  return (
    <section className="space-y-6">
      <SectionHeader
        title="Profile Information"
        description="Update your photo and personal details."
      />

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Image */}
        <div className="flex flex-col items-center gap-1">
          <div className="relative group">
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-23 border w-6 h-8 rounded-lg bg-[#ec5b13] flex items-center justify-center ">
              <PencilIcon className="size-4 text-white"/>
            </div>
          </div>
          <Button className="text-sm font-semibold bg-transparent   text-[#ec5b13]">
            Change Photo
          </Button>
        </div>

        {/* Form */}
        <div className="flex-1 flex flex-col w-full space-y-4 ">
          <div className="flex  items-center gap-4  "> <div className="w-full">
            <Label className="capitalize text-sm pb-2 text-slate-500">full name </Label>
            <Input
              id="email"
              type="text"
              placeholder="fullName"
              className="px-4 py-5 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
            />
          </div>
            <div className="w-full">
              <Label className="capitalize text-sm pb-2 text-slate-500">Email </Label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                className="px-4 py-5 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
              />
            </div></div>
          <div>
            <Label  className="capitalize text-sm pb-2 text-slate-500">bio </Label>
            <Textarea
              id="email"
             placeholder=" Tell us about yourself "
              className="px-4 py-5 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
            />
          </div>


          <Button className=" bg-[#ec5b13] w-[150px]">Save Changes</Button>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;