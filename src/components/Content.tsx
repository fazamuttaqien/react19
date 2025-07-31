import { UserCircle } from "lucide-react"

function StatsCard({
  title,
  value,
  change,
  changeType,
}: {
  title: string
  value: string
  change: string
  changeType: "positive" | "negative"
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h3 className="text-sm font-medium text-gray-500 mb-2">{title}</h3>
      <div className="flex items-baseline justify-between">
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <span
          className={`text-sm font-medium ${
            changeType === "positive" ? "text-green-600" : "text-red-600"
          }`}
        >
          {change}
        </span>
      </div>
    </div>
  )
}

function ActivityItem({
  user,
  action,
  time,
}: {
  user: string
  action: string
  time: string
}) {
  return (
    <div className="flex items-center space-x-3 py-2">
      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
        <UserCircle size={16} className="text-indigo-600" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-900">
          <span className="font-medium">{user}</span> {action}
        </p>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
    </div>
  )
}

export { StatsCard, ActivityItem }
