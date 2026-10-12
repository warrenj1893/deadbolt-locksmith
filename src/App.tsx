import React from "react";
import { EmergencyBar } from "./components/EmergencyBar";
import { Navbar } from "./components/Navbar";
import { ScopeNotice } from "./components/ScopeNotice";
import { Hero } from "./components/Hero";
import { TheDeadboltDifference } from "./components/TheDeadboltDifference";
import { DispatchCalculator } from "./components/DispatchCalculator";
import { ServicesGrid } from "./components/ServicesGrid";
import { DispatchForm } from "./components/DispatchForm";
import { ServiceAreaMap } from "./components/ServiceAreaMap";
import { ReviewsSection } from "./components/ReviewsSection";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";
import { MobileStickyBar } from "./components/MobileStickyBar";

export function App() {
  return (
    <div className="min-h-screen bg-[#060a14] text-slate-100 flex flex-col antialiased pb-16 md:pb-0">
      {/* 1. Top Emergency Live Status Bar */}
      <EmergencyBar />

      {/* 2. Brand Navigation */}
      <Navbar />

      {/* 3. Scope Specialization Notice (House Deadbolts Focus / Cars Coming Soon) */}
      <ScopeNotice />

      <main className="flex-1">
        {/* 4. Hero Section */}
        <Hero />

        {/* 5. The Deadbolt Specialist Difference vs Drill Scammers */}
        <TheDeadboltDifference />

        {/* 6. Instant Price & ETA Calculator */}
        <DispatchCalculator />

        {/* 7. Comprehensive Residential Deadbolt Services */}
        <ServicesGrid />

        {/* 8. Priority Instant Web Dispatch Ticket */}
        <DispatchForm />

        {/* 9. Metro Milwaukee Coverage & ETA Zones */}
        <ServiceAreaMap />

        {/* 10. Local Verified Reviews */}
        <ReviewsSection />

        {/* 11. FAQ */}
        <FaqSection />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* 13. Mobile Floating Sticky Call Bar */}
      <MobileStickyBar />
    </div>
  );
}

export default App;
