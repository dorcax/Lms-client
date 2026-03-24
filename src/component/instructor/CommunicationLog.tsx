export function CommunicationLogItem({ item }) {
  return (
    <div className="bg-white p-6 rounded-xl hover:bg-gray-50 transition group">
      
      {/* Header */}
      <div className="flex justify-between mb-3 items-start">
        <div>
          <h3 className="font-bold text-lg group-hover:text-primary">
            {item.title}
          </h3>
          <p className="text-sm text-[#ec5b13]">{item.course}</p>
        </div>

        <span className="text-xs bg-gray-100 px-2  py-2 rounded">
          {item.date}
        </span>
      </div>

      {/* Message */}
      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
        {item.message}
      </p>

      {/* Footer */}
      <div className="flex items-center gap-4">
        
        {/* Avatars */}
        <div className="flex -space-x-2">
          {item.readBy.map((user, i) => (
            <div
              key={i}
              className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-[10px] font-bold border-2 border-white"
            >
              {user}
            </div>
          ))}

          <div className="w-6 h-6 rounded-full bg-[#ec5b13] text-white flex items-center justify-center text-[10px] font-bold border-2 border-white">
            +{item.extraCount}
          </div>
        </div>

        {/* Read % */}
        <span className="text-xs font-bold text-gray-400">
          Read by {item.readPercentage}%
        </span>
      </div>
    </div>
  );
}