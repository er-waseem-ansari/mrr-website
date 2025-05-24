// components/Navbar.tsx
export default function Navbar() {
   return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md">
      <div className="container mx-auto flex h-20 items-center justify-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-primary text-2xl font-semibold">
          Mirzapur Royal Rugs
        </h1>
      </div>
    </nav>
  );
}