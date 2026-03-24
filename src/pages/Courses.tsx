import { useState } from "react"
import { courses } from "@/constants/data"
import CourseProgressCard from "@/component/CourseProgressCard"
import { FilterTabs } from "@/component/CourseFilter"


const CoursesSection = () => {
  const [active, setActive] = useState("all")

  const filteredCourses = courses.filter((course) => {
    if (active === "progress") return course.progress > 0 && course.progress < 100
    if (active === "completed") return course.progress === 100
    return true
  })

  return (
    <div className="max-w-7xl py-3">

      <FilterTabs
        active={active}
        setActive={setActive}
        counts={{
          all: courses.length,
          progress: courses.filter(c => c.progress > 0 && c.progress < 100).length,
          completed:courses.filter(c => c.progress === 100).length
        }}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <CourseProgressCard key={course.id} course={course} />
        ))}
      </div>

    </div>
  )
}

export default CoursesSection