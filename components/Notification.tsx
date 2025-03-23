import { X } from "lucide-react";

export default function Notification() {
  return (
    <>
      <div className="bg-[#2a6eb7] text-gray-100 py-6 px-4 relative rounded-[60px]">
        <div className="container mx-auto flex items-center justify-between px-4">
          <p className="text-xs md:text-base max-w-4xl">
            Slack is your digital HQ. Meet the new features keeping teams
            connected in a work-from-anywhere world.
            <span className="ml-2 font-medium underline">Let&apos;s go →</span>
          </p>
          <button className="text-gray-100 hover:text-gray-200">
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </>
  );
}
