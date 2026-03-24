import { CheckCheckIcon } from "lucide-react"

const RecentActivity = ({ recentActivities }) => {
    return (
        <section className="bg-white dark:bg-background-dark/50 p-3 rounded-xl border border-primary/10 ">
            {
                recentActivities.map((Activity) => (
                    <div key={Activity.id} className="flex gap-3 py-3 ">
                        <div className={`h-8 w-8 rounded-full border  bg-${Activity.iconBg} text-${Activity.iconColor} flex items-center justify-center shrink-0`}>
                            <span className="material-symbols-outlined text-lg"><CheckCheckIcon/></span>
                        </div>

                        <div>

                            <div className="font-normal text-sm ">{Activity.title}</div>
                            <div className="text-xs text-slate-400">{Activity.time}</div>
                        </div>

                    </div>
                ))
            }
        </section>
    )
}

export default RecentActivity