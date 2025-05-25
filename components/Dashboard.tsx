import TrendingCard from '@/components/TrendingCard';
import Image from 'next/image';
import Link from 'next/link';
import { TrendingUp } from "lucide-react";
import { categories } from "@/data/mockData";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import RugIndustryInfoCard1 from './ui/rugIndustryInfoCard1';
import RugIndustryInfoCard2 from './ui/rugIndustryInfoCard2';
import TheArtOfRugMaking from './ui/theArtOfRugMaking';



export default function Dashboard() {
  return (
    <div className=" -mt-20">
      {/* Full-Width Banner Image */}
      <div className="relative w-full h-[90vh] overflow-hidden">
        {/* Background Image */}
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/mirzapur-royale-rugs.firebasestorage.app/o/website_images%2Fdashboard-banner.jpg?alt=media&token=5161b6fb-5138-44b3-9a6a-978c1b198408"
          alt="Dashboard Banner"
          fill
          className="absolute top-0 object-cover "
          priority
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">
            Discover Timeless Elegance
          </h1>
          <p className="text-base sm:text-lg lg:text-lg max-w-xl mb-4">
            Explore our exclusive collection of handcrafted Mirzapur Royale Rugs, where tradition meets modern luxury.
          </p>
          <Link
            href="/collections"
            className="border border-white text-white bg-transparent font-semibold px-6 py-2 rounded-md hover:bg-white hover:text-black transition">
            Shop All Collections
          </Link>
        </div>
      </div>

      <div className="w-screen flex flex-col items-center">

        {/* Trending Label with Icon */}
        <h2 className="text-4xl font-semibold text-center mb-12 text-primary flex items-center justify-center">
          <TrendingUp className="mr-3 h-8 w-8" />
          Trending Now
        </h2>

        {/* Trending Cards */}
        <div className="container flex flex-row flex-wrap justify-center gap-6">
          <div className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 h-full flex flex-col">
          <TrendingCard
            imageUrl="https://firebasestorage.googleapis.com/v0/b/mirzapur-royale-rugs.firebasestorage.app/o/website_images%2Ftrending-1.jpg?alt=media&token=48cc053e-48ae-462a-b749-ab1465abe891aa"
            heading="Luxury Persian Rug"
            description="A beautifully handcrafted rug from Mirzapur, blending tradition and elegance."
          />
          </div>
          <div className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 h-full flex flex-col">
          <TrendingCard
            imageUrl="https://firebasestorage.googleapis.com/v0/b/mirzapur-royale-rugs.firebasestorage.app/o/website_images%2Ftrending-2.jpg?alt=media&token=f1a1f1fa-85ad-4a5c-a7f6-af0178bba1066a"
            heading="Luxury Persian Rug"
            description="A beautifully handcrafted rug from Mirzapur, blending tradition and elegance."
          />
          </div>

        </div>

        <section className="container mt-16 sm:px-6 lg:px-8 bg-grey-900 shadow-lg rounded-lg overflow-hidden border-gray-200 pt-10 pb-10">
          <h2 className="text-3xl font-semibold text-center mb-10 text-primary">Explore Our Varieties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link key={category.slug} href={`/collections/${category.slug}`} className="group">
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 h-full flex flex-col">
                  <CardHeader className="p-0">
                    <div className="aspect-video relative bg-muted">
                      <Image
                        src={category.imageUrl || "https://placehold.co/600x400.png"}
                        alt={category.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        data-ai-hint={category.dataAiHint || "rug category"}
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 text-center flex-grow flex flex-col items-center justify-center">
                    <CardTitle className="text-xl font-medium group-hover:text-accent transition-colors">{category.name}</CardTitle>
                    {category.description && (
                      <CardDescription className="text-sm mt-1">{category.description}</CardDescription>
                    )}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
        <TheArtOfRugMaking />
        <RugIndustryInfoCard1 heading={"this is heading"} description={"this is description"} image_url={"https://placehold.co/600x400.png"}/>
        <RugIndustryInfoCard2 heading={"this is heading"} description={"this is description"} image_url={"https://placehold.co/600x400.png"}/>
        <RugIndustryInfoCard1 heading={"this is heading"} description={"this is description"} image_url={"https://placehold.co/600x400.png"}/>
        <RugIndustryInfoCard2 heading={"this is heading"} description={"this is description"} image_url={"https://placehold.co/600x400.png"}/>
      </div>
    </div>
  );
}