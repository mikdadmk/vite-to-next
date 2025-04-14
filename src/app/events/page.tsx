"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

const eventsData = [
  {
    id: "islamic-finance",
    title: "Future of Islamic Finance",
    description: "Exploring blockchain and fintech innovations in Islamic banking and investment systems.",
    image: "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    date: "May 15, 2025",
    time: "09:00 AM - 04:00 PM",
    location: "Dubai International Financial Centre",
    attendees: "500+",
    type: "Conference",
    path: "/events/islamic-finance",
    tags: ["Finance", "Blockchain", "Islamic Banking"]
  },
  {
    id: "ai-ethics",
    title: "AI Ethics Symposium",
    description: "Discussions on aligning artificial intelligence with Islamic ethics and global moral frameworks.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80",
    date: "May 16, 2025",
    time: "10:00 AM - 06:00 PM",
    location: "Knowledge Center, Dubai",
    attendees: "350+",
    type: "Symposium",
    path: "/events/ai-ethics",
    tags: ["AI", "Ethics", "Technology"]
  },
  {
    id: "smart-cities",
    title: "Smart Cities Workshop",
    description: "Practical approaches to implementing smart city technologies with cultural sensitivity.",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
    date: "May 17, 2025",
    time: "09:30 AM - 05:30 PM",
    location: "Urban Innovation Center, Dubai",
    attendees: "150+",
    type: "Workshop",
    path: "/events/smart-cities",
    tags: ["Smart Cities", "Urban Planning", "Technology"]
  },
  {
    id: "quantum-computing",
    title: "Quantum Computing Forum",
    description: "Exploring the frontiers of quantum computing and its implications for future technologies.",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    date: "May 18, 2025",
    time: "09:00 AM - 05:00 PM",
    location: "Future Technologies Center, Dubai",
    attendees: "300+",
    type: "Forum",
    path: "/events/quantum-computing",
    tags: ["Quantum", "Computing", "Innovation"]
  },
  {
    id: "sustainable-tech",
    title: "Sustainable Technology Expo",
    description: "Showcasing innovations in renewable energy and sustainable development aligned with Islamic principles.",
    image: "https://images.unsplash.com/photo-1473308822086-178fd4e9420d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1766&q=80",
    date: "May 19, 2025",
    time: "10:00 AM - 07:00 PM",
    location: "Green Innovation Park, Dubai",
    attendees: "1200+",
    type: "Expo",
    path: "/events/sustainable-tech",
    tags: ["Sustainability", "Energy", "Environment"]
  },
  {
    id: "digital-health",
    title: "Digital Health Innovations",
    description: "Exploring the intersection of healthcare technology and faith-based ethical considerations.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    date: "May 20, 2025",
    time: "09:00 AM - 05:30 PM",
    location: "Medical Innovation Center, Dubai",
    attendees: "400+",
    type: "Conference",
    path: "/events/digital-health",
    tags: ["Healthcare", "Digital", "Innovation"]
  }
];

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <section className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-display">
              Summit <span className="text-primary">Events</span>
            </h1>
            <p className="text-foreground/70 text-lg">
              Explore our specialized sessions, workshops, and keynotes designed to inspire innovation and foster collaboration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {eventsData.map((event) => (
              <div
                key={event.id}
                className="glass-card overflow-hidden border border-white/10 hover:border-primary/40 transition-all duration-300 flex flex-col h-full"
              >
                <div className="h-48 bg-gradient-to-br from-secondary/40 to-primary/40 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-foreground px-4 text-center">{event.title}</h3>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {event.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-foreground/70 mb-6">{event.description}</p>

                  <div className="mt-auto space-y-3">
                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <Calendar size={16} className="text-primary" />
                      <span>{event.date}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <Clock size={16} className="text-secondary" />
                      <span>{event.time}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <MapPin size={16} className="text-accent" />
                      <span>{event.location}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <Users size={16} className="text-primary" />
                      <span>{event.attendees} Expected Attendees</span>
                    </div>

                    <Button asChild className="w-full mt-4 bg-primary/20 hover:bg-primary/40 border border-primary/50 text-foreground">
                      <Link href={event.path}>View Event Details</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button asChild className="bg-primary hover:bg-primary/80 text-primary-foreground">
              <Link href="/schedule">View Full Schedule</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EventsPage;