
import { Button } from "@/components/ui/button";
import CourseCard from "../../component/instructor/CourseCard";
import {instructorCourses} from "../../constants/data";
import { Search, Plus, LayoutGrid, List, Filter } from "lucide-react";

const CoursesPage = () => {
  return (
    <main className="pt-4 pb-12     max-w-7xl">

      {/* Header */}
      <div className="flex justify-between mb-5">
        <div>
          <h2 className="text-2xl font-bold mb-1">My Courses</h2>
          <p className="text-slate-700 text-sm">
            Manage and curate your intellectual assets.
          </p>
        </div>

        <Button className="flex items-center gap-2 bg-[#ec5b13]  text-white px-6  rounded-xl">
          <Plus />
          Create Course
        </Button>
      </div>

      {/* Search */}
      <div className="bg-surface-container-low  rounded-2xl mb-8 flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 text-secondary" size={18} />
          <input
            className="w-full pl-10 py-2 rounded-xl border"
            placeholder="Search..."
          />
        </div>

        <button className="flex items-center gap-2 px-4 border rounded-xl">
          <Filter size={16} />
          Filter
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {instructorCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {/* Empty State */}
      {instructorCourses.length === 0 && (
        <div className="mt-10 p-10 border-dashed border text-center">
          <h4 className="font-bold">No Courses Yet</h4>
          <p className="text-secondary">
            Start creating your first course.
          </p>
        </div>
      )}
    </main>
  );
};

export default CoursesPage;