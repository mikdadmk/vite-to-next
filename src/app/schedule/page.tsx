
"use client"

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useIsMobile } from "@/hooks/use-mobile";

// For a more complete implementation, this could be fetched from an API
const scheduleData = {
  day1: [
    {
      id: 1,
      time: "09:00 - 10:30",
      title: "Opening Ceremony & Keynote",
      speaker: "Dr. Ahmed Al-Farooq",
      location: "Main Hall",
      type: "Keynote",
      date: new Date("2025-05-15T09:00:00"),
    },
    {
      id: 2,
      time: "11:00 - 12:30",
      title: "Future of Islamic Finance",
      speaker: "Fatima Zahra & Panel",
      location: "Conference Room A",
      type: "Panel",
      date: new Date("2025-05-15T11:00:00"),
    },
    {
      id: 3,
      time: "13:30 - 15:00",
      title: "Blockchain & Islamic Banking",
      speaker: "Dr. Muhammad Siddiq",
      location: "Conference Room B",
      type: "Workshop",
      date: new Date("2025-05-15T13:30:00"),
    },
    {
      id: 4,
      time: "15:30 - 17:00",
      title: "Ethical AI Development",
      speaker: "Prof. Sarah Abdullah",
      location: "Tech Lab",
      type: "Workshop",
      date: new Date("2025-05-15T15:30:00"),
    },
    {
      id: 5,
      time: "17:30 - 19:00",
      title: "Networking Reception",
      speaker: "All Attendees",
      location: "Exhibition Hall",
      type: "Networking",
      date: new Date("2025-05-15T17:30:00"),
    }
  ],
  day2: [
    {
      id: 1,
      time: "09:00 - 10:30",
      title: "Quantum Computing & Islamic Research",
      speaker: "Dr. Jamal Hassan",
      location: "Main Hall",
      type: "Keynote",
      date: new Date("2025-05-16T09:00:00"),
    },
    {
      id: 2,
      time: "11:00 - 12:30",
      title: "Smart Cities & Cultural Preservation",
      speaker: "Eng. Omar Khalid",
      location: "Conference Room A",
      type: "Panel",
      date: new Date("2025-05-16T11:00:00"),
    },
    {
      id: 3,
      time: "13:30 - 15:00",
      title: "Metaverse & Virtual Hajj Experience",
      speaker: "Tech Team",
      location: "VR Lab",
      type: "Demo",
      date: new Date("2025-05-16T13:30:00"),
    },
    {
      id: 4,
      time: "15:30 - 17:00",
      title: "Sustainable Technology Solutions",
      speaker: "Dr. Amina Rahman",
      location: "Conference Room B",
      type: "Workshop",
      date: new Date("2025-05-16T15:30:00"),
    },
    {
      id: 5,
      time: "17:30 - 19:00",
      title: "Gala Dinner",
      speaker: "All Attendees",
      location: "Banquet Hall",
      type: "Networking",
      date: new Date("2025-05-16T17:30:00"),
    }
  ],
  day3: [
    {
      id: 1,
      time: "09:00 - 10:30",
      title: "Digital Health Innovations",
      speaker: "Dr. Layla Mahmoud",
      location: "Main Hall",
      type: "Keynote",
      date: new Date("2025-05-17T09:00:00"),
    },
    {
      id: 2,
      time: "11:00 - 12:30",
      title: "Faith-Based Tech Entrepreneurship",
      speaker: "Startup Founders Panel",
      location: "Conference Room A",
      type: "Panel",
      date: new Date("2025-05-17T11:00:00"),
    },
    {
      id: 3,
      time: "13:30 - 15:00",
      title: "Future of Islamic Education",
      speaker: "Education Experts",
      location: "Conference Room B",
      type: "Panel",
      date: new Date("2025-05-17T13:30:00"),
    },
    {
      id: 4,
      time: "15:30 - 17:00",
      title: "Concluding Panel & Future Directions",
      speaker: "Summit Leadership",
      location: "Main Hall",
      type: "Panel",
      date: new Date("2025-05-17T15:30:00"),
    },
    {
      id: 5,
      time: "17:30 - 18:30",
      title: "Closing Ceremony",
      speaker: "All Attendees",
      location: "Main Hall",
      type: "Ceremony",
      date: new Date("2025-05-17T17:30:00"),
    }
  ]
};

