'use client'
import { useState } from "react";
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from "recharts";
import { Calendar, Users, ChevronDown, TrendingUp, TrendingDown, DollarSign, Globe } from "lucide-react";
import AdminLayout from "@/components/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample data for charts
const attendanceData = [
  { name: "Jan", count: 210 },
  { name: "Feb", count: 280 },
  { name: "Mar", count: 350 },
  { name: "Apr", count: 420 },
  { name: "May", count: 580 },
  { name: "Jun", count: 620 },
  { name: "Jul", count: 710 },
  { name: "Aug", count: 830 },
  { name: "Sep", count: 920 },
  { name: "Oct", count: 1050 },
  { name: "Nov", count: 1180 },
  { name: "Dec", count: 1320 }
];

const eventsData = [
  { name: "Jan", workshops: 5, panels: 2, keynotes: 1 },
  { name: "Feb", workshops: 6, panels: 3, keynotes: 1 },
  { name: "Mar", workshops: 8, panels: 4, keynotes: 2 },
  { name: "Apr", workshops: 10, panels: 5, keynotes: 2 },
  { name: "May", workshops: 12, panels: 6, keynotes: 3 },
  { name: "Jun", workshops: 15, panels: 7, keynotes: 3 },
];

const registrationSourceData = [
  { name: "Website", value: 65 },
  { name: "Social Media", value: 20 },
  { name: "Email", value: 10 },
  { name: "Partner Orgs", value: 5 }
];

const COLORS = ['#E8B341', '#9B87F5', '#53B4DF', '#3ECF8E'];

