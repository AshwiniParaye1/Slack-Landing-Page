"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null; // Hide component when closed

  return (
    <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg max-w-sm z-50">
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div className="pr-4">
            <p className="text-sm text-gray-600 mb-4">
              This website uses cookies to enhance user experience and to
              analyze performance and traffic on our website. We also share
              information about your use of our site with our social media,
              advertising and analytics partners.
              <Link href="#" className="text-blue-600 hover:underline ml-1">
                More info
              </Link>
            </p>
          </div>
          <button
            className="text-gray-400 hover:text-gray-600"
            onClick={() => setIsVisible(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <Button className="w-full bg-[#611f69] hover:bg-[#400d40] text-white">
          ACCEPT ALL COOKIES
        </Button>
      </div>
      <div className="border-t p-3">
        <div className="flex items-center gap-2 text-sm">
          <span>Hey there 👋 Want to know something cool?</span>
          <div className="bg-[#611f69] px-4 py-2 rounded-sm ">👋</div>
        </div>
      </div>
    </div>
  );
}
