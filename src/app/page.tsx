// app/page.tsx
"use client"
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/CountdownTimer";
import EventCard from "@/components/EventCard";
import ReviewCarousel from "@/components/ReviewCarousel";
import GalleryPreview from "@/components/GalleryPreview";
import { ChevronRight, Calendar, MapPin, Users, Check } from "lucide-react";

const Home = () => {
  const featuredEvents = [
    {
      id: 1,
      title: "Future of Islamic Finance",
      description: "Exploring blockchain and fintech innovations in Islamic banking and investment systems.",
      image: "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?...",
      date: "May 15, 2025",
      type: "Conference",
      path: "/events/islamic-finance",
    },
    // ... other events
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Countdown, Event Cards, etc. */}
        <CountdownTimer />
        <section className="grid gap-6 p-6 md:grid-cols-3">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </section>
        <ReviewCarousel />
        <GalleryPreview />
      </main>
      <Footer />
    </>
  );
};

export default Home;
