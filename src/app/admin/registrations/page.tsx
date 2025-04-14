'use client'
import { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, Download, Filter, Users, 
  CheckCircle, Clock, XCircle, User, 
  Mail, Calendar, ArrowDownUp 
} from "lucide-react";

const Registrations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Mock data
  const registrations = [
    {
      id: 1,
      name: "Suraij Cp",
      email: "suraijard392@gmail.com",
      phone: "+971 58 123 4567",
      organization: "Dubai University",
      registrationDate: "2025-04-09",
      status: "pending",
      ticketType: "Full Access",
      paymentStatus: "Pending",
    },
    {
      id: 2,
      name: "Muhammed Thoufeer",
      email: "muhammedthoufeer053@gmail.com",
      phone: "+971 50 987 6543",
      organization: "Tech Innovations LLC",
      registrationDate: "2025-04-09",
      status: "confirmed",
      ticketType: "VIP Access",
      paymentStatus: "Paid",
    },
    {
      id: 3,
      name: "MUHAMMED ALI",
      email: "alimuhammedv6666@gmail.com",
      phone: "+971 55 345 6789",
      organization: "Global Research Center",
      registrationDate: "2025-04-09",
      status: "confirmed",
      ticketType: "Full Access",
      paymentStatus: "Paid",
    },
    {
      id: 4,
      name: "Abdulla hadi K",
      email: "abdullahadianr@gmail.com",
      phone: "+971 54 765 4321",
      organization: "Emirates Institute",
      registrationDate: "2025-04-09",
      status: "confirmed",
      ticketType: "Full Access",
      paymentStatus: "Paid",
    },
    {
      id: 5,
      name: "Abdul Haleem",
      email: "haleemkaippuram@gmail.com",
      phone: "+971 56 234 5678",
      organization: "Future Technologies",
      registrationDate: "2025-04-09",
      status: "confirmed",
      ticketType: "Workshop Only",
      paymentStatus: "Paid",
    },
    {
      id: 6,
      name: "Fathima Zahra",
      email: "fathima.z@gmail.com",
      phone: "+971 52 876 5432",
      organization: "Islamic Research Foundation",
      registrationDate: "2025-04-08",
      status: "confirmed",
      ticketType: "Full Access",
      paymentStatus: "Paid",
    },
    {
      id: 7,
      name: "Rashid Mohammed",
      email: "rashid.m@outlook.com",
      phone: "+971 50 111 2233",
      organization: "Dubai Business Council",
      registrationDate: "2025-04-08",
      status: "pending",
      ticketType: "VIP Access",
      paymentStatus: "Pending",
    },
    {
      id: 8,
      name: "Layla Ahmed",
      email: "layla.ahmed@yahoo.com",
      phone: "+971 55 444 5555",
      organization: "Innovation Hub",
      registrationDate: "2025-04-08",
      status: "rejected",
      ticketType: "Full Access",
      paymentStatus: "Rejected",
    },
  ];

  // Filter registrations based on search query and status filter
  const filteredRegistrations = registrations.filter(reg => {
    const matchesSearch = 
      reg.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      reg.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reg.organization.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = 
      filterStatus === "all" || 
      reg.status === filterStatus;
    
    return matchesSearch && matchesFilter;
  });

  const statusCounts = {
    all: registrations.length,
    confirmed: registrations.filter(r => r.status === "confirmed").length,
    pending: registrations.filter(r => r.status === "pending").length,
    rejected: registrations.filter(r => r.status === "rejected").length,
  };

  // Status pill component
  const StatusPill = ({ status }: { status: string }) => {
    let bgColor = "";
    let textColor = "";
    let borderColor = "";
    let icon: React.ReactNode | null = null;
    
    switch (status) {
      case "confirmed":
        bgColor = "bg-green-900/20";
        textColor = "text-green-400";
        borderColor = "border-green-500/30";
        icon = <CheckCircle className="h-3.5 w-3.5 mr-1" />;
        break;
      case "pending":
        bgColor = "bg-yellow-900/20";
        textColor = "text-yellow-400";
        borderColor = "border-yellow-500/30";
        icon = <Clock className="h-3.5 w-3.5 mr-1" />;
        break;
      case "rejected":
        bgColor = "bg-red-900/20";
        textColor = "text-red-400";
        borderColor = "border-red-500/30";
        icon = <XCircle className="h-3.5 w-3.5 mr-1" />;
        break;
      default:
        bgColor = "bg-gray-900/20";
        textColor = "text-gray-400";
        borderColor = "border-gray-500/30";
    }
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs border ${bgColor} ${textColor} ${borderColor}`}>
        {icon}
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <AdminLayout title="Registrations">
      <div className="space-y-6">
        {/* Overview stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-gray-900 border border-gray-800 p-4 flex items-center text-white">
            <div className="bg-indigo-900/30 p-3 rounded-lg mr-4">
              <Users className="h-5 w-5 text-indigo-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Total Registrations</p>
              <p className="text-2xl font-semibold">{statusCounts.all}</p>
            </div>
          </Card>
          
          <Card className="bg-gray-900 border border-gray-800 p-4 flex items-center text-white">
            <div className="bg-green-900/30 p-3 rounded-lg mr-4">
              <CheckCircle className="h-5 w-5 text-green-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Confirmed</p>
              <p className="text-2xl font-semibold">{statusCounts.confirmed}</p>
            </div>
          </Card>
          
          <Card className="bg-gray-900 border border-gray-800 p-4 flex items-center text-white">
            <div className="bg-yellow-900/30 p-3 rounded-lg mr-4">
              <Clock className="h-5 w-5 text-yellow-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Pending</p>
              <p className="text-2xl font-semibold">{statusCounts.pending}</p>
            </div>
          </Card>
          
          <Card className="bg-gray-900 border border-gray-800 p-4 flex items-center text-white">
            <div className="bg-red-900/30 p-3 rounded-lg mr-4">
              <XCircle className="h-5 w-5 text-red-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Rejected</p>
              <p className="text-2xl font-semibold">{statusCounts.rejected}</p>
            </div>
          </Card>
        </div>
        
        {/* Search and filter bar */}
        <div className="bg-gray-900 border border-gray-800 p-4 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input 
                className="pl-9 bg-gray-800 border-gray-700 text-gray-200 focus:border-indigo-500"
                placeholder="Search by name, email or organization..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-700">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" className="bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-700">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
          
          {/* Status filter tabs */}
          <div className="flex mt-4 border-b border-gray-800">
            {["all", "confirmed", "pending", "rejected"].map((status) => (
              <Button
                key={status}
                variant="ghost"
                className={`rounded-none border-b-2 px-4 py-2 ${
                  filterStatus === status 
                    ? "border-indigo-500 text-indigo-400" 
                    : "border-transparent text-gray-400 hover:text-gray-300"
                }`}
                onClick={() => setFilterStatus(status)}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
                <span className="ml-2 text-xs bg-gray-800 px-2 py-0.5 rounded-full">
                  {statusCounts[status as keyof typeof statusCounts]}
                </span>
              </Button>
            ))}
          </div>
        </div>
        
        {/* Registrations table */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-800/50">
                <tr>
                  <th className="text-left py-3 px-4 text-gray-400 text-xs font-medium">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      Name
                      <ArrowDownUp className="h-3 w-3 ml-1" />
                    </div>
                  </th>
                  <th className="text-left py-3 px-4 text-gray-400 text-xs font-medium">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-1" />
                      Email
                    </div>
                  </th>
                  <th className="text-left py-3 px-4 text-gray-400 text-xs font-medium">
                    <div className="flex items-center">
                      Organization
                    </div>
                  </th>
                  <th className="text-left py-3 px-4 text-gray-400 text-xs font-medium">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      Registration Date
                      <ArrowDownUp className="h-3 w-3 ml-1" />
                    </div>
                  </th>
                  <th className="text-left py-3 px-4 text-gray-400 text-xs font-medium">
                    Ticket Type
                  </th>
                  <th className="text-left py-3 px-4 text-gray-400 text-xs font-medium">
                    Status
                  </th>
                  <th className="text-left py-3 px-4 text-gray-400 text-xs font-medium">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredRegistrations.map((registration) => (
                  <tr key={registration.id} className="border-t border-gray-800 hover:bg-gray-800/30">
                    <td className="py-3 px-4 text-sm">
                      <div className="font-medium text-gray-200">{registration.name}</div>
                      <div className="text-xs text-gray-400">{registration.phone}</div>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-300">{registration.email}</td>
                    <td className="py-3 px-4 text-sm text-gray-300">{registration.organization}</td>
                    <td className="py-3 px-4 text-sm text-gray-300">{registration.registrationDate}</td>
                    <td className="py-3 px-4 text-sm text-gray-300">{registration.ticketType}</td>
                    <td className="py-3 px-4">
                      <StatusPill status={registration.status} />
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-blue-400 hover:text-blue-300 hover:bg-blue-900/20">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye">
                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                            <circle cx="12" cy="12" r="3"/>
                          </svg>
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-green-400 hover:text-green-300 hover:bg-green-900/20">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check">
                            <path d="M20 6 9 17l-5-5"/>
                          </svg>
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-red-400 hover:text-red-300 hover:bg-red-900/20">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                            <path d="M18 6 6 18"/>
                            <path d="m6 6 12 12"/>
                          </svg>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
                {filteredRegistrations.length === 0 && (
                  <tr>
                    <td colSpan={7} className="py-8 text-center text-gray-400">
                      No registrations found matching your criteria
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="py-3 px-4 bg-gray-900 border-t border-gray-800 flex items-center justify-between">
            <div className="text-sm text-gray-400">
              Showing <span className="font-medium text-gray-300">{filteredRegistrations.length}</span> out of <span className="font-medium text-gray-300">{registrations.length}</span> registrations
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-700" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" className="bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-700">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Registrations;
