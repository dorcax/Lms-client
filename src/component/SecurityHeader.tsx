import { Input } from "@/components/ui/input";
import SectionHeader from "./SectionHeader";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";


const SecuritySection = () => {
    return (
        <section className="space-y-6 pt-8">
            <SectionHeader
                title="Security"
                description="Manage your password and account protection."
            />

            <div className="space-y-4 bg-white px-4 py-6  rounded-md ">
                <h1 className="inline-flex gap-2 "> <Lock className="text-[#ec5b13]" /> change password </h1>

                <Input
                    id="email"
                    type="password"
                    placeholder="Current password"
                    className="px-4 py-6 my-3 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                />




                <div className="flex gap-4">

                    <Input
                        id="email"
                        type="password"
                        placeholder="New  password"
                        className="px-4 py-6 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                    />
                    <Input
                        id="email"
                        type="password"
                        placeholder="Confirm  password"
                        className="px-4 py-6 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                    />

                </div>


                <Button className="bg -slate-600">Update Password</Button>
            </div>
        </section>
    );
};

export default SecuritySection;