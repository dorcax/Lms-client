export function ReviewStatCard({ title, value, highlight }:{
    title:string,value:string,highlight?:any
}) {
  return (
    <div
      className={`p-6 rounded-lg shadow-sm ${
        highlight ? "bg-[#ec5b13] text-white" : "bg-white text-slate-500"
      }`}
    >
      <p className="text-xs font-bold  capitalize mb-1 opacity-70">
        {title}
      </p>
      <h3 className="text-3xl font-semibold ">{value}</h3>
    </div>
  );
}