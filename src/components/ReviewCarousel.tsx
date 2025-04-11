import { useRef, useEffect } from "react";
import ReviewCard from "./ReviewCard";

interface Review {
  id: number;
  name: string;
  title: string;
  review: string;
  image: string;
}

const reviewsData: Review[] = [
  {
    id: 1,
    name: "Ahmed Hassan",
    title: "Tech Innovator, AI Labs",
    review: "The Global Futuristic Summit was a transformative experience that beautifully merged technological innovation with spiritual wisdom. The discussions on ethical AI development were particularly enlightening.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
  },
  {
    id: 2,
    name: "Fatima Zahra",
    title: "Professor, Islamic Studies",
    review: "A remarkable confluence of faith and future technologies. The summit created a space where traditional wisdom and cutting-edge innovation could harmoniously coexist and inform each other.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
  },
  {
    id: 3,
    name: "Mustafa Ali",
    title: "CEO, FutureTech Solutions",
    review: "The networking opportunities alone were worth attending. I connected with brilliant minds from across the globe who share my vision for a technology-enhanced future that respects our sacred traditions.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: 4,
    name: "Aisha Rahman",
    title: "Blockchain Developer",
    review: "The workshops on ethical implementation of blockchain in Islamic finance were precisely what our industry needed. I left with practical knowledge I could immediately apply to my projects.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: 5,
    name: "Omar Farooq",
    title: "Sustainable Development Expert",
    review: "What impressed me most was how the summit addressed climate technology through the lens of our religious duty to be stewards of the Earth. The integration of faith and sustainability was seamless.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
  }
];

const ReviewCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (!scrollContainer) return;

    // Clone the first few items and append to the end for infinite scroll effect
    const items = Array.from(scrollContainer.children);
    if (items.length < 10) { // Only clone if we don't have many items already
      items.slice(0, Math.min(3, items.length)).forEach(item => {
        const clone = item.cloneNode(true);
        scrollContainer.appendChild(clone);
      });
    }

    const scrollAnimation = () => {
      if (!scrollContainer) return;
      
      // If we've scrolled to the cloned elements, reset to start without animation
      if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth - scrollContainer.clientWidth) * 0.9) {
        scrollContainer.style.scrollBehavior = 'auto';
        scrollContainer.scrollLeft = 0;
        setTimeout(() => {
          scrollContainer.style.scrollBehavior = 'smooth';
        }, 50);
      } else {
        // Otherwise, increment the scroll position
        scrollContainer.scrollLeft += 1;
      }
    };

    // Scroll slowly but continuously
    const interval = setInterval(scrollAnimation, 30);
    
    // Pause scrolling when user interacts
    const pauseScroll = () => clearInterval(interval);
    scrollContainer.addEventListener('mouseenter', pauseScroll);
    scrollContainer.addEventListener('touchstart', pauseScroll, { passive: true });
    
    return () => {
      clearInterval(interval);
      scrollContainer.removeEventListener('mouseenter', pauseScroll);
      scrollContainer.removeEventListener('touchstart', pauseScroll);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="flex gap-6 overflow-x-auto pb-6 no-scrollbar snap-x snap-mandatory"
      style={{ scrollBehavior: 'smooth' }}
    >
      {reviewsData.map(review => (
        <div key={review.id} className="snap-start flex-shrink-0" style={{ width: 'calc(100% - 1.5rem)', maxWidth: '400px' }}>
          <ReviewCard
            name={review.name}
            title={review.title}
            review={review.review}
            image={review.image}
          />
        </div>
      ))}
    </div>
  );
};

export default ReviewCarousel;
