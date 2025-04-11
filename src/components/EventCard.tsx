'use client'; // ✅ Add this if used inside app directory (for interactivity)

import { Button } from "@/components/ui/button";
import Link from "next/link"; // ✅ Replaces react-router-dom's Link

interface EventCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
  type: string;
  path: string;
}

const EventCard = ({ title, description, image, date, type, path }: EventCardProps) => {
  return (
    <Link href={path} className="block h-full">
      <div className="glass-card overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute top-3 right-3 bg-primary/90 text-white text-xs px-3 py-1 rounded-full">
            {type}
          </div>
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <div className="text-sm text-foreground/70 mb-2">{date}</div>
          <h3 className="font-display text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-foreground/80 mb-4 flex-grow">{description}</p>
          <Button
            variant="outline"
            className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors"
          >
            Explore
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
