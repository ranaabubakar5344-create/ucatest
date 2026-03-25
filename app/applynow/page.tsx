"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ApplyNowPage() {
  const router = useRouter();

  useEffect(() => {
    // Hide EVERYTHING except our page
    const bodyChildren = document.body.children;

    for (let i = 0; i < bodyChildren.length; i++) {
      const el = bodyChildren[i] as HTMLElement;

      if (!el.id.includes("apply-page")) {
        el.style.display = "none";
      }
    }

    return () => {
      for (let i = 0; i < bodyChildren.length; i++) {
        const el = bodyChildren[i] as HTMLElement;
        el.style.display = "";
      }
    };
  }, []);

  return (
    <div
      id="apply-page"
      className="fixed inset-0 z-[999999] bg-white"
    >
 <div
  onClick={() => router.push("/")}
  className="hidden sm:block fixed top-8 left-6 z-[1000000] cursor-pointer 
   px-4 py-2 rounded-xl"
>
  <Image
    src="/logo1.png"
    alt="UCA Logo"
    width={180}
    height={60}
    className="object-contain transition-transform duration-300 hover:scale-105"
    priority
  />
</div>

      {/* Form */}
      <iframe
        src="https://form.fillout.com/t/9Ns39jQxWMus"
        className="w-full h-full border-0"
      />

    </div>
  );
}