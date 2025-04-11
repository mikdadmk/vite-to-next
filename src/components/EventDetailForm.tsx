
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { 
  CalendarIcon, Clock, MapPin, ImagePlus, 
  Users, Tag, Plus, X, Save
} from "lucide-react";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

// Define the schema for the form
const formSchema = z.object({
  title: z.string().min(3, { message: "Title must be at least 3 characters" }),
  description: z.string().min(10, { message: "Description must be at least 10 characters" }),
  date: z.date({ required_error: "Date is required" }),
  time: z.string().optional(),
  location: z.string().min(3, { message: "Location must be at least 3 characters" }),
  capacity: z.string().optional(),
  type: z.string(),
});

// Speaker type definition
type Speaker = {
  id: string;
  name: string;
  title: string;
  image?: string;
};

// Schedule item type definition
type ScheduleItem = {
  id: string;
  time: string;
  title: string;
  description: string;
};

// Component props
interface EventDetailFormProps {
  initialData?: any;
  onSubmit: (data: any) => void;
}

const EventDetailForm = ({ initialData, onSubmit }: EventDetailFormProps) => {
  // State for tags, speakers, schedule items, and gallery
  const [tags, setTags] = useState<string[]>(initialData?.tags || []);
  const [tagInput, setTagInput] = useState("");
  const [speakers, setSpeakers] = useState<Speaker[]>(initialData?.speakers || []);
  const [schedule, setSchedule] = useState<ScheduleItem[]>(initialData?.schedule || []);
  const [gallery, setGallery] = useState<string[]>(initialData?.gallery || []);
  const [galleryInput, setGalleryInput] = useState("");
  
  // Initialize form with schema and default values
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: initialData?.title || "",
      description: initialData?.description || "",
      date: initialData?.date ? new Date(initialData.date) : undefined,
      time: initialData?.time || "",
      location: initialData?.location || "",
      capacity: initialData?.capacity || "",
      type: initialData?.type || "workshop",
    },
  });

  // Handle adding a tag
  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  // Handle removing a tag
  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter(t => t !== tag));
  };

  // Handle adding a gallery image
  const handleAddGalleryImage = () => {
    if (galleryInput.trim() && !gallery.includes(galleryInput.trim())) {
      setGallery([...gallery, galleryInput.trim()]);
      setGalleryInput("");
    }
  };

  // Handle removing a gallery image
  const handleRemoveGalleryImage = (image: string) => {
    setGallery(gallery.filter(img => img !== image));
  };

  // Handle adding a speaker
  const handleAddSpeaker = () => {
    const newSpeaker: Speaker = {
      id: Math.random().toString(36).substring(2, 9),
      name: "",
      title: "",
    };
    setSpeakers([...speakers, newSpeaker]);
  };

  // Handle updating a speaker
  const handleUpdateSpeaker = (id: string, field: string, value: string) => {
    setSpeakers(speakers.map(speaker => 
      speaker.id === id ? { ...speaker, [field]: value } : speaker
    ));
  };

  // Handle removing a speaker
  const handleRemoveSpeaker = (id: string) => {
    setSpeakers(speakers.filter(speaker => speaker.id !== id));
  };

  // Handle adding a schedule item
  const handleAddScheduleItem = () => {
    const newItem: ScheduleItem = {
      id: Math.random().toString(36).substring(2, 9),
      time: "",
      title: "",
      description: "",
    };
    setSchedule([...schedule, newItem]);
  };

  // Handle updating a schedule item
  const handleUpdateScheduleItem = (id: string, field: string, value: string) => {
    setSchedule(schedule.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  // Handle removing a schedule item
  const handleRemoveScheduleItem = (id: string) => {
    setSchedule(schedule.filter(item => item.id !== id));
  };

  // Handle form submission
  const handleFormSubmit = (values: z.infer<typeof formSchema>) => {
    const formData = {
      ...values,
      tags,
      speakers,
      schedule,
      gallery,
    };
    
    onSubmit(formData);
    toast({
      title: "Event saved successfully",
      description: "Your event has been saved",
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Event Title */}
          <div className="md:col-span-2">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Event Title *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter event title" 
                      className="bg-gray-800 border-gray-700 text-white"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Event Tags */}
          <div className="md:col-span-2">
            <FormLabel className="text-white">Event Tags</FormLabel>
            <div className="flex flex-wrap items-center gap-2 mt-2 mb-3">
              {tags.map((tag) => (
                <Badge key={tag} className="bg-indigo-600 text-white flex items-center gap-1">
                  {tag}
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => handleRemoveTag(tag)}
                  />
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="Add a tag"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleAddTag();
                  }
                }}
              />
              <Button 
                type="button" 
                onClick={handleAddTag}
                variant="outline"
                className="border-gray-700 hover:bg-gray-800 text-white"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Event Description */}
          <div className="md:col-span-2">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">About Event *</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Provide a detailed description of the event"
                      className="min-h-32 bg-gray-800 border-gray-700 text-white"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Event Date */}
          <div>
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-white">Date *</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal bg-gray-800 border-gray-700 text-white",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-gray-800 border-gray-700" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Event Time */}
          <div>
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Time</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        type="time"
                        className="bg-gray-800 border-gray-700 text-white pr-10"
                        {...field}
                      />
                    </FormControl>
                    <Clock className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-400 pointer-events-none h-4 w-4" />
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Event Location */}
          <div className="md:col-span-2">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Location *</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        placeholder="Event location"
                        className="bg-gray-800 border-gray-700 text-white pr-10"
                        {...field}
                      />
                    </FormControl>
                    <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-400 pointer-events-none h-4 w-4" />
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Event Type */}
          <div className="md:col-span-2">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Event Type *</FormLabel>
                  <FormControl>
                    <select
                      className="flex h-10 w-full rounded-md border border-input bg-gray-800 text-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      {...field}
                    >
                      <option value="workshop">Workshop</option>
                      <option value="panel">Panel Discussion</option>
                      <option value="keynote">Keynote</option>
                      <option value="networking">Networking</option>
                      <option value="seminar">Seminar</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Event Capacity */}
          <div className="md:col-span-2">
            <FormField
              control={form.control}
              name="capacity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Capacity</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Maximum participants"
                        className="bg-gray-800 border-gray-700 text-white pr-10"
                        {...field}
                      />
                    </FormControl>
                    <Users className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-400 pointer-events-none h-4 w-4" />
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Event Schedule */}
          <div className="md:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <FormLabel className="text-white">Event Schedule</FormLabel>
              <Button 
                type="button" 
                onClick={handleAddScheduleItem}
                size="sm"
                className="bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                <Plus className="h-4 w-4 mr-2" /> Add Schedule Item
              </Button>
            </div>
            
            {schedule.length > 0 ? (
              <div className="space-y-4">
                {schedule.map((item) => (
                  <Card key={item.id} className="bg-gray-800 border-gray-700">
                    <CardContent className="p-4">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                        <div className="md:col-span-2">
                          <FormLabel className="text-gray-400 text-xs">Time</FormLabel>
                          <Input
                            type="time"
                            value={item.time}
                            onChange={(e) => handleUpdateScheduleItem(item.id, 'time', e.target.value)}
                            className="bg-gray-700 border-gray-600 text-white mt-1"
                          />
                        </div>
                        <div className="md:col-span-3">
                          <FormLabel className="text-gray-400 text-xs">Title</FormLabel>
                          <Input
                            value={item.title}
                            onChange={(e) => handleUpdateScheduleItem(item.id, 'title', e.target.value)}
                            placeholder="Session title"
                            className="bg-gray-700 border-gray-600 text-white mt-1"
                          />
                        </div>
                        <div className="md:col-span-6">
                          <FormLabel className="text-gray-400 text-xs">Description</FormLabel>
                          <Input
                            value={item.description}
                            onChange={(e) => handleUpdateScheduleItem(item.id, 'description', e.target.value)}
                            placeholder="Brief description"
                            className="bg-gray-700 border-gray-600 text-white mt-1"
                          />
                        </div>
                        <div className="md:col-span-1 flex items-end justify-end">
                          <Button
                            type="button"
                            variant="destructive"
                            size="sm"
                            onClick={() => handleRemoveScheduleItem(item.id)}
                            className="bg-red-900/30 hover:bg-red-900/50 text-red-300 border-red-900/50"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center p-8 border border-gray-800 rounded-lg bg-gray-900/50">
                <p className="text-gray-400">No schedule items added yet.</p>
              </div>
            )}
          </div>

          {/* Event Gallery */}
          <div className="md:col-span-2">
            <FormLabel className="text-white">Event Gallery</FormLabel>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 mb-4">
              {gallery.map((image, index) => (
                <div key={index} className="relative group">
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-24 object-cover rounded-md"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    onClick={() => handleRemoveGalleryImage(image)}
                    className="absolute top-2 right-2 bg-red-600/70 hover:bg-red-600 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
            
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Input
                  placeholder="Image URL"
                  value={galleryInput}
                  onChange={(e) => setGalleryInput(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white pr-10"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddGalleryImage();
                    }
                  }}
                />
                <ImagePlus className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-400 pointer-events-none h-4 w-4" />
              </div>
              <Button 
                type="button" 
                onClick={handleAddGalleryImage}
                variant="outline"
                className="border-gray-700 hover:bg-gray-800 text-white"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Speakers */}
          <div className="md:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <FormLabel className="text-white">Speakers</FormLabel>
              <Button 
                type="button" 
                onClick={handleAddSpeaker}
                size="sm"
                className="bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                <Plus className="h-4 w-4 mr-2" /> Add Speaker
              </Button>
            </div>
            
            {speakers.length > 0 ? (
              <div className="space-y-4">
                {speakers.map((speaker) => (
                  <Card key={speaker.id} className="bg-gray-800 border-gray-700">
                    <CardContent className="p-4">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                        <div className="md:col-span-4">
                          <FormLabel className="text-gray-400 text-xs">Name</FormLabel>
                          <Input
                            value={speaker.name}
                            onChange={(e) => handleUpdateSpeaker(speaker.id, 'name', e.target.value)}
                            placeholder="Speaker name"
                            className="bg-gray-700 border-gray-600 text-white mt-1"
                          />
                        </div>
                        <div className="md:col-span-4">
                          <FormLabel className="text-gray-400 text-xs">Title</FormLabel>
                          <Input
                            value={speaker.title}
                            onChange={(e) => handleUpdateSpeaker(speaker.id, 'title', e.target.value)}
                            placeholder="Speaker title or role"
                            className="bg-gray-700 border-gray-600 text-white mt-1"
                          />
                        </div>
                        <div className="md:col-span-3">
                          <FormLabel className="text-gray-400 text-xs">Image URL</FormLabel>
                          <Input
                            value={speaker.image || ''}
                            onChange={(e) => handleUpdateSpeaker(speaker.id, 'image', e.target.value)}
                            placeholder="Image URL"
                            className="bg-gray-700 border-gray-600 text-white mt-1"
                          />
                        </div>
                        <div className="md:col-span-1 flex items-end justify-end">
                          <Button
                            type="button"
                            variant="destructive"
                            size="sm"
                            onClick={() => handleRemoveSpeaker(speaker.id)}
                            className="bg-red-900/30 hover:bg-red-900/50 text-red-300 border-red-900/50"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center p-8 border border-gray-800 rounded-lg bg-gray-900/50">
                <p className="text-gray-400">No speakers added yet.</p>
              </div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end pt-6">
          <Button 
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            <Save className="h-4 w-4 mr-2" /> Save Event
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default EventDetailForm;
