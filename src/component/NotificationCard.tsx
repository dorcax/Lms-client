
export type Notification = {
  id: number
  title: string
  message: string
  time: string
  type: string
  read: boolean
  group: string}

type Props = {
  item: Notification
}


const getIcon = (type: string) => {
  switch (type) {
    case "grade":
      return "grade"
    case "message":
      return "question_answer"
    case "course":
      return "auto_stories"
    case "event":
      return "event"
    default:
      return "notifications"
  }
}
const NotificationCard = ({ item }: Props) => {
  return (
    <div
      className={`p-4 rounded-xl flex gap-4 border transition ${
        item.read
          ? "opacity-70 bg-white/50"
          : "bg-white hover:shadow-sm"
      }`}
    >

      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
        {/* <span className="material-icons-round">
          {getIcon(item.type)}
        </span> */}
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold">{item.title}</h3>

          {!item.read && (
            <span className="w-2 h-2 bg-primary rounded-full"></span>
          )}
        </div>

        <p className="text-sm text-slate-500 line-clamp-1">
          {item.message}
        </p>

        <span className="text-xs text-slate-400">
          {item.time}
        </span>
      </div>

    </div>
  )
}

export default NotificationCard