// Flatten the events array for filtering
const allEvents = Object.values(scheduleData).reduce((acc: any[], curr) => {
  return [...acc, ...curr];
}, []);

const Schedule = () => {
  const [filter, setFilter] = useState("all");
  const isMobile = useIsMobile();
  const currentDate = new Date();
  
  // Filter events based on the selected filter
  const filteredEvents = allEvents.filter((event) => {
    if (filter === "all") return true;
    if (filter === "coming-soon") return event.date > currentDate;
    if (filter === "finished") return event.date < currentDate;
    return true;
  });

  // Group filtered events by day
  const eventsByDay = {
    day1: filteredEvents.filter(event => event.date.getDate() === 15),
    day2: filteredEvents.filter(event => event.date.getDate() === 16),
    day3: filteredEvents.filter(event => event.date.getDate() === 17),
  };

  return (
    <>
      <Navbar />
      <div className="pt-20 min-h-screen">
        <section className="py-20 px-4 md:px-6 bg-accent/5">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Event Schedule
              </h1>
              <p className="text-foreground/70">
                Plan your summit experience with our comprehensive event schedule.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto mb-8">
              {isMobile ? (
                // Mobile: Dropdown filter
                <div className="w-full flex justify-center">
                  <Select value={filter} onValueChange={setFilter}>
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Filter events" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Events</SelectItem>
                      <SelectItem value="coming-soon">Coming Soon</SelectItem>
                      <SelectItem value="finished">Finished</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              ) : (
                // Desktop: Button filter
                <div className="flex justify-center space-x-2">
                  <button 
                    onClick={() => setFilter("all")}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      filter === "all" ? "bg-primary text-white" : "bg-background/50 text-foreground/70 hover:bg-accent/20"
                    }`}
                  >
                    All Events
                  </button>
                  <button 
                    onClick={() => setFilter("coming-soon")}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      filter === "coming-soon" ? "bg-primary text-white" : "bg-background/50 text-foreground/70 hover:bg-accent/20"
                    }`}
                  >
                    Coming Soon
                  </button>
                  <button 
                    onClick={() => setFilter("finished")}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      filter === "finished" ? "bg-primary text-white" : "bg-background/50 text-foreground/70 hover:bg-accent/20"
                    }`}
                  >
                    Finished
                  </button>
                </div>
              )}
            </div>

            <Tabs defaultValue="day1" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="day1">Day 1 (May 15)</TabsTrigger>
                <TabsTrigger value="day2">Day 2 (May 16)</TabsTrigger>
                <TabsTrigger value="day3">Day 3 (May 17)</TabsTrigger>
              </TabsList>
              
              {Object.entries(eventsByDay).map(([day, events]) => (
                <TabsContent key={day} value={day} className="space-y-6">
                  {events.length > 0 ? (
                    events.map((event) => (
                      <div 
                        key={event.id} 
                        className="glass-card p-5 transition-all hover:shadow-lg flex flex-col md:flex-row gap-4 md:gap-8"
                      >
                        <div className="md:w-1/4">
                          <div className="font-display font-bold text-lg text-primary">{event.time}</div>
                          <div className="text-sm text-foreground/70 mt-1">{event.location}</div>
                          <div className="inline-block bg-primary/10 text-primary text-xs px-3 py-1 rounded-full mt-2">
                            {event.type}
                          </div>
                        </div>
                        <div className="md:w-3/4">
                          <h3 className="font-display text-xl font-semibold mb-2">{event.title}</h3>
                          <div className="text-sm flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user text-accent">
                              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                              <circle cx="12" cy="7" r="4" />
                            </svg>
                            <span className="text-foreground/80">{event.speaker}</span>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-10">
                      <p className="text-foreground/70">No events matching your filter for this day.</p>
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Schedule;
