import { ChartBar } from "@/component/instructor/BarChart"
import EnrolledStudentList from "@/component/instructor/EnrolledStudentList"
import StatCard from "@/component/instructor/statCard"
import { Button } from "@/components/ui/button"
import { instructorCard, instructorRecentActivity } from "@/constants/data"

const InstructorDashboard = () => {
  return (
    <section>
      <div className="flex justify-between items-center py-5 mb-2">
        <div>
          <h1 className="text-2xl font-bold ">Welcome back, Dr.dorcas </h1>
          <p className="text-slate-600 text-sm">your course have seen a <span className="text-[#ec5b13] text-base font-semibold">12% growth </span> this month.keep it up</p>
        </div>
        <div className=" flex gap-4 ">
          <Button className="capitalize bg-white text-black font-normal text-sm  ">download report</Button>
          <Button className="capitalize bg-[#ec5b13] text-sm">create course </Button>
        </div>
      </div>
      {/* grid container  */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10 ">
      {instructorCard.map((stat) => (
        <StatCard key={stat.id} {...stat} />
      ))}
    </div>
    {/* bar char tand recent activity 
     */}
     <div className="flex  gap-4 items-start">
      <div className="flex-1 ">
        <ChartBar/></div> 
      <div className="border w-74 bg-white rounded-md px-3 ">
        <h2 className="capitalize text-sm text-slate-600 font-medium py-3">recent activity</h2>
        
        <div >
         {instructorRecentActivity.map((a)=>(
         <div className=" flex items-center gap-2 py-2">
            <div className={`w-2 h-2 rounded-full mt-2  ${a.dotColor} `}>
         
          </div>
          <div>
            <h2 className="font-semibold text-sm ">{a.title}</h2>
            <p className="text-xs text-slate-600">{a.description}</p>
             <p className="text-xs text-slate-400">{a.time}</p>
          </div>
         </div>

         ))}
          
          </div>
          
           </div>
     </div>
     {/* table  */}
     <EnrolledStudentList/>
    </section>
  )
}

export default InstructorDashboard