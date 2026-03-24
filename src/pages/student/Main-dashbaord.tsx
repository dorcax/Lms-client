import EnrolledCourses from "@/component/EnrolledCourses"
import RecentActivity from "@/component/RecentActivity"
import StudentCard from "@/component/StudentCard"
import StudySchedule from "@/component/StudySchedule"
import { enrolledCourses, recentActivities, studySchedule } from "@/constants/data"
import { CheckCircle } from "lucide-react"


const data = [{
  id: 1,
  name: "courses completed",
  value: 12,

}, {
  id: 2,
  name: "Hour studied",
  value: 155,

},
{
  id: 3,
  name: "Avarage grade",
  value: "A-",

},
{
  id: 4,
  name: "study streak",
  value: "7 Days",

}


]

const MainDashbaord = () => {
  return (
    <div>
      <div className="grid  grid-cols-4 gap-4  py-8">
        {data.map((student) => (
          <StudentCard
            name={student.name}
            value={student.value}
            id={student.id}




          />
        ))}

      </div>
      {/* list of enrolled courses */}

      <section className="grid grid-cols-3 gap-6">
        <div className="col-span-2  ">
          <div className="flex justify-between items-center pb-3 ">
            <h2 className="font-semibold text-slate-600  text-lg capitalize">enrolled courses</h2>
            <span className="capitalize text-sm font-semibold text-[#ec5b13]">view all</span></div>
          {/* list of the courses  */}

          <EnrolledCourses courses={enrolledCourses} />
        </div>
        <div className="col-span-1  ">
          <h2 className="font-semibold text-slate-600  text-lg capitalize pb-3">recent activity</h2>
          <RecentActivity recentActivities={recentActivities} />


          <StudySchedule schedule={studySchedule} />

        </div>
      </section>
    </div>

  )
}

export default MainDashbaord