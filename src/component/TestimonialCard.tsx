
export type Testimonial = {
  id: number
  name: string
  role: string
  image: string
  message: string
}
type Props = {
  testimonial: Testimonial
}

const TestimonialCard = ({ testimonial }: Props) => {
  return (
    <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
      
      <div className="flex items-center gap-4 mb-6">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full border-2 border-[#ec5b13]"
        />

        <div>
          <h4 className="font-bold text-white">{testimonial.name}</h4>
          <p className="text-xs text-slate-400">{testimonial.role}</p>
        </div>
      </div>

      <p className="text-slate-300 italic">
        "{testimonial.message}"
      </p>
    </div>
  )
}

export default TestimonialCard