
import { useState, useEffect } from "react";
import { X, Calendar, Clock, MapPin, Users, ImagePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface AddEventFormProps {
  isOpen: boolean;
  onClose: () => void;
  onAddEvent: (event: any) => void;
  isEditMode?: boolean;
  eventToEdit?: any;
}

const AddEventForm = ({ isOpen, onClose, onAddEvent, isEditMode = false, eventToEdit = null }: AddEventFormProps) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    type: "workshop",
    capacity: "",
    image: "",
    speaker: "",
    speakerTitle: "",
  });

  // Add useEffect to populate form data when in edit mode
  useEffect(() => {
    if (isEditMode && eventToEdit) {
      setFormData({
        title: eventToEdit.title || "",
        description: eventToEdit.description || "",
        date: eventToEdit.date || "",
        time: eventToEdit.time || "",
        location: eventToEdit.location || "",
        type: eventToEdit.type || "workshop",
        capacity: eventToEdit.capacity || "",
        image: eventToEdit.image || "",
        speaker: eventToEdit.speaker || "",
        speakerTitle: eventToEdit.speakerTitle || "",
      });
    } else {
      // Reset form when not in edit mode
      setFormData({
        title: "",
        description: "",
        date: "",
        time: "",
        location: "",
        type: "workshop",
        capacity: "",
        image: "",
        speaker: "",
        speakerTitle: "",
      });
    }
  }, [isEditMode, eventToEdit, isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.title || !formData.date || !formData.description) {
      toast({
        title: "Please fill out all required fields",
        description: "Title, date and description are required",
      });
      return;
    }

    // Create a new event object with a unique ID or use existing ID when editing
    const updatedEvent = {
      id: isEditMode && eventToEdit ? eventToEdit.id : `event-${Date.now()}`,
      ...formData,
      path: isEditMode && eventToEdit?.path ? eventToEdit.path : `/events/${Date.now()}`,
    };

    onAddEvent(updatedEvent);
    toast({
      title: isEditMode ? "Event Updated Successfully" : "Event Added Successfully",
      description: isEditMode ? "The event has been updated in the schedule" : "The new event has been added to the schedule",
    });
    
    // Reset form data
    setFormData({
      title: "",
      description: "",
      date: "",
      time: "",
      location: "",
      type: "workshop",
      capacity: "",
      image: "",
      speaker: "",
      speakerTitle: "",
    });
    
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-900 border-gray-800 text-white max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white">
            {isEditMode ? "Edit Event" : "Add New Event"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="p-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Event Title */}
            <div className="col-span-2">
              <Label htmlFor="title" className="text-gray-300">Event Title *</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter event title"
                className="mt-1 bg-gray-800 border-gray-700 text-white"
                required
              />
            </div>

            {/* Event Type and Date */}
            <div>
              <Label htmlFor="type" className="text-gray-300">Event Type</Label>
              <Select
                value={formData.type}
                onValueChange={(value) => handleSelectChange("type", value)}
              >
                <SelectTrigger className="mt-1 bg-gray-800 border-gray-700 text-white">
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700 text-white">
                  <SelectItem value="workshop">Workshop</SelectItem>
                  <SelectItem value="panel">Panel Discussion</SelectItem>
                  <SelectItem value="keynote">Keynote</SelectItem>
                  <SelectItem value="networking">Networking</SelectItem>
                  <SelectItem value="seminar">Seminar</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="date" className="text-gray-300">Date *</Label>
              <div className="relative">
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="mt-1 bg-gray-800 border-gray-700 text-white pr-10"
                  required
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-400 pointer-events-none h-4 w-4" />
              </div>
            </div>

            {/* Time and Location */}
            <div>
              <Label htmlFor="time" className="text-gray-300">Time</Label>
              <div className="relative">
                <Input
                  id="time"
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="mt-1 bg-gray-800 border-gray-700 text-white pr-10"
                />
                <Clock className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-400 pointer-events-none h-4 w-4" />
              </div>
            </div>

            <div>
              <Label htmlFor="location" className="text-gray-300">Location</Label>
              <div className="relative">
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Event location"
                  className="mt-1 bg-gray-800 border-gray-700 text-white pr-10"
                />
                <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-400 pointer-events-none h-4 w-4" />
              </div>
            </div>

            {/* Speaker Name and Title */}
            <div>
              <Label htmlFor="speaker" className="text-gray-300">Speaker Name</Label>
              <Input
                id="speaker"
                name="speaker"
                value={formData.speaker}
                onChange={handleChange}
                placeholder="Main speaker name"
                className="mt-1 bg-gray-800 border-gray-700 text-white"
              />
            </div>

            <div>
              <Label htmlFor="speakerTitle" className="text-gray-300">Speaker Title</Label>
              <Input
                id="speakerTitle"
                name="speakerTitle"
                value={formData.speakerTitle}
                onChange={handleChange}
                placeholder="Speaker's title or role"
                className="mt-1 bg-gray-800 border-gray-700 text-white"
              />
            </div>

            {/* Capacity */}
            <div>
              <Label htmlFor="capacity" className="text-gray-300">Capacity</Label>
              <div className="relative">
                <Input
                  id="capacity"
                  name="capacity"
                  type="number"
                  value={formData.capacity}
                  onChange={handleChange}
                  placeholder="Maximum participants"
                  className="mt-1 bg-gray-800 border-gray-700 text-white pr-10"
                />
                <Users className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-400 pointer-events-none h-4 w-4" />
              </div>
            </div>

            {/* Image URL */}
            <div>
              <Label htmlFor="image" className="text-gray-300">Image URL</Label>
              <div className="relative">
                <Input
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="URL for event image"
                  className="mt-1 bg-gray-800 border-gray-700 text-white pr-10"
                />
                <ImagePlus className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-400 pointer-events-none h-4 w-4" />
              </div>
            </div>

            {/* Description */}
            <div className="col-span-2">
              <Label htmlFor="description" className="text-gray-300">Description *</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Provide a detailed description of the event"
                className="mt-1 min-h-32 bg-gray-800 border-gray-700 text-white"
                required
              />
            </div>
          </div>

          <div className="mt-8 flex justify-end gap-2">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              className="border-gray-700 hover:bg-gray-800 text-gray-300"
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              Save Event
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddEventForm;
