import { X } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function CookieConsent() {
  return (
    <div>
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
            <button className="text-gray-400 hover:text-gray-600">
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
            <div className="bg-yellow-400 p-1 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
