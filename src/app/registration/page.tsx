
'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, User, Mail, Phone, Building, Globe, Send, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const Registration = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    website: "",
    message: "",
    agree: false
  });
 
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      router.push("/registrationSuccess");
      toast({
        title: "Registration Successful",
        description: "Your partnership request has been submitted.",
      });
    }, 1500);
  };

  const benefits = [
    {
      title: "Global Networking",
      description: "Connect with visionaries, scholars, and leaders from around the world.",
      icon: <Globe className="h-8 w-8 text-summit-gold-500" />
    },
    {
      title: "Brand Visibility",
      description: "Showcase your brand to a diverse audience of innovators and thought leaders.",
      icon: <Building className="h-8 w-8 text-summit-gold-500" />
    },
    {
      title: "Faith-Tech Integration",
      description: "Be at the forefront of discussions bridging traditions with technological innovation.",
      icon: <ChevronRight className="h-8 w-8 text-summit-gold-500" />
    },
    {
      title: "Exclusive Access",
      description: "Gain priority access to workshops, keynotes, and special networking events.",
      icon: <Check className="h-8 w-8 text-summit-gold-500" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
     
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <div className="relative bg-accent/5 text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1591115765373-5207764f72e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Partner With The Future
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8 text-black">
                Join us in bridging faith and innovation at the Global Futuristic Summit 2025
              </p>
              <div className="w-20 h-1 bg-summit-gold-400 mx-auto"></div>
            </div>
          </div>
        </div>
       
        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Benefits Section */}
            <div className="space-y-10">
              <div>
                <h2 className="font-display text-3xl font-bold mb-6 text-foreground">
                  Partnership Benefits
                </h2>
                <p className="text-foreground/70 mb-8">
                  By becoming a partner of the Global Futuristic Summit, you'll be taking an important step toward
                  contributing to a future where faith and innovation harmoniously coexist, creating lasting impact
                  for generations to come.
                </p>
              </div>
             
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="glass-card p-6 hover:shadow-lg transition-all">
                    <div className="mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-foreground/80">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
             
              <div className="glass-card p-6 border-l-4 border-summit-gold-500">
                <h3 className="font-display text-xl font-semibold mb-3">Special Partner Privileges</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-summit-gold-500 mr-2 mt-0.5" />
                    <span>Recognition in summit materials and website</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-summit-gold-500 mr-2 mt-0.5" />
                    <span>Opportunity to host a dedicated workshop or panel</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-summit-gold-500 mr-2 mt-0.5" />
                    <span>Private meeting rooms for networking</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-summit-gold-500 mr-2 mt-0.5" />
                    <span>Early access to summit research and findings</span>
                  </li>
                </ul>
              </div>
            </div>
           
            {/* Registration Form */}
            <div>
              <div className="glass-card p-8 border border-border">
                <h2 className="font-display text-2xl font-bold mb-6 text-center">
                  Register as a Partner
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="pl-10"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                    </div>
                   
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="pl-10"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>
                   
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="pl-10"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                   
                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium mb-2">Organization *</label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
                        <Input
                          id="organization"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          className="pl-10"
                          placeholder="Enter your organization name"
                          required
                        />
                      </div>
                    </div>
                   
                    <div>
                      <label htmlFor="website" className="block text-sm font-medium mb-2">Website</label>
                      <div className="relative">
                        <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
                        <Input
                          id="website"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          className="pl-10"
                          placeholder="Enter your website URL"
                        />
                      </div>
                    </div>
                   
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">Why would you like to partner with us?</label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about your interest and how you'd like to contribute to the summit"
                      />
                    </div>
                   
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="agree"
                          name="agree"
                          type="checkbox"
                          checked={formData.agree}
                          onChange={handleCheckboxChange}
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          required
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="agree" className="text-foreground/80">
                          I agree to receive communications about the Global Futuristic Summit
                        </label>
                      </div>
                    </div>
                  </div>
                 
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full border-2 border-summit-gold-600 bg-summit-gold-500 hover:bg-summit-gold-600 text-black font-medium"
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center dark:text-white">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center dark:text-white">
                        <Send className="mr-2 h-4 w-4 dark:text-white" />
                        Submit Registration
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
     
      <Footer />
    </div>
  );
};

export default Registration;