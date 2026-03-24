import { StarRating } from "./StarRating";
const ReviewCard=({ review })=> {
  return (
    <div className="bg-white p-8  mb-4 rounded-lg shadow-sm hover:shadow-md transition">
      <div className="flex flex-col md:flex-row gap-6">
        
        {/* Avatar */}
        <div>
          {review.avatar ? (
            <img
              src={review.avatar}
              className="w-14 h-14 rounded-full object-cover"
            />
          ) : (
            <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center">
              👤
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex justify-between mb-3">
            <div>
              <h4 className="font-bold">{review.name}</h4>
              <p className="text-sm text-gray-500">
                {review.course}
              </p>
            </div>

            <div className="text-right">
              <StarRating rating={review.rating} />
              <p className="text-xs text-gray-400">
                {review.date}
              </p>
            </div>
          </div>

          <p className="text-gray-600 mb-4">
            {review.comment}
          </p>

          {/* Response */}
          {review.response && (
            <div className="bg-gray-100 p-4 rounded border-l-4 border-primary">
              <p className="text-xs text-primary font-bold mb-1">
                You Responded:
              </p>
              <p className="text-sm italic">
                {review.response}
              </p>
            </div>
          )}

          {/* Actions */}
        {review.response ? undefined :   <div className="flex gap-4 mt-4">
            <button className="text-primary font-bold text-sm">
              Reply
            </button>
            <button className="text-gray-500 text-sm">
              Feature
            </button>
          </div>}
        </div>
      </div>
    </div>
  );
}

export default ReviewCard