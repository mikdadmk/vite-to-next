
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/CountdownTimer";
import EventCard from "@/components/EventCard";
import ReviewCarousel from "@/components/ReviewCarousel";
import GalleryPreview from "@/components/GalleryPreview";
import { Link } from "react-router-dom";
import { ChevronRight, Calendar, MapPin, Users, Check } from "lucide-react";

const Index = () => {
  // Featured events data - limit to exactly 3
  const featuredEvents = [
    {
      id: 1,
      title: "Future of Islamic Finance",
      description: "Exploring blockchain and fintech innovations in Islamic banking and investment systems.",
      image: "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      date: "May 15, 2025",
      type: "Conference",
      path: "/events/islamic-finance"
    },
    {
      id: 2,
      title: "AI Ethics Symposium",
      description: "Discussions on aligning artificial intelligence with Islamic ethics and global moral frameworks.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80",
      date: "May 16, 2025",
      type: "Symposium",
      path: "/events/ai-ethics"
    },
    {
      id: 3,
      title: "Smart Cities Workshop",
      description: "Practical approaches to implementing smart city technologies with cultural sensitivity.",
      image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
      date: "May 17, 2025",
      type: "Workshop",
      path: "/events/smart-cities"
    }
  ];

  // Summit statistics
  const summitStats = [
    { number: "20+", label: "Keynote Speakers" },
    { number: "50+", label: "Interactive Sessions" },
    { number: "5,000+", label: "Global Attendees" },
    { number: "30+", label: "Countries Represented" }
  ];

  // Summit benefits
  const summitBenefits = [
    "Network with global technology and faith leaders",
    "Gain insights into cutting-edge innovations",
    "Explore the intersection of tradition and technology",
    "Participate in interactive workshops and demos",
    "Connect with potential partners and collaborators",
    "Shape the future of ethical technology development"
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
        {/* Gradient overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background"></div>
          <div className="absolute inset-0 islamic-pattern opacity-20"></div>
        </div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-primary/10 backdrop-blur-sm text-primary px-4 py-2 rounded-full mb-6 animate-fade-up">
              May 15-17, 2025 • Dubai World Trade Centre
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up">
              <span className="glow block">Global Futuristic</span>
              <span className="glow-accent block mt-2">Summit 2025</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Where Technology Meets Tradition: Bridging Faith and Future
            </p>
            
            <div className="mb-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <CountdownTimer />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg">
                Register Now
              </Button>
              <Link to="/events">
                <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-white rounded-full px-8 py-6 text-lg">
                  Explore Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scrolling indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm">
            <ChevronRight className="rotate-90 text-white" />
          </div>
        </div>
      </section>
      
      {/* Summit Stats Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {summitStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Events Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Featured Events
            </h2>
            <p className="text-foreground/70">
              Our most anticipated sessions that bring together innovation, spirituality, and global perspectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                description={event.description}
                image={event.image}
                date={event.date}
                type={event.type}
                path={event.path}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/events">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8">
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Summit Section */}
      <section className="py-20 px-4 bg-accent/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">
                About The Summit
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                A Convergence of Technology, Faith & Innovation
              </h2>
              <p className="text-foreground/80 mb-4">
                The Global Futuristic Summit is a groundbreaking international event that brings together the worlds of technology, spirituality, innovation, and collaboration. Our mission is to create meaningful dialogues that honor traditional wisdom while embracing cutting-edge advancements.
              </p>
              <p className="text-foreground/80 mb-6">
                Join us in Dubai for an immersive three-day experience where tech leaders, spiritual scholars, innovators, and global thinkers converge to explore how we can create a future that respects our sacred traditions while harnessing the power of emerging technologies.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <span>May 15-17, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <span>Dubai World Trade Centre</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <span>5000+ Attendees</span>
                </div>
              </div>
            </div>
            <div className="glass-card p-1 rounded-2xl overflow-hidden h-[400px] relative group">
              <img 
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80" 
                alt="Summit Overview" 
                className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                <Button variant="outline" className="border-white text-white hover:bg-white/20 backdrop-blur-sm">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">
              Why Attend
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Summit Benefits
            </h2>
            <p className="text-foreground/70">
              Discover the unique advantages of attending the Global Futuristic Summit 2025.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {summitBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 glass-card p-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div className="text-foreground/90">{benefit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-accent/5">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">
              Testimonials
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Summit Reviews
            </h2>
            <p className="text-foreground/70">
              Hear what previous attendees have to say about their Global Summit experience.
            </p>
          </div>
          
          <ReviewCarousel />
        </div>
      </section>
      
      {/* Gallery Preview Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">
              Gallery
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Summit Memories
            </h2>
            <p className="text-foreground/70">
              A glimpse of our previous summits and the experiences shared.
            </p>
          </div>
          
          <GalleryPreview />
          
          <div className="text-center mt-12">
            <Link to="/gallery">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8">
                Explore Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-30"></div>
        <div className="container mx-auto relative z-10">
          <div className="glass-card p-12 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Join Us at the Global Futuristic Summit
            </h2>
            <p className="text-xl mb-8">
              Be part of a transformative experience that will shape the future of technology and faith.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg">
              Register Now
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Index;
