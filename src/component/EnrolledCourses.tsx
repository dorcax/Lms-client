
const EnrolledCourses = ({ courses }) => {
  const getStatusClass = (statusColor, status) => {
    if (status === 'NOT STARTED') {
      return 'bg-slate-100 dark:bg-slate-800 text-slate-500';
    }
    return 'bg-primary/10 text-[#ec5b13]';
  };

  return (
    <div className="space-y-4">
        {courses.map((course) => (
          <div 
            key={course.id} 
            className="bg-white dark:bg-background-dark/50 p-3 rounded-xl border border-primary/10 flex flex-col sm:flex-row gap-4"
          >
            <div className="w-full sm:w-32 h-24 rounded-lg overflow-hidden bg-slate-200">
              <img 
                alt={course.title} 
                className="w-full h-full object-cover" 
                src={course.image}
              />
            </div>
            
            <div className="flex-1 space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-slate-100">{course.title}</h3>
                  <p className="text-xs text-slate-500">By {course.instructor}</p>
                </div>
                <span className={`${getStatusClass(course.statusColor, course.status)} text-[10px] font-bold px-2 py-1 rounded`}>
                  {course.status}
                </span>
              </div>
              
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-medium">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                  <div 
                    className={`bg-[#ec5b13] h-full rounded-full`} 
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
  
  );
};

export default EnrolledCourses;