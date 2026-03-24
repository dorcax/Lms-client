import { Star } from "lucide-react"

export type WishlistCourse = {
  id: number
  title: string
  instructor: string
  rating: number
  reviews: string
  price: number
  oldPrice: number
  image: string
}



type Props = {
  course: WishlistCourse
}

const WishlistCard= ({ course }: Props) => {
  return (
    <div className="group bg-white dark:bg-slate-900 rounded-xl border overflow-hidden shadow-sm hover:shadow-md">

      <div className="aspect-video relative overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center group-hover:scale-105 transition"
          style={{ backgroundImage: `url(${course.image})` }}
        />

        <button className="absolute top-2 right-2 size-6 bg-white rounded-full flex items-center justify-center text-red-500">
          ❤️
        </button>
      </div>

      <div className="p-4 flex flex-col gap-3">

        <div>
          <h3 className="font-bold line-clamp-2 min-h-[3rem]">
            {course.title}
          </h3>

          <p className="text-xs text-slate-500 uppercase font-semibold">
            {course.instructor}
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <span className="text-amber-500 font-bold">
            {course.rating}
          </span>
          <span className="flex  text-slate-400">
         
            {Array.from({length:Math.floor(course.rating)}).map((_, i) => (
              <span key={i} className="text-amber-500"><Star className="h-3 w-3"/></span>
            ))}

             
          </span>
          <span className="text-slate-400 text-xs">
                  ({course.reviews})
             </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-bold">${course.price}</span>
          <span className="line-through text-slate-400">
            ${course.oldPrice}
          </span>
        </div>

        <button className="w-full py-2 bg-[#ec5b13] text-white rounded">
          Move to Cart
        </button>

        <button className="text-sm text-slate-500">
          Remove from Wishlist
        </button>

      </div>
    </div>
  )
}

export default WishlistCard