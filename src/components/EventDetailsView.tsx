
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, User, Tag, Users, ImagePlus, FilePlus, Edit, Eye, Trash2 } from "lucide-react";
import Link from "next/link";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import EventDetailForm from "@/components/EventDetailForm";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";

interface EventDetailsViewProps {
  eventId?: string;
  isEditMode?: boolean;
}

const EventDetailsView = ({ eventId, isEditMode }: EventDetailsViewProps) => {
  const [isAddDetailsOpen, setIsAddDetailsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [isEventDetailOpen, setIsEventDetailOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [eventToDelete, setEventToDelete] = useState<string | null>(null);
  const router = useRouter();
  
  // Mock events data - in a real app this would come from an API call
  const events = [
    {
      id: eventId || "event-1",
      title: "AI and Faith: Ethical Boundaries",
      type: "panel",
      date: "2025-05-15",
      time: "10:00",
      location: "Main Hall A",
      speaker: "Dr. Amina Khan",
      speakerTitle: "AI Ethics Researcher",
      description: "A detailed discussion on the ethical implications of AI in religious contexts and how faith communities can respond to technological changes.",
      capacity: "150",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e4"
    },
    {
      id: "event-2",
      title: "Blockchain in Islamic Finance",
      type: "workshop",
      date: "2025-05-16",
      time: "14:00",
      location: "Workshop Room 3",
      speaker: "Yusuf Rahman",
      speakerTitle: "Fintech Consultant",
      description: "Exploring the potential of blockchain technology in Islamic finance and its implications for the future of financial systems.",
      capacity: "80",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952"
    },
    {
      id: "event-3",
      title: "Digital Community Building",
      type: "seminar",
      date: "2025-05-17",
      time: "11:30",
      location: "Seminar Room B",
      speaker: "Layla Ahmad",
      speakerTitle: "Community Strategist",
      description: "Strategies for building and maintaining digital communities centered around faith and shared values.",
      capacity: "120",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87"
    }
  ];

  // Find the current event if an ID is provided
  const currentEvent = events.find(e => e.id === eventId);
  
  // Initialize form with the current event if in edit mode
  const initialFormData = isEditMode && currentEvent ? currentEvent : null;

  const handleSubmit = (data: any) => {
    console.log("Form submitted with data:", data);
    
    toast({
      title: "Event details saved",
      description: "The event details have been successfully saved",
    });
    
    setIsAddDetailsOpen(false);
    
    // Redirect to events page after saving
    setTimeout(() => {
      router.push("/admin/events");
    }, 1500);
  };

  const handleOpenEventDetail = (event: any) => {
    setSelectedEvent(event);
    setIsEventDetailOpen(true);
  };

  const handleDeleteEvent = (id: string) => {
    setEventToDelete(id);
    setIsDeleteDialogOpen(true);
  };

  const confirmDeleteEvent = () => {
    // In a real app, you would call an API to delete the event
    toast({
      title: "Event deleted",
      description: "The event has been successfully deleted",
    });
    setIsDeleteDialogOpen(false);
    
    // Redirect to events page after deleting
    setTimeout(() => {
      router.push("/admin/events");
    }, 1500);
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
    <div className="space-y-6">
      {/* Top controls */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Event Management</h2>
          <p className="text-gray-400 mt-1">Create and manage event details</p>
        </div>
        {!isEditMode && (
          <Button 
            onClick={() => setIsAddDetailsOpen(true)} 
            className="bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            <FilePlus className="mr-2 h-4 w-4" /> Add Event Details
          </Button>
        )}
        {isEditMode && currentEvent && (
          <Button 
            onClick={() => setIsAddDetailsOpen(true)} 
            className="bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            <Edit className="mr-2 h-4 w-4" /> Edit Event Details
          </Button>
        )}
      </div>
      
      {/* Event Boxes Grid - Three columns */}
      {!isEditMode && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card 
              key={event.id} 
              className="bg-gray-900 border-gray-800 hover:border-indigo-500/30 transition-all cursor-pointer overflow-hidden"
              onClick={() => handleOpenEventDetail(event)}
            >
              <div className="relative">
                {/* Event Image */}
                <div className="h-40 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                {/* Event Type Badge */}
                <span className={`absolute top-3 right-3 text-xs px-2 py-1 rounded-full ${getEventTypeBadgeColor(event.type)}`}>
                  {event.type}
                </span>
              </div>
              
              <CardContent className="p-4">
                <h3 className="text-lg font-bold text-white line-clamp-1">{event.title}</h3>
                
                <div className="mt-3 space-y-2 text-sm">
                  <div className="flex items-center text-gray-400">
                    <Calendar className="h-4 w-4 mr-2 text-indigo-400" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Clock className="h-4 w-4 mr-2 text-indigo-400" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <MapPin className="h-4 w-4 mr-2 text-indigo-400" />
                    <span className="truncate">{event.location}</span>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-4">
                  <Button 
                    size="sm"
                    variant="outline"
                    className="flex-1 border-gray-700 hover:bg-gray-800 text-indigo-400"
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(`/admin/event-detail/${event.id}/edit`);
                    }}
                  >
                    <Edit className="h-4 w-4 mr-1" /> Edit
                  </Button>
                  <Button 
                    size="sm"
                    variant="destructive"
                    className="flex-1 bg-red-900/30 hover:bg-red-900/50 text-red-300 border-red-900/50"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteEvent(event.id);
                    }}
                  >
                    <Trash2 className="h-4 w-4 mr-1" /> Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      
      {/* Single Event View when in Edit Mode */}
      {isEditMode && currentEvent && (
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="h-48 overflow-hidden rounded-md">
                  <img 
                    src={currentEvent.image} 
                    alt={currentEvent.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-bold text-white">{currentEvent.title}</h2>
                <span className={`inline-block text-xs px-2 py-1 rounded-full ${getEventTypeBadgeColor(currentEvent.type)}`}>
                  {currentEvent.type}
                </span>
                <p className="text-gray-300">{currentEvent.description}</p>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-white">Event Details</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-indigo-400 mt-0.5" />
                      <div>
                        <div className="text-sm text-gray-400">Date</div>
                        <div className="text-white">{new Date(currentEvent.date).toLocaleDateString()}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-indigo-400 mt-0.5" />
                      <div>
                        <div className="text-sm text-gray-400">Time</div>
                        <div className="text-white">{currentEvent.time}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-indigo-400 mt-0.5" />
                      <div>
                        <div className="text-sm text-gray-400">Location</div>
                        <div className="text-white">{currentEvent.location}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-indigo-400 mt-0.5" />
                      <div>
                        <div className="text-sm text-gray-400">Capacity</div>
                        <div className="text-white">{currentEvent.capacity} people</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-white">Speaker</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <User className="h-5 w-5 text-indigo-400 mt-0.5" />
                      <div>
                        <div className="text-sm text-gray-400">Name</div>
                        <div className="text-white">{currentEvent.speaker}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5" /> {/* Spacer for alignment */}
                      <div>
                        <div className="text-sm text-gray-400">Title</div>
                        <div className="text-white">{currentEvent.speakerTitle}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 flex gap-3 justify-end">
                  <Button 
                    onClick={() => router.push("/admin/events")} 
                    variant="outline" 
                    className="border-gray-700 hover:bg-gray-800 text-white"
                  >
                    Back to Events
                  </Button>
                  <Button 
                    onClick={() => setIsAddDetailsOpen(true)}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white"
                  >
                    <Edit className="h-4 w-4 mr-2" /> Edit Event
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
      
      {/* Event Detail Dialog */}
      <Dialog open={isEventDetailOpen} onOpenChange={setIsEventDetailOpen}>
        <DialogContent className="bg-gray-900 border-gray-800 text-white max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedEvent && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-bold text-white">{selectedEvent.title}</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                <div className="space-y-4">
                  {/* Basic Information */}
                  <div>
                    <h3 className="text-lg font-medium text-white mb-3">Basic Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Tag className="h-5 w-5 text-indigo-400 mt-0.5" />
                        <div>
                          <div className="text-sm text-gray-400">Event Type</div>
                          <div className="text-white capitalize">{selectedEvent.type}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-indigo-400 mt-0.5" />
                        <div>
                          <div className="text-sm text-gray-400">Date</div>
                          <div className="text-white">{new Date(selectedEvent.date).toLocaleDateString()}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-indigo-400 mt-0.5" />
                        <div>
                          <div className="text-sm text-gray-400">Time</div>
                          <div className="text-white">{selectedEvent.time}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-indigo-400 mt-0.5" />
                        <div>
                          <div className="text-sm text-gray-400">Location</div>
                          <div className="text-white">{selectedEvent.location}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-indigo-400 mt-0.5" />
                        <div>
                          <div className="text-sm text-gray-400">Capacity</div>
                          <div className="text-white">{selectedEvent.capacity} people</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Speaker Information */}
                  <div>
                    <h3 className="text-lg font-medium text-white mb-3">Speaker Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <User className="h-5 w-5 text-indigo-400 mt-0.5" />
                        <div>
                          <div className="text-sm text-gray-400">Speaker</div>
                          <div className="text-white">{selectedEvent.speaker}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5" /> {/* Spacer for alignment */}
                        <div>
                          <div className="text-sm text-gray-400">Title</div>
                          <div className="text-white">{selectedEvent.speakerTitle}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {/* Event Image */}
                  <div>
                    <h3 className="text-lg font-medium text-white mb-3">Event Image</h3>
                    <div className="border border-gray-800 rounded-md overflow-hidden h-48">
                      {selectedEvent.image ? (
                        <img src={selectedEvent.image} alt={selectedEvent.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="flex items-center justify-center h-full bg-gray-800">
                          <ImagePlus className="h-8 w-8 text-gray-600" />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div>
                    <h3 className="text-lg font-medium text-white mb-3">Description</h3>
                    <div className="text-gray-300 text-sm">
                      {selectedEvent.description}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end gap-3 mt-6">
                <Button 
                  variant="outline" 
                  className="border-gray-700 hover:bg-gray-800 text-white"
                  onClick={() => setIsEventDetailOpen(false)}
                >
                  Close
                </Button>
                <Button 
                  className="bg-indigo-600 hover:bg-indigo-700 text-white"
                  onClick={() => {
                    setIsEventDetailOpen(false);
                    router.push(`/admin/event-detail/${selectedEvent.id}/edit`);
                  }}
                >
                  <Edit className="h-4 w-4 mr-2" /> Edit Event
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
      
      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent className="bg-gray-900 border-gray-800 text-white">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white">Confirm Deletion</AlertDialogTitle>
            <AlertDialogDescription className="text-gray-400">
              Are you sure you want to delete this event? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-gray-800 text-gray-200 border-gray-700">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction 
              className="bg-red-600 hover:bg-red-700 text-white"
              onClick={confirmDeleteEvent}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      
      {/* Form Dialog for adding or editing event details */}
      <Dialog open={isAddDetailsOpen} onOpenChange={setIsAddDetailsOpen}>
        <DialogContent className="bg-gray-900 border-gray-800 text-white max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-white">
              {isEditMode ? "Edit Event Details" : "Add Event Details"}
            </DialogTitle>
          </DialogHeader>
          <EventDetailForm 
            initialData={initialFormData}
            onSubmit={handleSubmit} 
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EventDetailsView;
