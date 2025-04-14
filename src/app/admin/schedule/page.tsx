'use client'
import AdminLayout from "@/components/AdminLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, Trash, Clock, CalendarPlus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";

const Schedule = () => {
  const days = ["May 15", "May 16", "May 17", "May 18", "May 19", "May 20"];
  
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    date: "",
    startTime: "",
    endTime: "",
    title: "",
    description: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id.replace("event-", "")]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, date: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.date || !formData.startTime || !formData.title) {
      toast({
        title: "Please fill out all required fields",
        description: "Date, start time and title are required",
      });
      return;
    }

    // Here you would typically add the schedule item to your data
    console.log("New schedule item:", formData);
    
    toast({
      title: "Schedule Item Added",
      description: "The new schedule item has been added successfully",
    });
    
    // Reset form and close dialog
    setFormData({
      date: "",
      startTime: "",
      endTime: "",
      title: "",
      description: ""
    });
    setIsFormOpen(false);
  };

  return (
    <AdminLayout title="Schedule Management">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-white">Event Schedule</h2>
        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
          <Button 
            onClick={() => setIsFormOpen(true)}
            className="bg-indigo-600 hover:bg-indigo-700"
          >
            <CalendarPlus className="mr-2 h-4 w-4" /> Add Schedule Item
          </Button>
          <DialogContent className="bg-gray-900 border-gray-800 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-white">Add New Schedule Item</DialogTitle>
              <DialogDescription className="text-gray-400">
                Create a new event in the schedule.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="p-2">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="event-date" className="text-gray-300">Date *</Label>
                  <Select
                    value={formData.date}
                    onValueChange={handleSelectChange}
                  >
                    <SelectTrigger className="mt-1 bg-gray-800 border-gray-700 text-white">
                      <SelectValue placeholder="Select date" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      {days.map((day, index) => (
                        <SelectItem key={index} value={day}>
                          {day}, 2025
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="event-startTime" className="text-gray-300">Start Time *</Label>
                  <Input 
                    id="event-startTime" 
                    type="time" 
                    value={formData.startTime}
                    onChange={handleChange}
                    className="mt-1 bg-gray-800 border-gray-700 text-white" 
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="event-endTime" className="text-gray-300">End Time</Label>
                  <Input 
                    id="event-endTime" 
                    type="time" 
                    value={formData.endTime}
                    onChange={handleChange}
                    className="mt-1 bg-gray-800 border-gray-700 text-white" 
                  />
                </div>
                <div>
                  <Label htmlFor="event-title" className="text-gray-300">Event Title *</Label>
                  <Input 
                    id="event-title" 
                    placeholder="Enter event title"
                    value={formData.title}
                    onChange={handleChange}
                    className="mt-1 bg-gray-800 border-gray-700 text-white" 
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="event-description" className="text-gray-300">Event Description</Label>
                  <Input 
                    id="event-description" 
                    placeholder="Enter event description"
                    value={formData.description}
                    onChange={handleChange}
                    className="mt-1 bg-gray-800 border-gray-700 text-white" 
                  />
                </div>
                <div className="flex justify-end gap-2 pt-6">
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="bg-gray-800 text-gray-200 border-gray-700" 
                    onClick={() => setIsFormOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700">
                    Add Schedule Item
                  </Button>
                </div>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="space-y-8">
        {days.map((day, dayIndex) => (
          <Card key={dayIndex} className="p-6 bg-gray-900 border-gray-800">
            <h3 className="text-lg font-semibold mb-4 text-white">{day}, 2025</h3>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex border-l-4 border-indigo-500 pl-4 py-3 bg-gray-800/50 rounded-r-md hover:bg-gray-800/70 transition-colors">
                  <div className="w-32 flex-shrink-0">
                    <div className="font-medium text-gray-300 flex items-center gap-2">
                      <Clock size={14} className="text-indigo-400" />
                      {9 + item}:00 - {10 + item}:00
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-white">Session {item}</div>
                    <div className="text-sm text-gray-400">
                      {item === 1 ? "Opening Ceremony" : 
                       item === 2 ? "Keynote Speech" : 
                       item === 3 ? "Panel Discussion" : "Workshop"}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300 hover:bg-blue-900/20">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300 hover:bg-red-900/20">
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </AdminLayout>
  );
};

export default Schedule;
