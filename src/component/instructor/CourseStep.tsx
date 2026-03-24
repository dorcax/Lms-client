import { CourseLayout } from "./CourseLayout";
import { Stepper } from "./Stepper";
import { FormLayout } from "./FormLayout";

import { useState } from "react";
import { StepFooter } from "./StepFooter";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Image } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CourseStep({ next, setCourseId }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    console.log("saving")
  };

  return (
    <CourseLayout>
      <Stepper currentStep={1} />

      <FormLayout
        left={
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-6">
              Curriculum Essentials
            </h2>
            <div>
              <Label className="capitalize pb-2 text-sm text-slate-600">course Title</Label>
              <Input
                name="title"
                placeholder="Course Title"
                onChange={handleChange}
                className="input mb-4 py-6"
              />
            </div>

            <div>
              <Label className="capitalize pb-2 text-sm text-slate-600">course description</Label>
              <Textarea
                name="description"
                placeholder="Description"
                onChange={handleChange}
                className="input mb-4 py-10"
              />
            </div>

            <div className="flex justify-between gap-2">
              <div className="w-full">
                <Label className="capitalize pb-2 text-sm text-slate-600">course category</Label>
                <Input
                  name="category"
                  placeholder="Course category"
                  onChange={handleChange}
                  className="input mb-4 py-6"
                />

              </div>

              <div className="w-full">
                <Label className="capitalize pb-2 text-sm text-slate-600">course price</Label>
                <Input
                  name="price"
                  type="number"
                  placeholder="Price"
                  onChange={handleChange}
                  className="mb-4 py-6"
                />
              </div>
            </div>


          </div>
        }
        right={
          <div className="space-y-4">
            <div className="bg-white p-8 rounded-xl shadow flex flex-col justify-center items-center ">
              <div className="flex justify-center  items-center w-15 h-15 rounded-full bg-[#ec5b13]/50">
                <Image className="text-[#ec5b13]" />
              </div>
              <div className="mt-3 flex flex-col justify-center items-center ">
                <h2 className=" capitalize text-base "> thumbnail cover </h2>
                <p className="text-sm  text-slate-400 mb-4">uplaod a high resolution image to represent your course .Recommended 18:0 ratio</p>
                <Button className="bg-slate-500 text-sm text-white capitalize ">select image </Button>
              </div>


            </div>
            <div className="bg-[#ec5b13] text-white p-8 rounded-xl  ">
              <h2 className="font-semibold text-base capitalize mb-4">curator tips</h2>
              <p className="text-sm ">Courses with detailed description and professional cover image have a 40% enrollment rate.Take your time to draft a compelling syllabus summary</p>
            </div>
          </div>
        }
      />

       <div className="mt-6 flex justify-end">
        <Button 
          // onClick={handleSaveAndContinue}
          // disabled={isLoading}
          className="bg-[#ec5b13] hover:bg-[#ec5b13]/90 py-6"
        >
          {/* {isLoading ? "Saving..." : "Save & Continue"} */}
          save and continue 
        </Button>
        </div>
    </CourseLayout>
  );
}