import Navbar from '@/app/components/layout/Navbar'
import Hero from '@/app/components/landing/Hero'
import ScorerCard from '@/app/components/scorer/ScorerCard'
import Targets from '@/app/components/landing/Targets'
import Docs from '@/app/components/landing/Docs'
import Footer from '@/app/components/layout/Footer'

export default function LandingPage() {
  return (
    <div className='min-h-screen flex flex-col bg-white'>
      <Navbar />

      {/* 1. Added 'flex flex-col gap-32 md:gap-48' to create massive vertical breathing room.
          2. Added 'pb-32' to ensure the last section doesn't crash into the footer.
      */}
      <main className='flex-grow flex flex-col gap-32 md:gap-48 pb-32'>
        {/* Hero already has its own internal padding, but gap-32 ensures 
            the ScorerCard doesn't feel attached to the text above it. 
        */}
        <Hero />

        {/* The 'scroll-mt' ensures that when you click "Try Now", 
            the fixed navbar doesn't cover the top of the card.
        */}
        <div id='try-now' className='scroll-mt-32'>
          <ScorerCard />
        </div>

        <Targets />

        <Docs />
      </main>

      <Footer />
    </div>
  )
}
