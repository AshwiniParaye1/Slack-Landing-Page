import Image from "next/image";

export default function Carousel() {
  return (
    <>
      <section className="container mx-auto py-12 px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {[
            "FOX",
            "lonely planet",
            "intuit",
            "CARVANA",
            "kiva",
            "Target",
            "Deva"
          ].map((logo, index) => (
            <div
              key={index}
              className="grayscale opacity-70 hover:opacity-100 transition-opacity"
            >
              <Image
                src={`/placeholder.svg?height=40&width=${logo.length * 15}`}
                alt={logo}
                width={logo.length * 15}
                height={40}
                className="h-8 md:h-10"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
