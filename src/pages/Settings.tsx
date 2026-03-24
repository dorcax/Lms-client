import NotificationSection from "@/component/Notification";
import ProfileSection from "@/component/ProfileSection";
import SecuritySection from "@/component/SecurityHeader";
import { Button } from "@/components/ui/button";
import { WorkflowIcon } from "lucide-react";


const SettingsPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-4 space-y-10">
      <ProfileSection />
      <SecuritySection />

    {/* two factor authentication  */}
    <div className="flex justify-between items-center bg-[#ec5b13]/10 rounded-lg p-5  ">
      <div className="flex  gap-2">
        <div className="border size-9 rounded-lg bg-[#ec5b13]/50 flex items-center justify-center " >
        <WorkflowIcon className=""/>
      </div>
      <div>
        <h2 className="capitalize font-semibold text-base ">two factor authentication</h2>
        <p className="text-sm text-slate-600">add an extra layer of security to your account </p>
      </div>
    
      </div>
       <div className=" ">
       <Button className="bg-transparent cursor-pointer text-[#ec5b13]">Enable </Button>
     </div>
    </div>
      <NotificationSection />
    </main>
  );
};

export default SettingsPage;