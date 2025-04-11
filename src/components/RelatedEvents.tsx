
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

interface EventType {
  id: string;
  title: string;
  date: string;
  path?: string;
  [key: string]: any;
}

interface RelatedEventsProps {
  events: EventType[];
  currentEventId: string;
}

const RelatedEvents = ({ events, currentEventId }: RelatedEventsProps) => {
  const relatedEvents = events
    .filter(event => event.id !== currentEventId)
    .slice(0, 2);
  
  if (relatedEvents.length === 0) return null;
  
  return (
    <>
      {relatedEvents.map((event) => (
        <Link 
          key={event.id} 
          to={event.path || `/events/${event.id}`}
          className="glass-card p-4 hover:bg-primary/5 transition-colors"
        >
          <h3 className="font-semibold mb-2">{event.title}</h3>
          <div className="flex items-center text-sm text-foreground/70">
            <Calendar size={14} className="mr-2 text-primary" />
            <span>{event.date}</span>
          </div>
        </Link>
      ))}
    </>
  );
};

export default RelatedEvents;
