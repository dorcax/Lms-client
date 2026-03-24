import WishlistCard from "@/component/WishlistCard"
import { wishlist } from "@/constants/data"

const WishList = () => {
  return (
   <section>
    <h2 className="font-bold text-2xl py-2">My Wishlist</h2>
<div className="grid grid-cols-3 gap-6 py-4">
    
  {
    wishlist.map((course) => (
      <WishlistCard key={course.id} course={course} />
    ))
  }
</div>
   </section>
  )
}

export default WishList