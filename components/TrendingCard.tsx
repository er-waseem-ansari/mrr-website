interface CardProps {
  imageUrl: string;
  heading: string;
  description: string;
}

export default function TrendingCard({ imageUrl, heading, description }: CardProps) {
  return (
    <div className="relative w-[400px] h-[300px] rounded-lg overflow-hidden shadow-lg">
      {/* Background Image with reduced opacity */}
      <img
        src={imageUrl}
        alt={heading}
        className="w-full h-full object-cover opacity-80"
      />

      {/* Overlay text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white bg-black/20">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">{heading}</h2>
        <p className="text-sm sm:text-base max-w-md">{description}</p>
      </div>
    </div>
  );
}