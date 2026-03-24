import { Button } from "@/components/ui/button";
import { Eye, Pencil, Star, Users } from "lucide-react";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <div
          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
            course.status === "Published"
              ? "bg-white text-green-700"
              : "bg-white text-slate-500"
          }`}
        >
          {course.status}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs font-bold uppercase text-primary mb-2">
          {course.category}
        </p>

        <h3 className="text-base font-bold mb-4">{course.title}</h3>

        {/* Stats */}
        <div className="flex justify-between items-center mb-6 border">
          <div className="flex gap-4">
            <div className="flex  items-center gap-1 text-secondary">
              <Users size={16} />
              <span className="text-sm text-slate-700 ">{course.students}</span>
            </div>

              <div className="flex justify-between w-full gap-1 text-orange-500">
              <Star size={16} />
              <span className="text-sm font-bold">
                {course.rating ?? "--"}
              </span>
            {/* </div> */}
            
          </div>

           </div>
           {/* <div className="flex justify-between  items-center gap-2 w-full">  */}
          
            <div className="font-bold text-base w-full border  " >
            ${course.price.toFixed(2)}
          </div>

        </div>
       
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3 items-center p-3">
          <Button className="flex items-center justify-center text-black text-sm  gap-2 py-6 rounded-xl bg-slate-400 font-semibold">
            <Eye size={16} />
            View
          </Button>

          <Button className="flex items-center text-[#ec5b13] justify-center gap-2 py-6 bg-transparent rounded-xl border border-primary">
            <Pencil size={16} />
            Edit
          </Button>
        </div>
      </div>
    // </div>
  );
};

export default CourseCard;