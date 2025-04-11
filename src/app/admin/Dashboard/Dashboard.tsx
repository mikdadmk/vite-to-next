import { useState, useEffect } from "react";
import AdminLayout from "@/components/AdminLayout";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, Users, FileText, MessageSquare, FileCheck, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("admin");
  
  // Mock data for statistics
  const stats = [
    {
      id: 1,
      number: 103,
      label: "Registrations",
      icon: <Users className="h-5 w-5 text-emerald-400" />,
      bgColor: "bg-gray-900",
      borderColor: "border-gray-800",
      additionalInfo: "+ 19 today",
      additionalClass: "text-emerald-400",
      secondaryText: "Registrations",
    },
    {
      id: 2,
      number: 2,
      label: "Abstracts",
      icon: <FileText className="h-5 w-5 text-blue-400" />,
      bgColor: "bg-gray-900",
      borderColor: "border-gray-800",
      additionalInfo: "1 accepted",
      additionalClass: "text-blue-400",
      secondaryText: "Submissions",
    },
    {
      id: 3,
      number: 3,
      label: "Messages",
      icon: <MessageSquare className="h-5 w-5 text-purple-400" />,
      bgColor: "bg-gray-900",
      borderColor: "border-gray-800",
      additionalInfo: "From contact form",
      additionalClass: "text-purple-400",
      secondaryText: "From contact form",
    },
    {
      id: 4,
      number: 0,
      label: "Papers",
      icon: <FileCheck className="h-5 w-5 text-amber-400" />,
      bgColor: "bg-gray-900",
      borderColor: "border-gray-800",
      additionalInfo: "0 accepted",
      additionalClass: "text-amber-400",
      secondaryText: "Full papers",
    },
  ];

  // Mock registrations data
  const registrations = [
    {
      name: "Suraij Cp",
      email: "suraijard392@gmail.com",
      status: "pending",
      date: "09/04/2025",
    },
    {
      name: "Muhammed Thoufeer",
      email: "muhammedthoufeer053@gmail.com",
      status: "confirmed",
      date: "09/04/2025",
    },
    {
      name: "MUHAMMED ALI",
      email: "alimuhammedv6666@gmail.com",
      status: "confirmed",
      date: "09/04/2025",
    },
    {
      name: "Abdulla hadi K",
      email: "abdullahadianr@gmail.com",
      status: "confirmed",
      date: "09/04/2025",
    },
    {
      name: "Abdul Haleem",
      email: "haleemkaippuram@gmail.com",
      status: "confirmed",
      date: "09/04/2025",
    },
  ];

  // Mock actions
  const actions = [
    {
      title: "Manage Registrations",
      description: "View, approve, and manage participant registrations",
      icon: <Users className="h-6 w-6 text-emerald-400" />,
      path: "/admin/registrations",
      bgGradient: "from-emerald-900/30 to-gray-900",
      borderColor: "border-emerald-500/20",
    },
    {
      title: "Manage Abstracts",
      description: "Review and process submitted abstracts",
      icon: <FileText className="h-6 w-6 text-blue-400" />,
      path: "/admin/events",
      bgGradient: "from-blue-900/30 to-gray-900",
      borderColor: "border-blue-500/20",
    },
    {
      title: "View Messages",
      description: "Read and respond to contact messages",
      icon: <MessageSquare className="h-6 w-6 text-purple-400" />,
      path: "/admin/messages",
      bgGradient: "from-purple-900/30 to-gray-900",
      borderColor: "border-purple-500/20",
    },
    {
      title: "Seminar Settings",
      description: "Update dates, venue, and seminar details",
      icon: <Settings className="h-6 w-6 text-amber-400" />,
      path: "/admin/settings",
      bgGradient: "from-amber-900/30 to-gray-900",
      borderColor: "border-amber-500/20",
    },
  ];

  // Mock analytics data
  const abstractSubmissions = {
    accepted: 1,
    pending: 1, 
    rejected: 0,
  };
  
  const paperSubmissions = {
    accepted: 0,
    pending: 0,
    rejected: 0,
  };

  return (
    <AdminLayout title="Admin Dashboard">
      <div className="space-y-8">
        {/* Header with welcome and seminar info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-white">Welcome back, <span className="text-indigo-400">{username}</span></h2>
            <p className="text-gray-400">Here's what's happening with your seminar.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex items-center gap-2 bg-gray-900 px-3 py-2 rounded-md border border-gray-800">
              <Calendar className="h-5 w-5 text-emerald-400" />
              <span className="text-sm text-gray-300">Seminar Date: Apr 10, 2025</span>
            </div>
            <div className="flex items-center gap-2 bg-red-900/20 px-3 py-2 rounded-md border border-red-500/30">
              <Clock className="h-5 w-5 text-red-400" />
              <span className="text-sm text-red-300">1 days left</span>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card 
              key={stat.id} 
              className={`${stat.bgColor} border ${stat.borderColor} text-white shadow-md`}
            >
              <div className="p-4 flex flex-col justify-between h-full">
                <div className="flex justify-between items-center mb-8">
                  <div className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-800">
                    {stat.icon}
                  </div>
                  <span className="text-3xl font-bold">{stat.number}</span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-gray-400">{stat.secondaryText}</span>
                  <span className={`text-xs ${stat.additionalClass}`}>{stat.additionalInfo}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Recent Registrations and Submission Status */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 bg-gray-900/60 border border-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-4 border-b border-gray-800 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-indigo-400" />
                <h3 className="font-medium text-gray-200">Recent Registrations</h3>
                <span className="text-xs text-gray-400">Latest registrations for the seminar</span>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-indigo-400 hover:text-indigo-300 hover:bg-gray-800"
                onClick={() => navigate('/admin/registrations')}
              >
                View All →
              </Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800/50">
                  <tr>
                    <th className="text-left py-3 px-4 text-gray-400 text-xs font-medium">Name</th>
                    <th className="text-left py-3 px-4 text-gray-400 text-xs font-medium">Email</th>
                    <th className="text-left py-3 px-4 text-gray-400 text-xs font-medium">Status</th>
                    <th className="text-left py-3 px-4 text-gray-400 text-xs font-medium">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {registrations.map((reg, index) => (
                    <tr key={index} className="border-t border-gray-800">
                      <td className="py-3 px-4 text-sm text-gray-300">{reg.name}</td>
                      <td className="py-3 px-4 text-sm text-gray-400">{reg.email}</td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs ${
                          reg.status === "confirmed" 
                            ? "bg-green-900/20 text-green-400 border border-green-500/30" 
                            : "bg-yellow-900/20 text-yellow-400 border border-yellow-500/30"
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                            reg.status === "confirmed" ? "bg-green-400" : "bg-yellow-400"
                          }`}></span>
                          {reg.status === "confirmed" ? "Confirmed" : "Pending"}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-400">{reg.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="py-2 px-4 bg-gray-900 border-t border-gray-800 text-xs text-gray-500">
                Showing 5 of 103 total registrations • Last updated: 19:13:15
              </div>
            </div>
          </div>

          <div className="bg-gray-900/60 border border-gray-800 rounded-lg shadow-md p-4">
            <div className="mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5 text-indigo-400" />
              <h3 className="font-medium text-gray-200">Submission Status</h3>
            </div>
            
            {/* Abstract Submissions */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-300">Abstract Submissions</span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-xs text-indigo-400 hover:text-indigo-300 hover:bg-gray-800 h-7 px-2"
                >
                  Manage →
                </Button>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden mb-3">
                <div className="h-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500" style={{ width: '100%' }}></div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400"></span>
                    <span className="text-xs text-gray-300">Accepted</span>
                  </div>
                  <span className="text-green-400 font-medium">{abstractSubmissions.accepted}</span>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                    <span className="text-xs text-gray-300">Pending</span>
                  </div>
                  <span className="text-yellow-400 font-medium">{abstractSubmissions.pending}</span>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-red-400"></span>
                    <span className="text-xs text-gray-300">Rejected</span>
                  </div>
                  <span className="text-red-400 font-medium">{abstractSubmissions.rejected}</span>
                </div>
              </div>
            </div>
            
            {/* Paper Submissions */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-300">Full Paper Submissions</span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-xs text-indigo-400 hover:text-indigo-300 hover:bg-gray-800 h-7 px-2"
                >
                  Manage →
                </Button>
              </div>
              <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden mb-3">
                <div className="h-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500" style={{ width: '0%' }}></div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400"></span>
                    <span className="text-xs text-gray-300">Accepted</span>
                  </div>
                  <span className="text-green-400 font-medium">{paperSubmissions.accepted}</span>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                    <span className="text-xs text-gray-300">Pending</span>
                  </div>
                  <span className="text-yellow-400 font-medium">{paperSubmissions.pending}</span>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-red-400"></span>
                    <span className="text-xs text-gray-300">Rejected</span>
                  </div>
                  <span className="text-red-400 font-medium">{paperSubmissions.rejected}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
            <h2 className="text-xl font-semibold text-white">Quick Actions</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {actions.map((action, index) => (
              <Card 
                key={index} 
                className={`bg-gradient-to-br ${action.bgGradient} border ${action.borderColor} text-white shadow-md hover:shadow-lg transition-all hover:-translate-y-1`}
                onClick={() => navigate(action.path)}
              >
                <div className="p-4 cursor-pointer">
                  <div className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center mb-3">
                    {action.icon}
                  </div>
                  <h3 className="font-medium mb-1 text-gray-200">{action.title}</h3>
                  <p className="text-sm text-gray-400">{action.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
