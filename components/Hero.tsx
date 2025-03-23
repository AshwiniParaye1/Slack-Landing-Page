import Image from "next/image";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div>
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
                className="bg-[#611f69] hover:bg-[#400d40] text-white h-12 rounded-[3px] text-xs"
              >
                TRY FOR FREE
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-200 bg-blue-500 hover:bg-gray-50 h-12 rounded-[3px] p-1"
              >
                <Image
                  src="/google.png"
                  alt="Google"
                  width={10}
                  height={10}
                  className="h-10 w-11 rounded-none bg-white "
                />
                <p className="pr-4 text-xs"> SIGN UP WITH GOOGLE</p>
              </Button>
            </div>
          </div>

          <div className="relative max-w-xl">
            <div className="relative ">
              <div className="absolute -top-6 left-1/4 transform -translate-x-1/2 bg-white rounded-full p-1 z-10 border-[0.2px]">
                <div className="flex items-center gap-1 bg-white rounded-full px-4">
                  <span className="text-yellow-500 text-lg">👍</span>
                  <span className="font-bold">3</span>
                </div>
              </div>
              <div className="bg-[#611f69] rounded-lg overflow-hidden shadow-xl">
                <div className="flex items-center gap-1 bg-[#400d40] p-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex">
                  {/* Left sidebar */}
                  <div className="w-48 bg-[#611f69] text-white p-3">
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
                        <span className="font-light">Channels</span>
                      </div>
                      <span className="font-light">+</span>
                    </div>
                    <div className="bg-[#2a6eb7] rounded px-2 py-1">
                      <div className="flex items-center">
                        <span className="text-gray-100 mr-2">#</span>
                        <span className="text-gray-100">project-unicorn</span>
                      </div>
                    </div>
                    <div className="absolute bottom-1/4 -left-5">
                      <div className="flex items-center gap-1 bg-white rounded-full  px-4 py-1 border-[0.2px]">
                        <span className="text-blue-400 text-sm">🎉</span>
                        <span className="font-bold text-gray-800">5</span>
                      </div>
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="flex-1 bg-white p-3 pb-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <span className="font-bold text-gray-800 mr-2">
                          # project-unicorn
                        </span>
                      </div>
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div
                            key={i}
                            className="h-6 w-6 rounded-sm bg-gray-300 border-2 border-white overflow-hidden gap-2"
                          >
                            <Image
                              src="/user.jpg"
                              alt="user"
                              width={20}
                              height={20}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Zoe's message */}
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden">
                          <Image
                            src="/user.jpg"
                            alt="Zoe Maxwell"
                            width={32}
                            height={32}
                          />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800">
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
                            src="/user.jpg"
                            alt="Matt Brewer"
                            width={32}
                            height={32}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-800">
                            Matt Brewer
                          </div>
                          <p className="text-gray-600">
                            Here&apos;s the run of show:
                          </p>
                          <div className="mt-2 border border-gray-200 rounded p-2 flex items-center gap-2 w-60">
                            <div className="h-5 w-5 bg-blue-100 rounded flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-blue-400"
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
                        <div className="absolute -right-6  bottom-24">
                          <div className="flex items-center gap-1 bg-white  border-[0.5px] rounded-full px-4 py-1">
                            <span className="text-yellow-500 text-lg">💡</span>
                            <span className="font-bold">8</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-4 right-20">
                      <div className="flex items-center gap-1  bg-white border-[0.5px] rounded-full px-4 py-1">
                        <span className="text-xs">👀</span>
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
    </div>
  );
}
