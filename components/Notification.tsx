import { X } from "lucide-react";
import Link from "next/link";

export default function Notification() {
  return (
    <>
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
    </>
  );
}
