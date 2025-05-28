'use client';
import Image from "next/image";

type IndustryInfoCardProps = {
    heading: string;
    description: string;
    image_url: string;
};

export default function RugIndustryInfoCard1({
    heading,
    description,
    image_url,
}: IndustryInfoCardProps) {
    return (
        <section>
            <div className="mx-auto w-full max-w-screen-xl py-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                    <div>
                        <div className="max-w-lg md:max-w-none">
                            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                                {heading}
                            </h2>

                            <p className="mt-4 text-gray-700">
                                {description}
                            </p>
                        </div>
                    </div>

                    <div>
                        <Image
                            src="/path/to/image.jpg"
                            alt="Description"
                            width={500}
                            height={300}
                            className=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}