import { Button } from "./ui/button";

export default function FutureVision() {
  return (
    <div>
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
              className="border-[#611f69] text-[#611f69] hover:bg-purple-50 mt-4"
            >
              WATCH VIDEO
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
