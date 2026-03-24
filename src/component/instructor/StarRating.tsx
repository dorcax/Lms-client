import { Star } from "lucide-react";

export function StarRating({ rating }) {
  return (
    <div className="flex text-orange-500">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i}>
          {i <= rating ? <Star/> : "☆"}
        </span>
      ))}
    </div>
  );
}