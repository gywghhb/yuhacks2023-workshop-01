// import Image from 'next/image'
import NavBar from "@/components/NavBar.component";
import Footer from "@/components/Footer.component";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* NAVBAR */}
      <NavBar />
      <div className="ComingSoonContainer sm:grow">
        
      </div>
      <Footer />
    </main>
  )
}
