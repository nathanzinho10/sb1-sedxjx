import { Heart, Star } from 'lucide-react';

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  rating: number;
  discount?: number;
}

export default function ProductCard({ image, title, price, rating, discount }: ProductCardProps) {
  return (
    <div className="group relative bg-neutral-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        {discount && (
          <div className="absolute top-2 left-2 bg-white text-black px-2 py-1 rounded-md text-sm font-semibold">
            -{discount}%
          </div>
        )}
        <button className="absolute top-2 right-2 p-2 bg-neutral-900/80 rounded-full shadow-md hover:bg-neutral-800">
          <Heart className="h-5 w-5 text-white" />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">{title}</h3>
        <div className="flex items-center mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-neutral-700'}`}
            />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div>
            {discount ? (
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-white">
                  ${(price * (1 - discount / 100)).toFixed(2)}
                </span>
                <span className="text-sm text-neutral-500 line-through">${price.toFixed(2)}</span>
              </div>
            ) : (
              <span className="text-xl font-bold text-white">${price.toFixed(2)}</span>
            )}
          </div>
          <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-neutral-200 transition-colors">
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
}