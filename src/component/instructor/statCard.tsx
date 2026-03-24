import * as Icons from "lucide-react";

const StatCard = ({ title, value, percentage, icon, iconColor, iconBg, percentageColor, percentageBg }) => {
  const IconComponent = Icons[icon];

  return (
    <div className="bg-surface-container-lowest px-4 py-3  rounded-xl shadow-sm border-none transition-all hover:shadow-xl hover:shadow-slate-900/5 group">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-2 rounded-lg ${iconBg} ${iconColor} group-hover:bg-current  transition-colors`}>
          <IconComponent size={20} className="group-hover:text-white"/>
        </div>
        <span className={`text-xs font-bold ${percentageColor} ${percentageBg} px-2 py-1 rounded-full`}>
          {percentage}
        </span>
      </div>
      <p className="text-slate-600 text-xs font-medium mb-1">{title}</p>
      <h3 className="text-2xl font-manrope font-semibold ">{value}</h3>
    </div>
  );
};

export default StatCard;