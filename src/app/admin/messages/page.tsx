'use client'
import { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { MessageSquare, User, Clock, Trash2, Reply, PlusCircle, Search } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { ScrollArea } from "@/components/ui/scroll-area";

// Sample messages data
const initialMessages = [
  {
    id: "msg-001",
    name: "Ahmed Youssef",
    email: "ahmed.y@example.com",
    message: "I would like to know more about the registration process for the AI and Faith workshop.",
    date: "2025-04-05T10:30:00",
    read: true,
  },
  {
    id: "msg-002",
    name: "Sarah Khan",
    email: "sarah.khan@example.com",
    message: "Is there a special student discount available for the summit?",
    date: "2025-04-04T16:45:00",
    read: false,
  },
  {
    id: "msg-003",
    name: "Mohammed Ali",
    email: "m.ali@example.com",
    message: "I'm interested in speaking at the summit. How can I apply to be a speaker?",
    date: "2025-04-03T09:15:00",
    read: true,
  }
];

const Messages = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [isComposeOpen, setIsComposeOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  const [composeData, setComposeData] = useState({
    to: "",
    subject: "",
    message: ""
  });

  const handleComposeChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setComposeData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!composeData.to || !composeData.subject || !composeData.message) {
      toast({
        title: "Please fill out all fields",
        description: "Email, subject and message are required",
      });
      return;
    }

    // Here you would typically send the message via API
    console.log("Sending message:", composeData);
    
    toast({
      title: "Message Sent",
      description: "Your message has been sent successfully",
    });
    
    // Reset form and close dialog
    setComposeData({
      to: "",
      subject: "",
      message: ""
    });
    setIsComposeOpen(false);
  };

  const toggleRead = (id: string) => {
    setMessages(prevMessages => 
      prevMessages.map(msg => 
        msg.id === id ? { ...msg, read: !msg.read } : msg
      )
    );
  };

  const deleteMessage = (id: string) => {
    setMessages(prevMessages => prevMessages.filter(msg => msg.id !== id));
    if (selectedMessage === id) {
      setSelectedMessage(null);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit'
    }).format(date);
  };

  const filteredMessages = messages.filter(msg => 
    msg.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    msg.email.toLowerCase().includes(searchQuery.toLowerCase()) || 
    msg.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedMessageData = selectedMessage 
    ? messages.find(msg => msg.id === selectedMessage) 
    : null;

  return (
    <AdminLayout title="Message Center">
      <div className="mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Messages</h1>
          <p className="text-gray-400">Manage inquiries and communications</p>
        </div>
        <Dialog open={isComposeOpen} onOpenChange={setIsComposeOpen}>
          <Button 
            onClick={() => setIsComposeOpen(true)} 
            className="bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            <PlusCircle className="mr-2 h-4 w-4" /> Compose Message
          </Button>
          <DialogContent className="bg-gray-900 border-gray-800 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-white">Compose Message</DialogTitle>
              <DialogDescription className="text-gray-400">
                Send a message to attendees or speakers
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSendMessage} className="p-2">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="to" className="text-gray-300">To *</Label>
                  <Input
                    id="to"
                    name="to"
                    value={composeData.to}
                    onChange={handleComposeChange}
                    placeholder="Email address"
                    className="mt-1 bg-gray-800 border-gray-700 text-white"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="subject" className="text-gray-300">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={composeData.subject}
                    onChange={handleComposeChange}
                    placeholder="Message subject"
                    className="mt-1 bg-gray-800 border-gray-700 text-white"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-300">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={composeData.message}
                    onChange={handleComposeChange}
                    placeholder="Type your message here"
                    className="mt-1 min-h-32 bg-gray-800 border-gray-700 text-white"
                    required
                  />
                </div>
                <div className="flex justify-end gap-2 pt-6">
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="bg-gray-800 text-gray-200 border-gray-700" 
                    onClick={() => setIsComposeOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700">
                    Send Message
                  </Button>
                </div>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[calc(100vh-200px)]">
        {/* Messages List - Left Side */}
        <div className="md:col-span-1 bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
          <div className="p-3 border-b border-gray-800">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
              <Input 
                placeholder="Search messages..." 
                className="pl-10 bg-gray-800 border-gray-700 text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <ScrollArea className="h-[calc(100vh-280px)]">
            <div className="divide-y divide-gray-800">
              {filteredMessages.length > 0 ? (
                filteredMessages.map((message) => (
                  <div 
                    key={message.id}
                    className={`p-3 cursor-pointer hover:bg-gray-800/50 transition-colors ${
                      selectedMessage === message.id ? "bg-gray-800" : ""
                    } ${!message.read ? "border-l-4 border-l-indigo-500" : ""}`}
                    onClick={() => {
                      setSelectedMessage(message.id);
                      if (!message.read) {
                        toggleRead(message.id);
                      }
                    }}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium text-white">{message.name}</span>
                      <span className="text-xs text-gray-500">{formatDate(message.date)}</span>
                    </div>
                    <p className="text-sm text-gray-400 truncate">{message.message}</p>
                  </div>
                ))
              ) : (
                <div className="p-4 text-center text-gray-500">No messages found</div>
              )}
            </div>
          </ScrollArea>
        </div>
        
        {/* Message View - Right Side */}
        <div className="md:col-span-2 bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
          {selectedMessageData ? (
            <div className="flex flex-col h-full">
              <div className="p-4 border-b border-gray-800">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-white">{selectedMessageData.name}</h3>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-gray-700 hover:bg-gray-700"
                      onClick={() => toggleRead(selectedMessageData.id)}
                    >
                      {selectedMessageData.read ? "Mark as Unread" : "Mark as Read"}
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-gray-700 hover:bg-gray-700"
                    >
                      <Reply className="h-4 w-4 text-indigo-400" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-gray-700 hover:bg-gray-700"
                      onClick={() => deleteMessage(selectedMessageData.id)}
                    >
                      <Trash2 className="h-4 w-4 text-red-400" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-1 text-sm text-gray-400">
                  <span>{selectedMessageData.email}</span>
                  <span className="text-gray-600">•</span>
                  <Clock className="h-3 w-3" />
                  <span>{formatDate(selectedMessageData.date)}</span>
                </div>
              </div>
              
              <ScrollArea className="flex-1 p-4">
                <p className="text-gray-300 whitespace-pre-wrap">{selectedMessageData.message}</p>
              </ScrollArea>
              
              <div className="p-4 border-t border-gray-800">
                <div className="flex gap-2">
                  <Button 
                    className="bg-indigo-600 hover:bg-indigo-700 flex-1"
                    onClick={() => {
                      setComposeData({
                        to: selectedMessageData.email,
                        subject: `RE: Message from ${selectedMessageData.name}`,
                        message: ""
                      });
                      setIsComposeOpen(true);
                    }}
                  >
                    <Reply className="mr-2 h-4 w-4" /> Reply
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center">
              <div className="text-center p-8">
                <MessageSquare className="h-16 w-16 text-gray-700 mx-auto mb-4" />
                <p className="text-gray-500">Select a message to view its contents</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Messages;
