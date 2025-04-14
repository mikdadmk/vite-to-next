
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock, ArrowLeft, Share2 } from "lucide-react";
import EventImageGallery from "@/components/EventImageGallery";
import RelatedEvents from "@/components/RelatedEvents";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
// This data would typically come from an API
const eventsData = {
  'islamic-finance': {
    id: 'islamic-finance',
    title: 'Future of Islamic Finance',
    date: 'May 15, 2025',
    time: '09:00 AM - 04:00 PM',
    location: 'Dubai International Financial Centre',
    attendees: '500+',
    description: 'Exploring blockchain and fintech innovations in Islamic banking and investment systems.',
    longDescription: `
      <p>Join us for an in-depth exploration of how blockchain technology and fintech innovations are reshaping Islamic banking and investment systems. This conference brings together financial experts, blockchain developers, Sharia scholars, and industry pioneers to discuss the future of ethical finance in the digital age.</p>
      <p>Topics will include:</p>
      <ul>
        <li>Smart contracts for Sukuk issuance</li>
        <li>Decentralized finance (DeFi) applications compliant with Islamic principles</li>
        <li>Cryptocurrency regulations from a Sharia perspective</li>
        <li>Development of new financial instruments that balance innovation with ethical considerations</li>
        <li>The role of traditional Islamic banking in a digital future</li>
      </ul>
      <p>The conference will feature keynote speakers, panel discussions, interactive workshops, and networking opportunities designed to foster collaboration between technology innovators and Islamic finance experts.</p>
    `,
    image: 'https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80',
    tags: ['Finance', 'Blockchain', 'Islamic Banking'],
    speakers: [
      {
        name: 'Dr. Ali Rahman',
        role: 'Director, Islamic Banking Research Institute',
        bio: 'Pioneer in Islamic finance with over 20 years of experience in Sharia-compliant financial instruments.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
      },
      {
        name: 'Aisha Mahmood',
        role: 'Blockchain Advisor, Dubai Islamic Bank',
        bio: 'Expert in implementing blockchain solutions for Islamic financial institutions.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
      }
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80', alt: 'Islamic Finance Conference' },
      { src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80', alt: 'Banking Technology Panel' },
      { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80', alt: 'Attendees Networking' }
    ],
    agenda: [
      { time: '09:00 - 09:30', title: 'Registration & Welcome Coffee', speaker: '' },
      { time: '09:30 - 10:30', title: 'Keynote: The Evolution of Islamic Banking in the Digital Era', speaker: 'Dr. Ali Rahman' },
      { time: '10:45 - 12:00', title: 'Panel Discussion: Blockchain Applications in Sukuk Markets', speaker: 'Industry Panel' },
      { time: '12:00 - 13:30', title: 'Networking Lunch', speaker: '' },
      { time: '13:30 - 15:00', title: 'Workshop: Smart Contracts for Islamic Financial Products', speaker: 'Aisha Mahmood' },
      { time: '15:15 - 16:30', title: 'Panel: Regulatory Frameworks for Islamic Fintech', speaker: 'Regulatory Experts' }
    ]
  },
  'ai-ethics': {
    id: 'ai-ethics',
    title: 'AI Ethics Symposium',
    date: 'May 16, 2025',
    time: '10:00 AM - 06:00 PM',
    location: 'Knowledge Center, Dubai',
    attendees: '350+',
    description: 'Discussions on aligning artificial intelligence with Islamic ethics and global moral frameworks.',
    longDescription: `
      <p>As AI systems become more integrated into critical areas of society, the need for robust ethical frameworks has never been more important. The AI Ethics Symposium provides a forum for multidisciplinary dialogue on how we can ensure AI development benefits humanity while minimizing potential harms.</p>
      <p>Through panel discussions, interactive workshops, and networking sessions, participants will explore topics including:</p>
      <ul>
        <li>Algorithmic bias and fairness in machine learning</li>
        <li>Privacy considerations in AI systems</li>
        <li>Transparency and explainability requirements</li>
        <li>Regulatory approaches to AI governance</li>
        <li>Balancing innovation with ethical constraints</li>
        <li>Islamic perspectives on artificial intelligence</li>
      </ul>
      <p>The symposium will feature case studies of both successful and problematic AI implementations, with lessons learned and best practices for moving forward in an ethically responsible manner.</p>
    `,
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1965&q=80',
    tags: ['AI', 'Ethics', 'Technology'],
    speakers: [
      {
        name: 'Dr. Sarah Abdullah',
        role: 'AI Ethics Professor, International Islamic University',
        bio: 'Leading researcher in the intersection of Islamic ethics and technology policy.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
      },
      {
        name: 'Tariq Johnson',
        role: 'Chief Ethics Officer, FutureTech AI',
        bio: 'Spearheading ethical AI development in commercial applications.',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
      }
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1965&q=80', alt: 'AI Ethics Conference' },
      { src: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80', alt: 'Panel Discussion' },
      { src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80', alt: 'Workshop Session' }
    ],
    agenda: [
      { time: '10:00 - 10:30', title: 'Opening Ceremony & Introduction', speaker: '' },
      { time: '10:30 - 11:30', title: 'Keynote: AI Governance from Faith Perspectives', speaker: 'Dr. Sarah Abdullah' },
      { time: '11:45 - 13:00', title: 'Panel: Algorithmic Justice and Fairness', speaker: 'Multi-faith Panel of Ethicists' },
      { time: '13:00 - 14:00', title: 'Lunch Break', speaker: '' },
      { time: '14:00 - 15:30', title: 'Workshop: Auditing AI Systems for Ethical Compliance', speaker: 'Tariq Johnson' },
      { time: '15:45 - 17:00', title: 'Interactive Session: Case Studies in AI Ethics', speaker: 'Various Presenters' },
      { time: '17:15 - 18:00', title: 'Closing Panel: Future of Faith-Informed Technology', speaker: 'All Speakers' }
    ]
  },
  'smart-cities': {
    id: 'smart-cities',
    title: 'Smart Cities Workshop',
    date: 'May 17, 2025',
    time: '09:30 AM - 05:30 PM',
    location: 'Urban Innovation Center, Dubai',
    attendees: '150+',
    description: 'Practical approaches to implementing smart city technologies with cultural sensitivity.',
    longDescription: `
      <p>This hands-on workshop explores the intersection of smart city technologies and cultural preservation, focusing on how cities across the Muslim world can embrace digital transformation while honoring their unique heritage and traditions.</p>
      <p>Participants will engage with urban planners, technology innovators, and cultural preservationists to explore solutions that enhance quality of life, sustainability, and efficiency while reinforcing cultural identity. Sessions will cover:</p>
      <ul>
        <li>Smart infrastructure that complements traditional architecture</li>
        <li>Data-driven governance models sensitive to local values</li>
        <li>Public spaces that blend technology with cultural practices</li>
        <li>Digital inclusion strategies for diverse populations</li>
        <li>Case studies from cities that have successfully balanced innovation and heritage</li>
      </ul>
      <p>The workshop format encourages active participation, with opportunities to collaborate on real-world smart city challenges and develop culturally appropriate solutions.</p>
    `,
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80',
    tags: ['Smart Cities', 'Urban Planning', 'Technology'],
    speakers: [
      {
        name: 'Eng. Omar Khalid',
        role: 'Smart City Architect, Dubai Municipality',
        bio: 'Leading the integration of smart technologies in urban development while preserving cultural heritage.',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
      },
      {
        name: 'Dr. Laila Hussain',
        role: 'Heritage Conservation Expert',
        bio: 'Specializes in preserving cultural identity within modernizing urban environments.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
      }
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80', alt: 'Smart City Urban Landscape' },
      { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80', alt: 'Workshop Collaboration' },
      { src: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1769&q=80', alt: 'Urban Technology Demo' }
    ],
    agenda: [
      { time: '09:30 - 10:00', title: 'Registration & Networking', speaker: '' },
      { time: '10:00 - 11:00', title: 'Presentation: Smart Cities - Technology with a Soul', speaker: 'Eng. Omar Khalid' },
      { time: '11:15 - 12:30', title: 'Case Studies: Medina, Istanbul, and Dubai', speaker: 'Dr. Laila Hussain' },
      { time: '12:30 - 13:30', title: 'Lunch Break', speaker: '' },
      { time: '13:30 - 15:30', title: 'Hands-on Workshop: IOT Solutions for Heritage Areas', speaker: 'Technical Team' },
      { time: '15:45 - 17:00', title: 'Breakout Groups: Designing Your Smart City Solution', speaker: 'All Participants' },
      { time: '17:00 - 17:30', title: 'Project Presentations & Conclusion', speaker: '' }
    ]
  },
  'quantum-computing': {
    id: 'quantum-computing',
    title: 'Quantum Computing Forum',
    date: 'May 18, 2025',
    time: '09:00 AM - 05:00 PM',
    location: 'Future Technologies Center, Dubai',
    attendees: '300+',
    description: 'Exploring the frontiers of quantum computing and its implications for future technologies.',
    longDescription: `
      <p>The Quantum Computing Forum will delve into the revolutionary potential of quantum technologies and their implications for science, industry, and society. This forward-looking event brings together quantum physicists, computer scientists, industry pioneers, and futurists to discuss the latest breakthroughs and their practical applications.</p>
      <p>Attendees will gain insights into:</p>
      <ul>
        <li>Quantum algorithms and their applications in cryptography, optimization, and simulation</li>
        <li>Quantum computing hardware developments and scalability challenges</li>
        <li>Quantum machine learning and artificial intelligence</li>
        <li>Potential industry disruptions in finance, healthcare, and materials science</li>
        <li>The timeline for quantum advantage in practical applications</li>
        <li>Philosophical and ethical questions raised by this paradigm shift in computing</li>
      </ul>
      <p>The forum combines technical presentations with accessible explanations, making quantum concepts understandable to a broad audience while still providing depth for specialists.</p>
    `,
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80',
    tags: ['Quantum', 'Computing', 'Innovation'],
    speakers: [
      {
        name: 'Dr. Jamal Hassan',
        role: 'Quantum Physics Professor, MIT',
        bio: 'Pioneering researcher in quantum algorithm development with numerous seminal papers.',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
      },
      {
        name: 'Dr. Sophia Chen',
        role: 'Quantum Algorithm Researcher, IBM Quantum',
        bio: 'Leading developer of quantum applications in machine learning and financial modeling.',
        image: 'https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
      }
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80', alt: 'Quantum Computing Visualization' },
      { src: 'https://images.unsplash.com/photo-1658204238967-f161c35d0d11?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80', alt: 'Quantum Forum Discussion' },
      { src: 'https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1787&q=80', alt: 'Technical Presentation' }
    ],
    agenda: [
      { time: '09:00 - 09:30', title: 'Welcome & Introduction to Quantum Computing', speaker: '' },
      { time: '09:30 - 10:30', title: 'Keynote: The Quantum Revolution Has Arrived', speaker: 'Dr. Jamal Hassan' },
      { time: '10:45 - 12:00', title: 'Technical Session: Quantum Algorithms and Applications', speaker: 'Dr. Sophia Chen' },
      { time: '12:00 - 13:00', title: 'Networking Lunch', speaker: '' },
      { time: '13:00 - 14:15', title: 'Panel: Quantum Computing in Finance and Cryptography', speaker: 'Industry Panel' },
      { time: '14:30 - 15:30', title: 'Interactive Session: Quantum Computing Business Opportunities', speaker: 'Business Leaders' },
      { time: '15:45 - 17:00', title: 'Panel: Ethical and Philosophical Implications of Quantum Computing', speaker: 'Multi-disciplinary Panel' }
    ]
  },
  'sustainable-tech': {
    id: 'sustainable-tech',
    title: 'Sustainable Technology Expo',
    date: 'May 19, 2025',
    time: '10:00 AM - 07:00 PM',
    location: 'Green Innovation Park, Dubai',
    attendees: '1200+',
    description: 'Showcasing innovations in renewable energy and sustainable development aligned with Islamic principles.',
    longDescription: `
      <p>The Sustainable Technology Expo showcases cutting-edge innovations in renewable energy, ecological conservation, and sustainable development that align with Islamic principles of stewardship and balance. This interactive exhibition brings together entrepreneurs, researchers, faith leaders, and policy makers committed to technological solutions for environmental challenges.</p>
      <p>The expo features:</p>
      <ul>
        <li>Exhibitions of the latest renewable energy technologies</li>
        <li>Circular economy innovations reducing waste and pollution</li>
        <li>Sustainable agriculture and food security solutions</li>
        <li>Water conservation and purification systems</li>
        <li>Green building designs that incorporate traditional architectural wisdom</li>
        <li>Live demonstrations and interactive displays</li>
      </ul>
      <p>Throughout the day, short presentations will highlight how traditional wisdom and values can inform modern sustainability practices, creating a harmonious approach to environmental stewardship.</p>
    `,
    image: 'https://images.unsplash.com/photo-1473308822086-178fd4e9420d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1766&q=80',
    tags: ['Sustainability', 'Energy', 'Environment'],
    speakers: [
      {
        name: 'Dr. Amina Rahman',
        role: 'Sustainable Development Expert, UNEP',
        bio: 'Advisor to governments on implementing sustainable development goals within cultural contexts.',
        image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
      },
      {
        name: 'Sheikh Yusuf Abdullah',
        role: 'Islamic Scholar, Environmental Ethics',
        bio: 'Leading voice on environmental conservation from an Islamic perspective.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
      }
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1473308822086-178fd4e9420d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1766&q=80', alt: 'Sustainable Technology Exhibition' },
      { src: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80', alt: 'Renewable Energy Display' },
      { src: 'https://images.unsplash.com/photo-1579389082546-c38d75bf1bbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80', alt: 'Green Building Models' }
    ],
    agenda: [
      { time: '10:00 - 10:30', title: 'Expo Opening Ceremony', speaker: '' },
      { time: '10:30 - 12:00', title: 'Keynote: Faith and Environmental Stewardship', speaker: 'Sheikh Yusuf Abdullah' },
      { time: '12:00 - 18:00', title: 'Exhibition Open - All Zones', speaker: '' },
      { time: '13:00 - 14:00', title: 'Panel: Renewable Energy in Developing Countries', speaker: 'Dr. Amina Rahman & Panel' },
      { time: '15:00 - 16:00', title: 'Demonstration: Water Conservation Technologies', speaker: 'Technical Experts' },
      { time: '17:00 - 18:00', title: 'Startup Competition: Sustainable Innovations', speaker: 'Entrepreneurs' },
      { time: '18:00 - 19:00', title: 'Networking Reception & Closing', speaker: '' }
    ]
  },
  'digital-health': {
    id: 'digital-health',
    title: 'Digital Health Innovations',
    date: 'May 20, 2025',
    time: '09:00 AM - 05:30 PM',
    location: 'Medical Innovation Center, Dubai',
    attendees: '400+',
    description: 'Exploring the intersection of healthcare technology and faith-based ethical considerations.',
    longDescription: `
      <p>The Digital Health Innovations conference explores how emerging technologies are transforming healthcare delivery, research, and patient experiences while addressing the ethical dimensions from faith-based perspectives. This event brings together medical professionals, technologists, religious scholars, and ethicists to discuss the future of compassionate, equitable, and value-aligned healthcare.</p>
      <p>Sessions will cover:</p>
      <ul>
        <li>Telemedicine and remote healthcare delivery in underserved communities</li>
        <li>AI applications in diagnosis and treatment planning</li>
        <li>Personalized medicine informed by genomics and big data</li>
        <li>Health data privacy and security concerns</li>
        <li>Accessibility and equity in digital health solutions</li>
        <li>Medical ethics from Islamic and comparative religious perspectives</li>
      </ul>
      <p>The conference emphasizes both technological advances and the human dimensions of healthcare, exploring how digital tools can enhance rather than replace the compassionate human connection essential to healing.</p>
    `,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80',
    tags: ['Healthcare', 'Digital', 'Innovation'],
    speakers: [
      {
        name: 'Dr. Layla Mahmoud',
        role: 'Director, Digital Health Ethics Center',
        bio: 'Pioneering researcher in ethical frameworks for healthcare AI and digital medicine.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
      },
      {
        name: 'Prof. Hassan Ibrahim',
        role: 'Medical Ethics Scholar, Al-Azhar University',
        bio: 'Authority on Islamic bioethics and its application to modern medical technologies.',
        image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
      }
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80', alt: 'Digital Health Conference' },
      { src: 'https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1771&q=80', alt: 'Medical Technology Demo' },
      { src: 'https://images.unsplash.com/photo-1576671081837-49b1a2a46506?ixlib=rb-4.0.3&auto=format&fit=crop&w=1778&q=80', alt: 'Healthcare Ethics Panel' }
    ],
    agenda: [
      { time: '09:00 - 09:30', title: 'Registration & Networking', speaker: '' },
      { time: '09:30 - 10:30', title: 'Keynote: The Future of Compassionate Digital Healthcare', speaker: 'Dr. Layla Mahmoud' },
      { time: '10:45 - 12:00', title: 'Panel: AI in Medical Diagnostics - Ethical Frameworks', speaker: 'Multi-disciplinary Panel' },
      { time: '12:00 - 13:00', title: 'Lunch Break', speaker: '' },
      { time: '13:00 - 14:15', title: 'Presentation: Islamic Perspectives on Medical Privacy', speaker: 'Prof. Hassan Ibrahim' },
      { time: '14:30 - 15:45', title: 'Case Studies: Successful Health Tech Implementations', speaker: 'Various Presenters' },
      { time: '16:00 - 17:30', title: 'Workshop: Designing Ethical Health Technologies', speaker: 'Interactive Session' }
    ]
  }
};

const EventDetail = () => {
  const { eventId } = useParams();
  const router = useRouter();
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call
    if (eventId && eventsData[eventId as keyof typeof eventsData]) {
      setEvent(eventsData[eventId as keyof typeof eventsData]);
    }
    setLoading(false);
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [eventId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-foreground text-xl">Loading event details...</div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-3xl font-bold mb-6">Event Not Found</h1>
          <p className="mb-8">The event you're looking for doesn't exist or has been removed.</p>
          <Button asChild className="bg-primary hover:bg-primary/80 text-primary-foreground">
            <Link href="/events">View All Events</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-primary/40 z-10" />
          <div className="absolute inset-0 islamic-pattern opacity-30 z-0" />
          
          <div className="container mx-auto px-6 h-full flex items-center relative z-20">
            <div className="max-w-4xl">
              <Link href="/events" className="flex items-center text-primary hover:text-foreground mb-4 transition-colors">
                <ArrowLeft size={16} className="mr-2" />
                <span>Back to Events</span>
              </Link>
              
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {event.tags.map((tag: string) => (
                    <span key={tag} className="text-xs px-3 py-1 bg-primary/30 text-foreground rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold mb-4 font-display">{event.title}</h1>
                
                <p className="text-xl text-foreground/80 max-w-2xl">{event.description}</p>
              </div>
            </div>
          </div>
        </div>
        
        <section className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="glass-card p-8 mb-12">
                <h2 className="text-2xl font-bold mb-6 font-display">About This Event</h2>
                <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: event.longDescription }} />
              </div>
              
              <div className="glass-card p-8 mb-12">
                <h2 className="text-2xl font-bold mb-6 font-display">Event Schedule</h2>
                <div className="space-y-6">
                  {event.agenda.map((item: any, index: number) => (
                    <div key={index} className="border-l-2 border-primary pl-4 py-1">
                      <p className="text-primary font-medium">{item.time}</p>
                      <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                      {item.speaker && <p className="text-foreground/70">{item.speaker}</p>}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Event Gallery */}
              {event.gallery && (
                <div className="glass-card p-8 mb-12">
                  <EventImageGallery images={event.gallery} />
                </div>
              )}
              
              {event.speakers.length > 0 && (
                <div className="glass-card p-8 mb-12">
                  <h2 className="text-2xl font-bold mb-6 font-display">Featured Speakers</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {event.speakers.map((speaker: any, index: number) => (
                      <div key={index} className="flex space-x-4">
                        <div className="flex-shrink-0 w-20 h-20 rounded-full bg-primary/30 overflow-hidden border-2 border-primary flex items-center justify-center">
                          {speaker.image ? 
                            <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" /> :
                            <span className="text-2xl font-bold">{speaker.name.charAt(0)}</span>
                          }
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{speaker.name}</h3>
                          <p className="text-primary text-sm">{speaker.role}</p>
                          <p className="text-foreground/70 mt-2 text-sm">{speaker.bio}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Related Events */}
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-6 font-display">Related Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <RelatedEvents 
                    events={Object.values(eventsData)} 
                    currentEventId={event.id} 
                  />
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="glass-card p-6 mb-6">
                  <h3 className="text-xl font-semibold mb-4 font-display">Event Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Date</p>
                        <p className="text-foreground/70">{event.date}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Time</p>
                        <p className="text-foreground/70">{event.time}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-foreground/70">{event.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Expected Attendees</p>
                        <p className="text-foreground/70">{event.attendees}</p>
                      </div>
                    </div>
                  </div>
                  
                  <Separator className="my-6 bg-foreground/10" />
                  
                  <Button className="w-full bg-primary hover:bg-primary/80 text-primary-foreground">
                    Add to Calendar
                  </Button>
                </div>
                
                <div className="glass-card p-6">
                  <h3 className="text-xl font-semibold mb-4 font-display">Share Event</h3>
                  <div className="flex justify-between">
                    <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/20">
                      <Share2 size={16} className="mr-2" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/20">
                      Download Details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default EventDetail;
