

export type Course = {
  id: number
  title: string
  category: string
  description: string
  price: number
  rating: number
  students: string
  image: string
  tag?: string
}
type Props = {
  course: Course
}

const CourseCard = ({ course }: Props) => {
  return (
    <article className="flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover-lift">
      
      <div className="relative h-48 bg-slate-200">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />

        {course.tag && (
          <span className="absolute top-4 left-4 bg-[#ec5b13] text-white text-[10px] font-bold px-2 py-1 rounded uppercase">
            {course.tag}
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-bold text-[#ec5b13] uppercase">
            {course.category}
          </span>

          <span className="text-xs font-semibold text-slate-700">
            ⭐ {course.rating} ({course.students})
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-800 mb-2">
          {course.title}
        </h3>

        <p className="text-slate-500 text-sm mb-6 flex-grow">
          {course.description}
        </p>

        <div className="flex items-center justify-between mt-auto ">
          <span className="text-2xl font-bold">${course.price}</span>

          <button className="w-8 h-8 flex items-center justify-center   bg-slate-50 text-[#ec5b13] rounded-lg hover:bg-[#ec5b13] hover:text-white">
            +
          </button>
        </div>
      </div>
    </article>
  )
}

export default CourseCard