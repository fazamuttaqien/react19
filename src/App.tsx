import {
  BarChart3,
  Boxes,
  Clock,
  LayoutDashboard,
  LifeBuoy,
  Settings,
  ThumbsUp,
  UserCircle,
} from "lucide-react"
import React from "react"

import { ActivityItem, StatsCard } from "./components/Content"
import Header from "./components/Header"
import Sidebar, { SidebarItem } from "./components/Sidebar"

const App: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar>
        <SidebarItem icon={<LayoutDashboard size={18} />} text="Dashboard" />
        <SidebarItem icon={<BarChart3 size={18} />} text="Statistics" active />
        <SidebarItem icon={<UserCircle size={18} />} text="Users" />
        <SidebarItem icon={<Boxes size={18} />} text="Inventory" />
        <SidebarItem icon={<Clock size={18} />} text="Watch" />
        <SidebarItem icon={<ThumbsUp size={18} />} text="Liked" />
        <hr className="my-3" />
        <SidebarItem icon={<Settings size={18} />} text="Settings" />
        <SidebarItem icon={<LifeBuoy size={18} />} text="Help" />
      </Sidebar>

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Statistics Dashboard
              </h1>
              <p className="text-gray-600">
                Welcome back! Here's what's happening with your business today.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatsCard
                title="Total Revenue"
                value="$45,231.89"
                change="+20.1%"
                changeType="positive"
              />
              <StatsCard
                title="Active Users"
                value="2,350"
                change="+180.1%"
                changeType="positive"
              />
              <StatsCard
                title="Orders"
                value="12,234"
                change="+19%"
                changeType="positive"
              />
              <StatsCard
                title="Conversion Rate"
                value="3.2%"
                change="-4.3%"
                changeType="negative"
              />
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Revenue Overview
                  </h3>
                  <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Chart placeholder</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Recent Activity
                  </h3>
                  <div className="space-y-3">
                    <ActivityItem
                      user="John Smith"
                      action="made a purchase"
                      time="2 minutes ago"
                    />
                    <ActivityItem
                      user="Sarah Johnson"
                      action="updated profile"
                      time="5 minutes ago"
                    />
                    <ActivityItem
                      user="Mike Wilson"
                      action="left a review"
                      time="10 minutes ago"
                    />
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                  <div className="space-y-2">
                    <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      Add New Product
                    </button>
                    <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      View Reports
                    </button>
                    <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      Manage Users
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
