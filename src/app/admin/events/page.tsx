'use client'

import { useState } from "react";
import {  useRouter } from "next/navigation";
import AdminLayout from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle, Search, Calendar, MapPin, Edit, Trash2 } from "lucide-react";
import AddEventForm from "@/components/AddEventForm";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import Link from "next/link";

// Sample events data
const initialEvents = [
  {
    id: "evt-001",
    title: "AI and Faith: Ethical Boundaries",
    type: "panel",
    date: "2025-05-15",
    time: "10:00",
    location: "Main Hall A",
    speaker: "Dr. Amina Khan",
    speakerTitle: "AI Ethics Researcher",
    path: "/events/ai-and-faith-ethical-boundaries",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e4"
  },
  {
    id: "evt-002",
    title: "Blockchain in Islamic Finance",
    type: "workshop",
    date: "2025-05-16",
    time: "14:00",
    location: "Workshop Room 3",
    speaker: "Yusuf Rahman",
    speakerTitle: "Fintech Consultant",
    path: "/events/blockchain-islamic-finance",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952"
  },
  {
    id: "evt-003",
    title: "Digital Community Building",
    type: "seminar",
    date: "2025-05-17",
    time: "11:30",
    location: "Seminar Room B",
    speaker: "Layla Ahmad",
    speakerTitle: "Community Strategist",
    path: "/events/digital-community-building",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87"
  }
];

const AdminEvents = () => {
  const [events, setEvents] = useState(initialEvents);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddEventOpen, setIsAddEventOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [isEventDetailOpen, setIsEventDetailOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();

  // Filter events based on search term
  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddEvent = (newEvent: any) => {
    // Check if this is an update to an existing event
    if (isEditMode && selectedEvent) {
      setEvents(prevEvents => 
        prevEvents.map(event => event.id === newEvent.id ? newEvent : event)
      );
      toast({
        title: "Event updated",
        description: "The event has been successfully updated"
      });
    } else {
      // This is a new event
      setEvents(prevEvents => [...prevEvents, newEvent]);
      toast({
        title: "Event added",
        description: "The new event has been successfully added"
      });
    }
  };

  const handleDeleteEvent = (id: string) => {
    setEvents(prevEvents => prevEvents.filter(event => event.id !== id));
    toast({
      title: "Event deleted",
      description: "The event has been successfully removed"
    });
  };

  const handleOpenEventDetail = (event: any) => {
    setSelectedEvent(event);
    setIsEventDetailOpen(true);
  };

  const handleEditQuickEvent = (event: any) => {
    setSelectedEvent(event);
    setIsEditMode(true);
    setIsAddEventOpen(true);
  };

  const getEventTypeBadgeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'workshop': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'panel': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case 'keynote': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'networking': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'seminar': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-300';
    }
  };

  return (
    <AdminLayout title="Events">
      <div className="mb-8 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Events Management</h1>
          <p className="text-gray-400">Manage summit events, workshops, and sessions</p>
        </div>
        <div className="flex gap-3">
          <Button 
            onClick={() => {
              setIsEditMode(false);
              setSelectedEvent(null);
              setIsAddEventOpen(true);
            }} 
            className="bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            <PlusCircle className="mr-2 h-4 w-4" /> Quick Add
          </Button>
          <Link href="/admin/eventDetail">
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <PlusCircle className="mr-2 h-4 w-4" /> Detailed Event
            </Button>
          </Link>
        </div>
      </div>

      <Card className="mb-6 bg-gray-900 border-gray-800">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-medium">Event Search</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search events by title, type, or location..."
              className="pl-9 bg-gray-800 border-gray-700 text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <Card 
              key={event.id} 
              className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors overflow-hidden cursor-pointer"
              onClick={() => handleOpenEventDetail(event)}
            >
              <div className="flex flex-col h-full">
                <div className="h-48 relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`text-xs px-2 py-1 rounded-full ${getEventTypeBadgeColor(event.type)}`}>
                      {event.type}
                    </span>
                  </div>
                </div>
                <div className="p-4 flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  
                  <div className="flex flex-col gap-2 text-sm text-gray-300">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-indigo-400" />
                      <span>{new Date(event.date).toLocaleDateString()} {event.time && `at ${event.time}`}</span>
                    </div>
                    {event.location && (
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-indigo-400" />
                        <span>{event.location}</span>
                      </div>
                    )}
                    {event.speaker && (
                      <div className="mt-1">
                        <span className="font-medium text-white">{event.speaker}</span>
                        {event.speakerTitle && <span className="text-gray-400"> · {event.speakerTitle}</span>}
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-4 pt-0 flex gap-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 border-gray-700 hover:bg-gray-800"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditQuickEvent(event);
                    }}
                  >
                    <Edit className="h-4 w-4 mr-2" /> Quick Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-gray-700 hover:bg-gray-800"
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(`/admin/event-detail/${event.id}/edit`);
                    }}
                  >
                    <Edit className="h-4 w-4 mr-2" /> Detailed
                  </Button>
                  <Button 
                    size="sm" 
                    variant="destructive" 
                    className="bg-red-900/30 hover:bg-red-900/50 text-red-300 border-red-900/50"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteEvent(event.id);
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))
        ) : (
          <div className="text-center p-8 border border-gray-800 rounded-lg bg-gray-900/50 col-span-3">
            <p className="text-gray-400">No events found matching your search criteria.</p>
          </div>
        )}
      </div>

      {/* Event Detail Dialog */}
      <Dialog open={isEventDetailOpen} onOpenChange={setIsEventDetailOpen}>
        <DialogContent className="bg-gray-900 border-gray-800 text-white max-w-4xl">
          {selectedEvent && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-bold text-white">{selectedEvent.title}</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                  <img
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    className="w-full h-48 object-cover rounded-md"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <span className={`text-xs px-2 py-1 rounded-full ${getEventTypeBadgeColor(selectedEvent.type)}`}>
                      {selectedEvent.type}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-indigo-400" />
                      <span>{new Date(selectedEvent.date).toLocaleDateString()} {selectedEvent.time && `at ${selectedEvent.time}`}</span>
                    </div>
                    {selectedEvent.location && (
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-indigo-400" />
                        <span>{selectedEvent.location}</span>
                      </div>
                    )}
                  </div>
                  {selectedEvent.speaker && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Speaker</h4>
                      <div>
                        <span className="font-medium text-white">{selectedEvent.speaker}</span>
                        {selectedEvent.speakerTitle && <span className="text-gray-400"> · {selectedEvent.speakerTitle}</span>}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <Button 
                  variant="outline" 
                  className="border-gray-700 hover:bg-gray-800"
                  onClick={() => {
                    setIsEventDetailOpen(false);
                    handleEditQuickEvent(selectedEvent);
                  }}
                >
                  <Edit className="h-4 w-4 mr-2" /> Quick Edit
                </Button>
                <Button 
                  className="bg-indigo-600 hover:bg-indigo-700 text-white"
                  onClick={() => {
                    setIsEventDetailOpen(false);
                    router.push(`/admin/event-detail/${selectedEvent.id}/edit`);
                  }}
                >
                  <Edit className="h-4 w-4 mr-2" /> Detailed Edit
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Add Event Form Modal */}
      <AddEventForm 
        isOpen={isAddEventOpen}
        onClose={() => {
          setIsAddEventOpen(false);
          setIsEditMode(false);
          setSelectedEvent(null);
        }}
        onAddEvent={handleAddEvent}
        isEditMode={isEditMode}
        eventToEdit={selectedEvent}
      />
    </AdminLayout>
  );
};

export default AdminEvents;
