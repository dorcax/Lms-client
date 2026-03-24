
const StudySchedule = ({ schedule }) => {
  return (
    <div className="bg-[#ec5b13] my-3 p-6 rounded-xl text-white shadow-lg">
      <h3 className="font-bold mb-4">Study Schedule</h3>
      <div className="space-y-3">
        {schedule.map((item) => (
          <div key={item.id} className="flex items-center gap-3">
            <div className="text-center bg-white/20 rounded px-2 py-1">
              <p className="text-[10px] uppercase font-bold">{item.day}</p>
              <p className="text-lg font-bold">{item.date}</p>
            </div>
            <div>
              <p className="text-sm font-bold">{item.title}</p>
              <p className="text-xs opacity-80">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudySchedule;