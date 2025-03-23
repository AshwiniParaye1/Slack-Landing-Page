import Carousel from "@/components/Carousel";
import CookieConsent from "@/components/CookieConsent";
import FutureVision from "@/components/FutureVision";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Notification from "@/components/Notification";

export default function Home() {
  return (
    <div className="min-h-screen bg-white px-10">
      {/* Navigation */}
      <Navbar />

      {/* Notification Banner */}
      <Notification />

      {/* Hero Section */}
      <Hero />

      {/* Logos Section */}
      <Carousel />

      {/* Future Section */}
      <FutureVision />

      {/* Cookie Consent */}
      <CookieConsent />
    </div>
  );
}
