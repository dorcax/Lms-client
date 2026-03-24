import NotificationGroup from "@/component/NotificationGroup"
import { notification } from "@/constants/data"
import { CheckCircle, CheckCircleIcon, ChevronDownIcon } from "lucide-react"


const NotificationsPage = () => {
  const newNotifications = notification.filter(n => n.group === "new")
  const earlierNotifications = notification.filter(n => n.group === "earlier")

  return (
    <main className="flex-1 overflow-y-auto">

      {/* Header */}
      <header className="p-6 flex justify-between items-center border-b sticky top-0 bg-white">
        <div>
          <h1 className="text-2xl font-bold">Notifications</h1>
          <p className="text-sm text-slate-500">
            Stay updated with your learning
          </p>
        </div>

        <button className="flex items-center gap-2 px-4 py-2 border rounded-lg">
          <span className="material-icons-round"><CheckCircleIcon/></span>
          Mark all as read
        </button>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-6">

        <NotificationGroup title="New" items={newNotifications} />
        <NotificationGroup title="Earlier" items={earlierNotifications} />

        <div className="flex justify-center pt-6">
          <button className="flex items-center gap-2 text-sm">
            View older notifications
            <span className="material-icons-round">
             <ChevronDownIcon/>
            </span>
          </button>
        </div>

      </div>
    </main>
  )
}

export default NotificationsPage