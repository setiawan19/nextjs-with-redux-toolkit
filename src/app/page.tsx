// "use client"

import { Detail } from "@/components/detail";
import { Sidebar } from "@/components/sidebar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen gap-2">
      <div className="flex items-center justify-center w-full p-5">
        <p className="font-bold text-2xl">NextJS Typescript With Redeux Toolkit</p>
      </div>
      <div className="flex min-h-screen w-full items-start justify-between p-10 gap-2">
        <Sidebar />
        <Detail />
      </div>
    
    </main>
  );
}
