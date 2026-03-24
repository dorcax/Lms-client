import { notification } from "@/constants/data"
import NotificationCard from "./NotificationCard"

type Props = {
  title: string
  items: Notification[]
}

const NotificationGroup = ({ title, items }: Props) => {
  if (items.length === 0) return null

  return (
    <div className="mb-6">
      <h2 className="text-xs font-bold uppercase text-slate-400 mb-4">
        {title}
      </h2>

      <div className="space-y-3">
        {notification.map((item) => (
          <NotificationCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}


export default NotificationGroup