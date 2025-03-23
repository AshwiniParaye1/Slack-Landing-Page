import { Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="container mx-auto py-4 px-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/placeholder.svg?height=30&width=120"
              alt="Slack"
              width={120}
              height={30}
              className="h-8"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <button className="flex items-center text-gray-600 hover:text-gray-900 font-medium">
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
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Enterprise
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Resources
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Pricing
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center text-gray-600 hover:text-gray-900">
            <Search className="h-5 w-5" />
          </button>
          <Link
            href="#"
            className="hidden md:block text-gray-600 hover:text-gray-900 font-medium"
          >
            Sign in
          </Link>
          <Button
            variant="outline"
            className="hidden md:flex border-purple-700 text-purple-700 hover:bg-purple-50"
          >
            TALK TO SALES
          </Button>
          <Button className="bg-purple-700 hover:bg-purple-800 text-white">
            TRY FOR FREE
          </Button>
        </div>
      </header>

      {/* Notification Banner */}
      <div className="bg-blue-700 text-white py-6 px-4 relative">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-sm md:text-base max-w-3xl">
            Slack is your digital HQ. Meet the new features keeping teams
            connected in a work-from-anywhere world.
            <Link href="#" className="ml-2 font-medium underline">
              Let&apos;s go →
            </Link>
          </p>
          <button className="text-white hover:text-gray-200">
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Slack is where the future works
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Transform the way you work with one place for everyone and
              everything you need to get stuff done.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-purple-700 hover:bg-purple-800 text-white"
              >
                TRY FOR FREE
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 bg-white hover:bg-gray-50"
              >
                <Image
                  src="/placeholder.svg?height=20&width=20"
                  alt="Google"
                  width={20}
                  height={20}
                  className="mr-2 h-5 w-5"
                />
                SIGN UP WITH GOOGLE
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-1 z-10">
                <div className="flex items-center gap-1 bg-yellow-50 rounded-full px-2 py-1">
                  <span className="text-yellow-500 text-lg">👍</span>
                  <span className="font-bold">3</span>
                </div>
              </div>
              <div className="bg-purple-900 rounded-lg overflow-hidden shadow-xl">
                <div className="flex items-center gap-1 px-2 pt-1">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex">
                  {/* Left sidebar */}
                  <div className="w-48 bg-purple-900 text-white p-3">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="font-medium">Channels</span>
                      </div>
                      <span className="text-lg">+</span>
                    </div>
                    <div className="bg-blue-700 rounded py-1 px-2">
                      <div className="flex items-center">
                        <span className="text-blue-300 mr-2">#</span>
                        <span className="text-white">project-unicorn</span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center gap-1 bg-white rounded-full px-2 py-1">
                        <span className="text-blue-400 text-sm">💬</span>
                        <span className="font-bold text-gray-800">5</span>
                      </div>
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="flex-1 bg-white p-3">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <span className="font-bold text-gray-800 mr-2">
                          # project-unicorn
                        </span>
                      </div>
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="h-6 w-6 rounded-full bg-gray-300 border-2 border-white"
                          ></div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Zoe's message */}
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=32&width=32"
                            alt="Zoe Maxwell"
                            width={32}
                            height={32}
                          />
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">
                            Zoe Maxwell
                          </div>
                          <p className="text-gray-600">
                            Are we ready for launch?
                          </p>
                        </div>
                      </div>

                      {/* Matt's message */}
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=32&width=32"
                            alt="Matt Brewer"
                            width={32}
                            height={32}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-800">
                            Matt Brewer
                          </div>
                          <p className="text-gray-600">
                            Here&apos;s the run of show:
                          </p>
                          <div className="mt-1 border border-gray-200 rounded p-2 flex items-center gap-2">
                            <div className="h-5 w-5 bg-blue-100 rounded flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3 text-blue-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                              </svg>
                            </div>
                            <div className="h-2 w-32 bg-gray-200 rounded"></div>
                          </div>
                        </div>
                        <div className="absolute right-12">
                          <div className="flex items-center gap-1 bg-yellow-50 rounded-full px-2 py-1">
                            <span className="text-yellow-500 text-lg">💡</span>
                            <span className="font-bold">8</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-4 right-12">
                      <div className="flex items-center gap-1 bg-gray-100 rounded-full px-2 py-1">
                        <span className="text-gray-500 text-xs">• •</span>
                        <span className="font-bold text-gray-800">5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Section */}
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

      {/* Future Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-amber-50 rounded-lg p-8 flex items-center justify-center">
            <div className="relative">
              <div className="grid grid-cols-12 gap-2">
                {Array.from({ length: 144 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-2 w-2 rounded-full bg-amber-200"
                  ></div>
                ))}
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-blue-500 text-white rounded-full h-12 w-12 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 bg-blue-100 text-blue-800 px-4 py-2 rounded">
                FUTURE
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Now is your moment to build a better tomorrow
            </h2>
            <p className="text-lg text-gray-600">
              We&apos;ve seen what the future can be. Now it&apos;s time to
              decide what it will be.
            </p>
            <Button
              variant="outline"
              className="border-purple-700 text-purple-700 hover:bg-purple-50 mt-4"
            >
              WATCH VIDEO
            </Button>
          </div>
        </div>
      </section>

      {/* Cookie Consent */}
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
          <Button className="w-full bg-purple-700 hover:bg-purple-800 text-white">
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
