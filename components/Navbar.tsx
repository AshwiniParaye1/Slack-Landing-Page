import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div>
      <header className="container mx-auto py-4 px-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center justify-between">
            <Image
              src="/logo.png"
              alt="Slack"
              width={80}
              height={30}
              className="h-6"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <button className="flex items-center text-gray-600 hover:text-gray-900 font-semibold text-sm">
                Product
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 font-semibold text-sm"
            >
              Enterprise
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 font-semibold text-sm"
            >
              Resources
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 font-semibold text-sm"
            >
              Pricing
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center text-gray-600 hover:text-gray-900 font-semibold text-sm">
            <Search className="h-5 w-5" />
          </button>
          <Link
            href="#"
            className="hidden md:block text-gray-600 hover:text-gray-900 font-semibold text-sm"
          >
            Sign in
          </Link>
          <Button
            variant="outline"
            className="hidden md:flex border-[#611f69] text-[#611f69] hover:bg-purple-50"
          >
            TALK TO SALES
          </Button>
          <Button className="bg-[#611f69] hover:bg-[#400d40] text-white">
            TRY FOR FREE
          </Button>
        </div>
      </header>
    </div>
  );
}
