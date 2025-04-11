
import { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { 
  User, Mail, Key, Bell, Building, Calendar, 
  Globe, Info, Shield, AlertTriangle, Database,
  FileText, Image, MessageSquare, Upload
} from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const Settings = () => {
  const [logoUploadOpen, setLogoUploadOpen] = useState(false);
  const [faviconUploadOpen, setFaviconUploadOpen] = useState(false);
  
  return (
    <AdminLayout title="Settings">
      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="bg-gray-800 border-gray-700 p-1">
          <TabsTrigger 
            value="general" 
            className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
          >
            General
          </TabsTrigger>
          <TabsTrigger 
            value="admin" 
            className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
          >
            Admin
          </TabsTrigger>
          <TabsTrigger 
            value="notifications" 
            className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
          >
            Notifications
          </TabsTrigger>
          <TabsTrigger 
            value="appearance" 
            className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
          >
            Appearance
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="general">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6 bg-gray-900 border-gray-800">
              <div className="flex items-center mb-6">
                <div className="p-2 rounded-full bg-blue-900/30 mr-3">
                  <Info className="h-5 w-5 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Event Information</h3>
              </div>
              
              <div className="space-y-4">
                <div className="grid gap-3">
                  <Label htmlFor="site-name" className="text-gray-300">Event Name</Label>
                  <div className="relative">
                    <Input 
                      id="site-name" 
                      defaultValue="Global Summit" 
                      className="pl-3 bg-gray-800 border-gray-700 text-gray-200"
                    />
                  </div>
                </div>
                
                <div className="grid gap-3">
                  <Label htmlFor="contact-email" className="text-gray-300">Contact Email</Label>
                  <div className="relative">
                    <Input 
                      id="contact-email" 
                      defaultValue="info@global-summit.com" 
                      className="pl-3 bg-gray-800 border-gray-700 text-gray-200"
                    />
                  </div>
                </div>
                
                <div className="grid gap-3">
                  <Label htmlFor="site-description" className="text-gray-300">Event Description</Label>
                  <textarea 
                    id="site-description" 
                    className="min-h-[100px] p-3 rounded-md border border-gray-700 bg-gray-800 text-gray-200"
                    defaultValue="Global Summit for Islamic Innovation and Future Technology" 
                  />
                </div>
                
                <Button className="bg-indigo-600 hover:bg-indigo-700 mt-2 w-full">Save Changes</Button>
              </div>
            </Card>
            
            <div className="space-y-6">
              <Card className="p-6 bg-gray-900 border-gray-800">
                <div className="flex items-center mb-6">
                  <div className="p-2 rounded-full bg-emerald-900/30 mr-3">
                    <Building className="h-5 w-5 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Event Venue</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="grid gap-3">
                    <Label htmlFor="event-venue" className="text-gray-300">Venue</Label>
                    <div className="relative">
                      <Input 
                        id="event-venue" 
                        defaultValue="Dubai Exhibition Centre" 
                        className="pl-3 bg-gray-800 border-gray-700 text-gray-200"
                      />
                    </div>
                  </div>
                  
                  <div className="grid gap-3">
                    <Label htmlFor="event-address" className="text-gray-300">Address</Label>
                    <div className="relative">
                      <Input 
                        id="event-address" 
                        defaultValue="Sheikh Mohammed Bin Rashid Al Maktoum Road" 
                        className="pl-3 bg-gray-800 border-gray-700 text-gray-200"
                      />
                    </div>
                  </div>
                  
                  <div className="grid gap-3">
                    <Label htmlFor="event-city" className="text-gray-300">City</Label>
                    <div className="relative">
                      <Input 
                        id="event-city" 
                        defaultValue="Dubai" 
                        className="pl-3 bg-gray-800 border-gray-700 text-gray-200"
                      />
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-gray-900 border-gray-800">
                <div className="flex items-center mb-6">
                  <div className="p-2 rounded-full bg-red-900/30 mr-3">
                    <Shield className="h-5 w-5 text-red-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Security & Access</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="maintenance-mode" className="block mb-1 text-gray-300">Maintenance Mode</Label>
                      <p className="text-sm text-gray-500">Temporarily disable the site for visitors</p>
                    </div>
                    <Switch id="maintenance-mode" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="registration-open" className="block mb-1 text-gray-300">Registration Open</Label>
                      <p className="text-sm text-gray-500">Allow new registrations on the site</p>
                    </div>
                    <Switch id="registration-open" defaultChecked />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="admin">
          <Card className="p-6 bg-gray-900 border-gray-800">
            <div className="flex items-center mb-6">
              <div className="p-2 rounded-full bg-purple-900/30 mr-3">
                <User className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Admin Credentials</h3>
            </div>
            
            <div className="space-y-6">
              <div className="grid gap-3">
                <Label htmlFor="admin-email" className="text-gray-300">Admin Email</Label>
                <div className="relative">
                  <Mail className="h-4 w-4 absolute left-3 top-3 text-gray-500" />
                  <Input 
                    id="admin-email" 
                    defaultValue="shaz80170@gmail.com" 
                    className="pl-9 bg-gray-800 border-gray-700 text-gray-200"
                  />
                </div>
              </div>
              
              <div className="grid gap-3">
                <Label htmlFor="current-password" className="text-gray-300">Current Password</Label>
                <div className="relative">
                  <Key className="h-4 w-4 absolute left-3 top-3 text-gray-500" />
                  <Input 
                    id="current-password" 
                    type="password" 
                    className="pl-9 bg-gray-800 border-gray-700 text-gray-200"
                  />
                </div>
              </div>
              
              <div className="grid gap-3">
                <Label htmlFor="new-password" className="text-gray-300">New Password</Label>
                <div className="relative">
                  <Key className="h-4 w-4 absolute left-3 top-3 text-gray-500" />
                  <Input 
                    id="new-password" 
                    type="password" 
                    className="pl-9 bg-gray-800 border-gray-700 text-gray-200"
                  />
                </div>
              </div>
              
              <div className="grid gap-3">
                <Label htmlFor="confirm-password" className="text-gray-300">Confirm New Password</Label>
                <div className="relative">
                  <Key className="h-4 w-4 absolute left-3 top-3 text-gray-500" />
                  <Input 
                    id="confirm-password" 
                    type="password" 
                    className="pl-9 bg-gray-800 border-gray-700 text-gray-200"
                  />
                </div>
              </div>
              
              <Button className="bg-indigo-600 hover:bg-indigo-700 mt-4">Update Credentials</Button>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card className="p-6 bg-gray-900 border-gray-800">
            <div className="flex items-center mb-6">
              <div className="p-2 rounded-full bg-amber-900/30 mr-3">
                <Bell className="h-5 w-5 text-amber-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Notification Preferences</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 rounded-md bg-gray-800/50 border border-gray-800">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-900/20 rounded-full">
                    <User className="h-4 w-4 text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">New Registration Alerts</p>
                    <p className="text-sm text-gray-400">Receive email notifications for new registrations</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between p-4 rounded-md bg-gray-800/50 border border-gray-800">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-900/20 rounded-full">
                    <MessageSquare className="h-4 w-4 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Contact Form Submissions</p>
                    <p className="text-sm text-gray-400">Receive email notifications for contact form submissions</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between p-4 rounded-md bg-gray-800/50 border border-gray-800">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-red-900/20 rounded-full">
                    <AlertTriangle className="h-4 w-4 text-red-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Security Alerts</p>
                    <p className="text-sm text-gray-400">Receive notifications about security-related events</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between p-4 rounded-md bg-gray-800/50 border border-gray-800">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-900/20 rounded-full">
                    <FileText className="h-4 w-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Abstract Submission Alerts</p>
                    <p className="text-sm text-gray-400">Be notified when new abstracts are submitted</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              
              <Button className="bg-indigo-600 hover:bg-indigo-700 mt-4">Save Preferences</Button>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="appearance">
          <Card className="p-6 bg-gray-900 border-gray-800">
            <div className="flex items-center mb-6">
              <div className="p-2 rounded-full bg-indigo-900/30 mr-3">
                <Image className="h-5 w-5 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Appearance Settings</h3>
            </div>
            
            <div className="space-y-6">
              {/* Logo Upload */}
              <div className="grid gap-3">
                <Label htmlFor="logo" className="text-gray-300">Logo</Label>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-800 rounded-md flex items-center justify-center">
                    <Image className="h-6 w-6 text-gray-500" />
                  </div>
                  <Sheet open={logoUploadOpen} onOpenChange={setLogoUploadOpen}>
                    <SheetTrigger asChild>
                      <Button variant="outline" className="bg-gray-800 border-gray-700 text-gray-200">
                        <Upload className="mr-2 h-4 w-4" /> Change Logo
                      </Button>
                    </SheetTrigger>
                    <SheetContent className="bg-gray-900 border-l border-gray-800">
                      <SheetHeader>
                        <SheetTitle className="text-white">Update Logo</SheetTitle>
                        <SheetDescription className="text-gray-400">
                          Upload a new logo for your event site.
                        </SheetDescription>
                      </SheetHeader>
                      <div className="py-4">
                        <div className="mt-4 border-2 border-dashed border-gray-700 rounded-lg p-6 text-center">
                          <div className="mx-auto flex flex-col items-center justify-center">
                            <Upload className="h-10 w-10 text-gray-400 mb-2" />
                            <p className="text-sm text-gray-400 mb-1">Drag and drop your logo here</p>
                            <p className="text-xs text-gray-500">PNG or JPG (Recommended size: 200x60px)</p>
                            
                            <label htmlFor="logo-upload" className="mt-4">
                              <Button type="button" className="bg-indigo-600 hover:bg-indigo-700">
                                Select File
                              </Button>
                              <input id="logo-upload" type="file" className="sr-only" accept="image/*" />
                            </label>
                          </div>
                        </div>
                        
                        <div className="flex justify-end gap-2 pt-8">
                          <Button type="button" variant="outline" className="bg-gray-800 text-gray-200 border-gray-700" onClick={() => setLogoUploadOpen(false)}>
                            Cancel
                          </Button>
                          <Button type="button" className="bg-indigo-600 hover:bg-indigo-700">
                            Upload Logo
                          </Button>
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
              
              {/* Favicon Upload */}
              <div className="grid gap-3">
                <Label htmlFor="favicon" className="text-gray-300">Favicon</Label>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-800 rounded-md flex items-center justify-center">
                    <Image className="h-4 w-4 text-gray-500" />
                  </div>
                  <Sheet open={faviconUploadOpen} onOpenChange={setFaviconUploadOpen}>
                    <SheetTrigger asChild>
                      <Button variant="outline" className="bg-gray-800 border-gray-700 text-gray-200">
                        <Upload className="mr-2 h-4 w-4" /> Change Favicon
                      </Button>
                    </SheetTrigger>
                    <SheetContent className="bg-gray-900 border-l border-gray-800">
                      <SheetHeader>
                        <SheetTitle className="text-white">Update Favicon</SheetTitle>
                        <SheetDescription className="text-gray-400">
                          Upload a new favicon for your event site.
                        </SheetDescription>
                      </SheetHeader>
                      <div className="py-4">
                        <div className="mt-4 border-2 border-dashed border-gray-700 rounded-lg p-6 text-center">
                          <div className="mx-auto flex flex-col items-center justify-center">
                            <Upload className="h-10 w-10 text-gray-400 mb-2" />
                            <p className="text-sm text-gray-400 mb-1">Drag and drop your favicon here</p>
                            <p className="text-xs text-gray-500">PNG or ICO (Recommended size: 32x32px)</p>
                            
                            <label htmlFor="favicon-upload" className="mt-4">
                              <Button type="button" className="bg-indigo-600 hover:bg-indigo-700">
                                Select File
                              </Button>
                              <input id="favicon-upload" type="file" className="sr-only" accept="image/*" />
                            </label>
                          </div>
                        </div>
                        
                        <div className="flex justify-end gap-2 pt-8">
                          <Button type="button" variant="outline" className="bg-gray-800 text-gray-200 border-gray-700" onClick={() => setFaviconUploadOpen(false)}>
                            Cancel
                          </Button>
                          <Button type="button" className="bg-indigo-600 hover:bg-indigo-700">
                            Upload Favicon
                          </Button>
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
              
              <div className="grid gap-3">
                <Label className="text-gray-300">Primary Color</Label>
                <div className="flex gap-2">
                  {["bg-indigo-600", "bg-blue-600", "bg-emerald-600", "bg-purple-600", "bg-amber-600"].map((color) => (
                    <div
                      key={color}
                      className={`${color} w-8 h-8 rounded-full cursor-pointer ring-2 ring-offset-2 ring-offset-gray-900 ${
                        color === "bg-indigo-600" ? "ring-white" : "ring-transparent"
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="grid gap-3">
                <Label htmlFor="custom-css" className="text-gray-300">Custom CSS</Label>
                <textarea 
                  id="custom-css" 
                  className="min-h-[100px] p-3 rounded-md border border-gray-700 bg-gray-800 text-gray-200 font-mono text-sm"
                  placeholder="/* Add your custom CSS here */"
                />
              </div>
              
              <Button className="bg-indigo-600 hover:bg-indigo-700 mt-4">Save Appearance</Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </AdminLayout>
  );
};

export default Settings;
