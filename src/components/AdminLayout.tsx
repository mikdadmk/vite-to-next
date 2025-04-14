'use client';

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { 
  Calendar, Users, BarChart3, MessageSquare, 
  GalleryHorizontal, Settings, BookOpen, Menu, 
  LogOut, ExternalLink, LineChart, Info
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Link from "next/link";

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}

const upcomingEvents = [
  { 
    id: "event-1", 
    title: "Keynote: Future of AI in Faith",
    date: "2025-05-15",
    time: "09:00 AM",
    location: "Main Hall"
  },
  { 
    id: "event-2", 
    title: "Workshop: Ethical Technology",
    date: "2025-05-15", 
    time: "11:30 AM",
    location: "Room 203"
  },
  { 
    id: "event-3", 
    title: "Panel: Bridging Traditions & Innovation",
    date: "2025-05-16", 
    time: "10:00 AM",
    location: "Conference Room A"
  }
];

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC'
  };
  return new Intl.DateTimeFormat('en-GB', options).format(new Date(dateString));
};

const AdminLayout = ({ children, title }: AdminLayoutProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEventsPopoverOpen, setIsEventsPopoverOpen] = useState(false);

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    router.push("/login");
  };

  const menuItems = [
    { path: "/admin/dashboard", label: "Dashboard", icon: <BarChart3 className="w-5 h-5" /> },
    { path: "/admin/analytics", label: "Analytics", icon: <LineChart className="w-5 h-5" /> },
    { path: "/admin/registrations", label: "Registrations", icon: <Users className="w-5 h-5" /> },
    { path: "/admin/events", label: "Events", icon: <BookOpen className="w-5 h-5" /> },
    { path: "/admin/schedule", label: "Schedule", icon: <Calendar className="w-5 h-5" /> },
    { path: "/admin/messages", label: "Messages", icon: <MessageSquare className="w-5 h-5" /> },
    { path: "/admin/gallery", label: "Gallery", icon: <GalleryHorizontal className="w-5 h-5" /> },
    { path: "/admin/settings", label: "Settings", icon: <Settings className="w-5 h-5" /> },
  ];

  const SidebarContent = () => (
    <>
      <div className="p-4 border-b border-gray-800 flex items-center justify-between">
        <h2 className="font-display text-xl font-bold text-white">Admin Panel</h2>
      </div>
      <nav className="p-4 flex-1 overflow-y-auto">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                  pathname === item.path
                    ? "bg-indigo-600/30 text-white"
                    : "text-gray-400 hover:bg-gray-800/50 hover:text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <h3 className="px-4 text-sm font-semibold text-gray-400 uppercase tracking-wider">
            Upcoming Events
          </h3>
          <div className="mt-2 space-y-1.5">
            {upcomingEvents.slice(0, 2).map((event) => (
              <Link
                key={event.id}
                href={`/admin/event-detail/${event.id}`}
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 hover:text-white rounded-md"
              >
                <div className="font-medium truncate">{event.title}</div>
                <div className="text-xs text-gray-500 flex items-center mt-1">
                  <Calendar className="w-3 h-3 mr-1" />
                  {formatDate(event.date)} • {event.time}
                </div>
              </Link>
            ))}
            {upcomingEvents.length > 2 && (
              <Link
                href="/admin/events"
                className="block px-4 py-2 text-xs text-indigo-400 hover:text-indigo-300"
              >
                View all events ({upcomingEvents.length})
              </Link>
            )}
          </div>
        </div>
      </nav>
      <div className="p-4 border-t border-gray-800">
        <Link 
          href="/" 
          className="w-full mb-3 px-4 py-2 text-sm flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 rounded-md transition-colors text-white"
        >
          <ExternalLink size={16} /> Return to Site
        </Link>
        <button
          onClick={handleLogout}
          className="w-full px-4 py-2 text-sm flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 rounded-md transition-colors text-gray-200"
        >
          <LogOut size={16} /> Logout
        </button>
      </div>
    </>
  );

  return (
    <div className="h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="bg-gray-900 text-white w-64 flex-shrink-0 hidden md:flex md:flex-col border-r border-gray-800">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent side="left" className="p-0 w-64 bg-gray-900 text-white border-r-0 border-gray-800">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Main content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden bg-gray-950">
        <header className="bg-gray-900 border-b border-gray-800 p-4 shadow-md">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden text-gray-300 hover:text-white hover:bg-gray-800" 
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </Button>
              <h1 className="text-xl font-bold text-white">{title}</h1>
            </div>

            <Popover open={isEventsPopoverOpen} onOpenChange={setIsEventsPopoverOpen}>
              <PopoverTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="hidden md:flex items-center gap-2 border-gray-700 bg-gray-800 hover:bg-gray-700 text-gray-200"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Events</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-0 bg-gray-800 border-gray-700 text-white" align="end">
                <div className="p-4 border-b border-gray-700">
                  <h3 className="font-semibold">Upcoming Events</h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Quick overview of scheduled events
                  </p>
                </div>
                <div className="divide-y divide-gray-700">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="p-3 hover:bg-gray-700/50 transition-colors">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium">{event.title}</h4>
                        <Link 
                          href={`/admin/event-detail/${event.id}`}
                          className="text-xs text-indigo-400 hover:text-indigo-300"
                        >
                          Details
                        </Link>
                      </div>
                      <div className="flex items-center gap-4 mt-1.5 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div>{event.time}</div>
                      </div>
                      <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                        <Info className="h-3 w-3" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-3 border-t border-gray-700">
                  <Link 
                    href="/admin/events" 
                    className="block w-full text-center text-sm text-indigo-400 hover:text-indigo-300 py-1"
                  >
                    Manage All Events
                  </Link>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </header>
        <main className="flex-1 overflow-hidden bg-gray-950">
          <ScrollArea className="h-full p-6">
            <div className="container mx-auto">
              {children}
            </div>
          </ScrollArea>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
