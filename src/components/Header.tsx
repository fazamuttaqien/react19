import { Bell, Search } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white px-4 py-2">
      <div className="flex items-center justify-between">
        {/* Left side - could add breadcrumbs or page title here */}
        {/* <div className="flex-1" /> */}

        {/* Center - Search */}
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-1.5 border border-gray-300 rounded-xs focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        {/* Right side - Notifications & Profile */}
        <div className="flex items-center space-x-4 flex-1 justify-end">
          <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true&name=John+Doe"
            alt="Profile"
            className="w-8 h-8 rounded-xs"
          />
        </div>
      </div>
    </header>
  )
}
