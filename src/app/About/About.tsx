
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronRight, GraduationCap, Globe, Users, Target, Heart, Clock, MapPin } from "lucide-react";

const About = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <Navbar />
      <div className="pt-20 min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 md:py-24 bg-accent/5 overflow-hidden">
          <div 
            className="absolute inset-0 opacity-10 z-0 bg-cover bg-center" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80')" }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                About Global Summit
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
                Bridging Faith and Future in a global convergence of innovation, spirituality, and technology.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Our Vision & Mission</h2>
                <p className="text-foreground/70 mb-4">
                  Global Summit is a pioneering conference that explores the intersection of faith, technology, and ethical innovation. 
                  We bring together thought leaders, technologists, scholars, and innovators from around the world to foster 
                  dialogue and collaboration on pressing global challenges.
                </p>
                <p className="text-foreground/70 mb-6">
                  Our mission is to create a platform where diverse perspectives can converge, where traditional 
                  wisdom can inform technological progress, and where innovation can be guided by ethical and spiritual values.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <ChevronRight className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                    <p><strong>Fostering Dialogue:</strong> Creating spaces for meaningful conversations across disciplines and traditions.</p>
                  </div>
                  <div className="flex items-start">
                    <ChevronRight className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                    <p><strong>Ethical Innovation:</strong> Promoting technological advancement that respects human dignity and shared values.</p>
                  </div>
                  <div className="flex items-start">
                    <ChevronRight className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                    <p><strong>Global Community:</strong> Building bridges across cultural and religious divides through shared exploration.</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Global Summit conference" 
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-background p-4 rounded-lg shadow-lg border border-border">
                  <p className="text-2xl font-bold text-primary">10+</p>
                  <p className="text-sm">Years of Excellence</p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background p-4 rounded-lg shadow-lg border border-border">
                  <p className="text-2xl font-bold text-primary">50+</p>
                  <p className="text-sm">Global Partners</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Facts Section */}
        <section className="py-16 bg-accent/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-12 text-center">Key Facts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-background/50 backdrop-blur border-primary/10 hover:border-primary/30 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">5,000+</h3>
                  <p className="text-foreground/70">Annual Attendees</p>
                </CardContent>
              </Card>

              <Card className="bg-background/50 backdrop-blur border-primary/10 hover:border-primary/30 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">40+</h3>
                  <p className="text-foreground/70">Countries Represented</p>
                </CardContent>
              </Card>

              <Card className="bg-background/50 backdrop-blur border-primary/10 hover:border-primary/30 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">250+</h3>
                  <p className="text-foreground/70">Renowned Speakers</p>
                </CardContent>
              </Card>

              <Card className="bg-background/50 backdrop-blur border-primary/10 hover:border-primary/30 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">100+</h3>
                  <p className="text-foreground/70">Interactive Sessions</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* History Timeline */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-12 text-center">Our Journey</h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 ml-px border-l-2 border-primary/30 h-full z-0"></div>
                
                {/* Timeline items */}
                <div className="space-y-16 relative z-10">
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-0 bg-primary w-8 h-8 rounded-full flex items-center justify-center">
                      <Clock className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">2015 - The Beginning</h3>
                    <p className="text-foreground/70">
                      Global Summit was founded with a vision to create a platform for dialogue between faith 
                      traditions and technological innovation. Our first event in Dubai welcomed 500 attendees.
                    </p>
                  </div>
                  
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-0 bg-primary w-8 h-8 rounded-full flex items-center justify-center">
                      <Clock className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">2018 - Global Expansion</h3>
                    <p className="text-foreground/70">
                      The Summit expanded to include satellite events in Kuala Lumpur and Istanbul, 
                      reaching a wider audience and incorporating more diverse perspectives.
                    </p>
                  </div>
                  
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-0 bg-primary w-8 h-8 rounded-full flex items-center justify-center">
                      <Clock className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">2020 - Virtual Innovation</h3>
                    <p className="text-foreground/70">
                      In response to global challenges, the Summit pioneered a hybrid event model, 
                      combining in-person gatherings with virtual participation, reaching over 3,000 attendees worldwide.
                    </p>
                  </div>
                  
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-0 bg-primary w-8 h-8 rounded-full flex items-center justify-center">
                      <Clock className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">2025 - The Next Chapter</h3>
                    <p className="text-foreground/70">
                      Today, Global Summit stands as the premier conference on faith and technology, 
                      with a growing community of thought leaders, innovators, and change-makers from around the world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-accent/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-center">Leadership Team</h2>
            <p className="text-foreground/70 text-center max-w-2xl mx-auto mb-12">
              Meet the dedicated individuals who make the Global Summit possible through their vision, expertise, and commitment.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=3&w=688&h=688&q=80" 
                    alt="Dr. Ahmad Khalid" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Dr. Ahmad Khalid</h3>
                  <p className="text-primary mb-3">Founder & Chairman</p>
                  <p className="text-foreground/70 text-sm">
                    Visionary leader with expertise in both Islamic scholarship and technology innovation, 
                    Dr. Khalid founded the Summit to bridge traditional wisdom with future technologies.
                  </p>
                </div>
              </div>

              <div className="bg-background rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=3&w=688&h=688&q=80" 
                    alt="Dr. Sarah Abdullah" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Dr. Sarah Abdullah</h3>
                  <p className="text-primary mb-3">Executive Director</p>
                  <p className="text-foreground/70 text-sm">
                    With a background in international relations and digital ethics, Dr. Abdullah 
                    leads the strategic direction and global partnerships of the Summit.
                  </p>
                </div>
              </div>

              <div className="bg-background rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=3&w=688&h=688&q=80" 
                    alt="Yusuf Rahman" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Yusuf Rahman</h3>
                  <p className="text-primary mb-3">Technology Director</p>
                  <p className="text-foreground/70 text-sm">
                    Former Silicon Valley executive now dedicated to ensuring technology serves human flourishing,
                    Yusuf oversees the Summit's technology and innovation initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Our Venue</h2>
                <div className="flex items-start mb-4">
                  <MapPin className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold">Dubai World Trade Centre</h3>
                    <p className="text-foreground/70">Trade Centre - DWTC, Sheikh Zayed Road, Dubai, UAE</p>
                  </div>
                </div>
                <p className="text-foreground/70 mb-6">
                  The Dubai World Trade Centre serves as the perfect venue for the Global Summit, 
                  offering state-of-the-art facilities in the heart of Dubai. Its central location 
                  makes it accessible to participants from around the world, while its modern 
                  amenities provide the ideal setting for our diverse programming.
                </p>
                <p className="text-foreground/70">
                  From intimate workshop spaces to grand halls that accommodate thousands, the venue 
                  enables us to create the perfect environment for both deep discussion and broad engagement.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1591115765373-5207764f72e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                  alt="Dubai World Trade Centre" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-accent/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-center">Our Core Values</h2>
            <p className="text-foreground/70 text-center max-w-2xl mx-auto mb-12">
              The principles that guide our work and shape our approach to bringing together faith and technology.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-background/50 backdrop-blur">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Respect & Inclusion</h3>
                  <p className="text-foreground/70">
                    We honor diverse traditions and perspectives, creating spaces where all voices are valued 
                    and all participants feel welcome.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-background/50 backdrop-blur">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Ethical Innovation</h3>
                  <p className="text-foreground/70">
                    We believe technological progress should be guided by moral principles that respect human 
                    dignity and promote the common good.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-background/50 backdrop-blur">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Global Perspective</h3>
                  <p className="text-foreground/70">
                    We recognize that the challenges and opportunities of our time require collaborative solutions 
                    that transcend geographic and cultural boundaries.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-center">Frequently Asked Questions</h2>
            <p className="text-foreground/70 text-center max-w-2xl mx-auto mb-12">
              Answers to common questions about the Global Summit, our mission, and how you can participate.
            </p>
            
            <div className="max-w-3xl mx-auto">
              <Tabs defaultValue="general" className="w-full">
                {isMobile ? (
                  <div className="w-full flex justify-center mb-6">
                    <select 
                      className="p-2 rounded-md border border-input bg-background"
                      onChange={(e) => {
                        const tabs = document.querySelector('[role="tablist"]');
                        if (tabs) {
                          const button = tabs.querySelector(`[value="${e.target.value}"]`);
                          if (button) {
                            (button as HTMLButtonElement).click();
                          }
                        }
                      }}
                    >
                      <option value="general">General</option>
                      <option value="attendance">Attendance</option>
                      <option value="speakers">Speakers & Program</option>
                    </select>
                  </div>
                ) : (
                  <TabsList className="grid w-full grid-cols-3 mb-8">
                    <TabsTrigger value="general">General</TabsTrigger>
                    <TabsTrigger value="attendance">Attendance</TabsTrigger>
                    <TabsTrigger value="speakers">Speakers & Program</TabsTrigger>
                  </TabsList>
                )}
                
                <TabsContent value="general" className="space-y-6">
                  <div className="bg-background rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-bold mb-2">What is the Global Summit?</h3>
                    <p className="text-foreground/70">
                      The Global Summit is an annual conference that explores the intersection of faith, 
                      technology, and ethical innovation. It brings together thought leaders, technologists, 
                      scholars, and innovators from around the world.
                    </p>
                  </div>
                  
                  <div className="bg-background rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-bold mb-2">When and where is the next Summit?</h3>
                    <p className="text-foreground/70">
                      The next Global Summit will take place on May 15-20, 2025, at the Dubai World Trade Centre in Dubai, UAE.
                      Check our Events page for more specific details about the upcoming Summit.
                    </p>
                  </div>
                  
                  <div className="bg-background rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-bold mb-2">Is the Summit only for Muslims?</h3>
                    <p className="text-foreground/70">
                      No, the Summit welcomes participants from all faith traditions and backgrounds. While it explores 
                      Islamic perspectives on technology and innovation, it is designed to be inclusive and valuable for anyone 
                      interested in the ethical dimensions of technological advancement.
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="attendance" className="space-y-6">
                  <div className="bg-background rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-bold mb-2">How can I attend the Global Summit?</h3>
                    <p className="text-foreground/70">
                      Registration for the Summit opens approximately six months before each event. You can register 
                      through our website or contact our registration team for group registrations and special accommodations.
                    </p>
                  </div>
                  
                  <div className="bg-background rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-bold mb-2">Are there virtual attendance options?</h3>
                    <p className="text-foreground/70">
                      Yes, we offer robust virtual attendance options for those unable to join us in person. 
                      Virtual attendees have access to livestreamed sessions, interactive workshops, and networking opportunities.
                    </p>
                  </div>
                  
                  <div className="bg-background rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-bold mb-2">Is financial assistance available?</h3>
                    <p className="text-foreground/70">
                      We offer a limited number of scholarships for students, academics, and nonprofit representatives. 
                      The scholarship application process opens approximately eight months before each Summit.
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="speakers" className="space-y-6">
                  <div className="bg-background rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-bold mb-2">How are speakers selected?</h3>
                    <p className="text-foreground/70">
                      Speakers are selected through a combination of invitation and application. Our program committee 
                      reviews all potential speakers to ensure diversity of perspective, expertise, and approach.
                    </p>
                  </div>
                  
                  <div className="bg-background rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-bold mb-2">What topics are covered at the Summit?</h3>
                    <p className="text-foreground/70">
                      Topics vary each year but typically include artificial intelligence ethics, fintech and Islamic finance, 
                      digital privacy, sustainable technology, bioethics, digital community building, and more.
                    </p>
                  </div>
                  
                  <div className="bg-background rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-bold mb-2">Can I suggest a topic or speaker?</h3>
                    <p className="text-foreground/70">
                      Yes! We welcome suggestions from our community. Please reach out through our Contact page 
                      with your ideas, and our programming team will review all submissions.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/90 to-accent/90 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Join Us at the 2025 Global Summit</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Be part of the conversation shaping the future of technology, ethics, and faith.
              Register now to secure your place at this transformative gathering.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/events" className="px-6 py-3 bg-white text-primary font-medium rounded-lg hover:bg-white/90 transition-colors">
                View Upcoming Events
              </a>
              <a href="/contact" className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
