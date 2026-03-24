import { ReviewStatCard } from "@/component/instructor/ReviewCard"
import ReviewCard from "@/component/instructor/ReviewCards"
import { Button } from "@/components/ui/button"
import { reviews } from "@/constants/data"
import { useState } from "react"


const Review = () => {
    const [filter,setFilter] =useState(["All", "5", "4", "Critical"])
  return (
    <div className="mt-6">
       <div className="flex justify-between gap-4">
         <div>
            <h2 className="text-2xl font-semibold capitalize ">student reviews </h2> 
            <p className="text-sm text-slate-500">manage your academic reputation and learner feedback</p>
        </div>
        <div>
             <div className="bg-gray-100 p-2 rounded-xl flex gap-1 ">
        {filter.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg text-sm font-bold ${
              filter[0] === f
                ? "bg-white text-orange-600 shadow"
                : "text-gray-500"
            }`}
          >
            {f === "All" ? "All Reviews" : f}
          </button>
        ))}
      </div>

        </div>
       </div>
       {/* stat card  */}
        <div className="grid md:grid-cols-3 gap-6 my-10">
      <ReviewStatCard title="Average Rating" value="4.9 ⭐" />
      <ReviewStatCard title="Total Reviews" value="1,284" />
      <ReviewStatCard title="Response Rate" value="98%" highlight />
    </div>

    {/* the review card  */}
    <div>
        {
            reviews.map((review)=>(
                <ReviewCard  review ={review}/>
            ))
        }
    </div>
    <div className="flex justify-center mt-4 items-center">
        <Button className="bg-slate-400/50 text-black py-6">show older messages</Button>
    </div>
    </div>
  )
}

export default Review