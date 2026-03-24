import CourseStep from "@/component/instructor/CourseStep";
import { useState } from "react";
// import CourseStep from "./CourseStep";
// import ModuleStep from "./ModuleStep";
// import LessonStep from "./LessonStep";

export default function CreateCourseFlow() {
  const [step, setStep] = useState(1);
  const [courseId, setCourseId] = useState(null);

  const next = () => setStep((prev) => prev + 1);
  const prev = () => setStep((prev) => prev - 1);

  return (
    <main className=" px-3 p-8">
      {step === 1 && (
        <CourseStep next={next} setCourseId={setCourseId} />
      )}


      {step === 2 && (
        <div>hello</div>
        // <ModuleStep
        //   next={next}
        //   prev={prev}
        //   courseId={courseId}
        // />
      )}

      {step === 3 && (
        // <LessonStep prev={prev} />
        <div>leson</div>
      )}
    </main>
  );
}