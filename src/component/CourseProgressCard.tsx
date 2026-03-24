
export type CourseProgress = {
  id: number
  title: string
  instructor: string
  category: string
  progress: number
  image: string
}

type Props = {
  course: CourseProgress
}

const CourseProgressCard = ({ course }: Props) => {
  const isStarted = course.progress > 0

  return (
    <div className="group bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-xl flex flex-col">

      <div className="relative aspect-video overflow-hidden">
        <img
          src={course.image}
          className="w-full h-full object-cover group-hover:scale-105 transition"
        />

        <span className="absolute top-3 left-3 bg-[#ec5b13] text-white text-[10px] px-2 py-1 rounded">
          {course.category}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold">{course.title}</h3>
        <p className="text-sm text-slate-500 mb-4">
          {course.instructor}
        </p>

        <div className="mt-auto">
          <div className="flex justify-between text-sm mb-2">
            <span>Progress</span>
            <span className="text-[#ec5b13] font-bold">
              {course.progress}%
            </span>
          </div>

          <div className="h-2 bg-slate-200 rounded mb-4">
            <div
              className="h-full bg-[#ec5b13] rounded"
              style={{ width: `${course.progress}%` }}
            />
          </div>

          <button className="w-full py-2 bg-[#ec5b13] text-sm text-white rounded">
            {isStarted ? "Continue Learning" : "Start Learning"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default CourseProgressCard