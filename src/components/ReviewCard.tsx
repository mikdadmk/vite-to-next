
import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  title: string;
  review: string;
  image: string;
  rating?: number;
}

const ReviewCard = ({ name, title, review, image, rating = 5 }: ReviewCardProps) => {
  return (
    <div className="glass-card p-6 h-full flex flex-col min-w-[300px] md:min-w-[350px] transition-all duration-300 hover:shadow-lg border-summit-green-200/30">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-display font-medium text-lg">{name}</h4>
          <p className="text-sm text-foreground/70">{title}</p>
          <div className="flex mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < rating ? 'text-summit-green-500 fill-summit-green-500' : 'text-gray-300'}`} 
              />
            ))}
          </div>
        </div>
      </div>
      <div className="relative">
        <span className="absolute top-0 left-0 text-6xl opacity-20 leading-none font-serif">"</span>
        <p className="text-foreground/90 italic flex-grow pt-4 px-2 relative z-10">{review}</p>
        <span className="absolute bottom-0 right-0 text-6xl opacity-20 leading-none font-serif rotate-180">"</span>
      </div>
    </div>
  );
};

export default ReviewCard;
