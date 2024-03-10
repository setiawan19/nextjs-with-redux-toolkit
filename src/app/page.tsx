// "use client"

import { Detail } from "@/components/detail";
import { Sidebar } from "@/components/sidebar";



export const Home = ()=> {

  return (
    <main className="flex min-h-screen items-start justify-between p-24">
     <Sidebar/>
     <Detail/>
    </main>
  );
}
export default Home;