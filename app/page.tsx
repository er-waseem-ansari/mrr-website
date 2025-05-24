import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-[200vh] bg-gradient-to-b from-white via-gray-100 to-gray-300">
      <div className="relative w-full h-[70vh] mb-8 overflow-hidden">
        {/* Background Image */}
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/mirzapur-royale-rugs.firebasestorage.app/o/website_images%2Fdashboard-banner.jpg?alt=media&token=5161b6fb-5138-44b3-9a6a-978c1b198408"
          alt="Dashboard Banner"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-3xl sm:text-6xl lg:text-4xl font-bold mb-2">
            Discover Timeless Elegance
          </h1>
          <p className="text-sm sm:text-base lg:text-lg max-w-xl mb-4">
            Explore our exclusive collection of handcrafted Mirzapur Royale Rugs, where tradition meets modern luxury.
          </p>
          <Link
            href="/collections"
            className="bg-white text-black font-semibold px-6 py-2 rounded-md hover:bg-gray-100 transition"
          >
            Shop All Collections
          </Link>
        </div>
      </div>

      <h2 className="text-4xl font-bold mb-4">Welcome to Mirzapur Royal Rugs</h2>
      <p className="text-lg max-w-2xl">
        Scroll down to see the translucent navbar. This is placeholder content to create page height.
      </p>
    </div>
  );
}