const Analytics = () => {
  const [timeframe, setTimeframe] = useState("yearly");

  // Summary metrics - would be fetched from API in a real app
  const summaryMetrics = {
    totalRegistrations: 4520,
    registrationsGrowth: 24.8,
    totalRevenue: 325600,
    revenueGrowth: 18.5,
    totalEvents: 85,
    eventsGrowth: 12.3,
    avgSatisfaction: 4.7
  };

  // Top countries - would be fetched from API in a real app
  const topCountries = [
    { name: "United Arab Emirates", count: 2150, percentage: 47.5 },
    { name: "Saudi Arabia", count: 850, percentage: 18.8 },
    { name: "Qatar", count: 420, percentage: 9.3 },
    { name: "United States", count: 380, percentage: 8.4 },
    { name: "United Kingdom", count: 310, percentage: 6.9 }
  ];

  return (
    <AdminLayout title="Analytics Dashboard">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 text-sm mb-1">Total Registrations</p>
                <h3 className="text-2xl font-bold text-white">{summaryMetrics.totalRegistrations.toLocaleString()}</h3>
                <div className={`flex items-center text-sm mt-1 ${summaryMetrics.registrationsGrowth > 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {summaryMetrics.registrationsGrowth > 0 ? 
                    <TrendingUp className="h-4 w-4 mr-1" /> : 
                    <TrendingDown className="h-4 w-4 mr-1" />
                  }
                  <span>{Math.abs(summaryMetrics.registrationsGrowth)}% from last year</span>
                </div>
              </div>
              <div className="bg-indigo-500/20 p-2 rounded-md">
                <Users className="h-6 w-6 text-indigo-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 text-sm mb-1">Total Revenue</p>
                <h3 className="text-2xl font-bold text-white">${summaryMetrics.totalRevenue.toLocaleString()}</h3>
                <div className={`flex items-center text-sm mt-1 ${summaryMetrics.revenueGrowth > 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {summaryMetrics.revenueGrowth > 0 ? 
                    <TrendingUp className="h-4 w-4 mr-1" /> : 
                    <TrendingDown className="h-4 w-4 mr-1" />
                  }
                  <span>{Math.abs(summaryMetrics.revenueGrowth)}% from last year</span>
                </div>
              </div>
              <div className="bg-green-500/20 p-2 rounded-md">
                <DollarSign className="h-6 w-6 text-green-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 text-sm mb-1">Total Events</p>
                <h3 className="text-2xl font-bold text-white">{summaryMetrics.totalEvents}</h3>
                <div className={`flex items-center text-sm mt-1 ${summaryMetrics.eventsGrowth > 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {summaryMetrics.eventsGrowth > 0 ? 
                    <TrendingUp className="h-4 w-4 mr-1" /> : 
                    <TrendingDown className="h-4 w-4 mr-1" />
                  }
                  <span>{Math.abs(summaryMetrics.eventsGrowth)}% from last year</span>
                </div>
              </div>
              <div className="bg-purple-500/20 p-2 rounded-md">
                <Calendar className="h-6 w-6 text-purple-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 text-sm mb-1">Avg. Satisfaction</p>
                <h3 className="text-2xl font-bold text-white">{summaryMetrics.avgSatisfaction}/5</h3>
                <div className="flex items-center text-sm mt-1 text-yellow-400">
                  {"★".repeat(Math.floor(summaryMetrics.avgSatisfaction))}
                  {summaryMetrics.avgSatisfaction % 1 >= 0.5 ? "½" : ""}
                </div>
              </div>
              <div className="bg-yellow-500/20 p-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filter Controls */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white">Performance Metrics</h2>
        <div className="flex gap-2">
          <Select value={timeframe} onValueChange={setTimeframe}>
            <SelectTrigger className="w-[180px] bg-gray-800 border-gray-700 text-white">
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700 text-white">
              <SelectItem value="monthly">Last 30 Days</SelectItem>
              <SelectItem value="quarterly">Last Quarter</SelectItem>
              <SelectItem value="yearly">Last Year</SelectItem>
              <SelectItem value="all">All Time</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-white mb-4">Registration Growth</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={attendanceData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="name" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#333', borderColor: '#555' }}
                    labelStyle={{ color: '#fff' }}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="count" 
                    name="Registrations"
                    stroke="#E8B341" 
                    strokeWidth={2}
                    activeDot={{ r: 8 }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-white mb-4">Events by Type</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={eventsData} 
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="name" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#333', borderColor: '#555' }}
                    labelStyle={{ color: '#fff' }}
                  />
                  <Legend />
                  <Bar dataKey="workshops" name="Workshops" fill="#9B87F5" barSize={20} />
                  <Bar dataKey="panels" name="Panel Discussions" fill="#53B4DF" barSize={20} />
                  <Bar dataKey="keynotes" name="Keynotes" fill="#3ECF8E" barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Charts & Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-white mb-4">Registration Sources</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={registrationSourceData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {registrationSourceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#333', borderColor: '#555' }}
                    labelStyle={{ color: '#fff' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 lg:col-span-2 bg-gray-900 border-gray-800">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-white mb-4">Top Attendee Countries</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="pb-2 text-gray-400 font-medium">Country</th>
                    <th className="pb-2 text-gray-400 font-medium">Registrations</th>
                    <th className="pb-2 text-gray-400 font-medium">Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  {topCountries.map((country, i) => (
                    <tr key={i} className="border-b border-gray-800">
                      <td className="py-3 flex items-center">
                        <Globe className="h-4 w-4 mr-2 text-indigo-400" />
                        <span className="text-white">{country.name}</span>
                      </td>
                      <td className="py-3 text-white">{country.count.toLocaleString()}</td>
                      <td className="py-3">
                        <div className="flex items-center">
                          <div className="w-full bg-gray-700 rounded-full h-2 mr-2">
                            <div 
                              className="bg-indigo-500 h-2 rounded-full" 
                              style={{ width: `${country.percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-white text-sm">{country.percentage}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Insights Section */}
      <Tabs defaultValue="monthly" className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Performance Insights</h2>
          <TabsList className="bg-gray-800">
            <TabsTrigger value="monthly" className="data-[state=active]:bg-indigo-600">Monthly</TabsTrigger>
            <TabsTrigger value="quarterly" className="data-[state=active]:bg-indigo-600">Quarterly</TabsTrigger>
            <TabsTrigger value="yearly" className="data-[state=active]:bg-indigo-600">Yearly</TabsTrigger>
          </TabsList>
        </div>

        <Card className="bg-gray-900 border-gray-800">
          <TabsContent value="monthly">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Monthly Insights</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-gray-300 mb-2">Most Popular Event Types</p>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-800 p-4 rounded-lg text-center">
                      <p className="text-indigo-400 text-2xl font-bold">42%</p>
                      <p className="text-gray-400 text-sm">Workshops</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg text-center">
                      <p className="text-indigo-400 text-2xl font-bold">28%</p>
                      <p className="text-gray-400 text-sm">Panels</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg text-center">
                      <p className="text-indigo-400 text-2xl font-bold">30%</p>
                      <p className="text-gray-400 text-sm">Keynotes</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <p className="text-gray-300 mb-2">Registration Peak Times</p>
                  <div className="h-40">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={[
                        { hour: '8AM', registrations: 42 },
                        { hour: '9AM', registrations: 78 },
                        { hour: '10AM', registrations: 95 },
                        { hour: '11AM', registrations: 120 },
                        { hour: '12PM', registrations: 85 },
                        { hour: '1PM', registrations: 75 },
                        { hour: '2PM', registrations: 98 },
                        { hour: '3PM', registrations: 110 },
                        { hour: '4PM', registrations: 85 },
                        { hour: '5PM', registrations: 62 },
                        { hour: '6PM', registrations: 45 },
                        { hour: '7PM', registrations: 30 },
                      ]}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                        <XAxis dataKey="hour" stroke="#888" />
                        <YAxis stroke="#888" />
                        <Tooltip
                          contentStyle={{ backgroundColor: '#333', borderColor: '#555' }}
                          labelStyle={{ color: '#fff' }}
                        />
                        <Bar dataKey="registrations" fill="#E8B341" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </CardContent>
          </TabsContent>
          
          <TabsContent value="quarterly">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Quarterly Insights</h3>
              <p className="text-gray-300">Registration trends show a 24% increase compared to the previous quarter, with an emphasis on technical workshops and spiritual discussions.</p>
              
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-4">
                    <h4 className="text-white font-medium mb-2">Top Growing Segments</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between items-center">
                        <span className="text-gray-300">Tech Professionals</span>
                        <span className="text-green-400">+32%</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-gray-300">Religious Scholars</span>
                        <span className="text-green-400">+28%</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-gray-300">University Students</span>
                        <span className="text-green-400">+24%</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-4">
                    <h4 className="text-white font-medium mb-2">Regional Growth</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between items-center">
                        <span className="text-gray-300">Middle East</span>
                        <span className="text-green-400">+35%</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-gray-300">Europe</span>
                        <span className="text-green-400">+22%</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-gray-300">North America</span>
                        <span className="text-green-400">+18%</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </TabsContent>
          
          <TabsContent value="yearly">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Yearly Performance Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-indigo-400 font-medium mb-2">Attendance Growth</h4>
                  <p className="text-4xl font-bold text-white mb-1">+148%</p>
                  <p className="text-sm text-gray-400">Year-over-year growth in total attendance</p>
                </div>
                
                <div>
                  <h4 className="text-indigo-400 font-medium mb-2">Revenue Increase</h4>
                  <p className="text-4xl font-bold text-white mb-1">$325K</p>
                  <p className="text-sm text-gray-400">Total revenue from registrations and sponsorships</p>
                </div>
                
                <div>
                  <h4 className="text-indigo-400 font-medium mb-2">New Partnerships</h4>
                  <p className="text-4xl font-bold text-white mb-1">24</p>
                  <p className="text-sm text-gray-400">New strategic partnerships formed</p>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-white font-medium mb-3">Annual Goals Progress</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300 text-sm">Attendance Goal (5,000)</span>
                      <span className="text-gray-300 text-sm">90%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-indigo-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300 text-sm">Revenue Goal ($350K)</span>
                      <span className="text-gray-300 text-sm">93%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "93%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300 text-sm">Satisfaction Score (4.8/5)</span>
                      <span className="text-gray-300 text-sm">98%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "98%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </TabsContent>
        </Card>
      </Tabs>
    </AdminLayout>
  );
};

export default Analytics;
