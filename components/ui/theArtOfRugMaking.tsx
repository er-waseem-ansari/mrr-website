

import Link from "next/link";
export default function TheArtOfRugMaking() {
  return (
<section className="bg-card p-8 md:p-12 my-10 width-full">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-primary">The Art of Rug Making</h2>
          <p className="text-lg text-card-foreground/80 mb-4 leading-relaxed">
            Rugs and carpets have been an integral part of human culture for centuries, evolving from simple utilitarian items to intricate works of art. At Mirzapur Royale, we celebrate this rich heritage by offering a curated selection of high-quality, handcrafted pieces.
          </p>
          <p className="text-lg text-card-foreground/80 leading-relaxed">
            Each rug tells a story through its patterns, colors, and textures, reflecting the traditions and craftsmanship of its origin. Whether you seek a statement piece or a subtle complement to your decor, our collection offers something unique for every taste.
          </p>
          <Link href="/about">
            {/* <Button variant="link" className="mt-6 text-accent text-lg">
              Learn More About Our Craft <ChevronRight className="ml-1 h-5 w-5" />
            </Button> */}
          </Link>
        </div>
      </section>
  );
}