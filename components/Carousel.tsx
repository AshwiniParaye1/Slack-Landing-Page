import Image from "next/image";

export default function Carousel() {
  const logos = [
    "/fox.png",
    "/lonely-planet.png",
    "/intuit.png",
    "/carvana.png",
    "/kiva.png",
    "/target.png",
    "/deva.png"
  ];

  return (
    <section className="container py-12">
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-14">
        {logos.map((logo, index) => (
          <div key={index}>
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              width={120} // Set a fixed width or adjust dynamically
              height={60}
              className="h-10 md:h-10"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
