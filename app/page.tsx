import PublicLayout from '@/components/shared/PublicLayout';
import Hero from '@/components/sections/Hero';
import ServicesIconsRow from '@/components/sections/ServicesIconsRow';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import FleetPreview from '@/components/sections/FleetPreview';
import VideoSection from '@/components/sections/VideoSection';
import TestimonialsPreview from '@/components/sections/TestimonialsPreview';
import StatsSection from '@/components/sections/StatsSection';
import PopularRoutes from '@/components/sections/PopularRoutes';
import BookingForm from '@/components/shared/BookingForm';
import SectionHeading from '@/components/shared/SectionHeading';
import JourneyGuide from '@/components/sections/JourneyGuide';

export default function Home() {
  return (
    <PublicLayout>
      <Hero />
    <StatsSection />
      <ServicesIconsRow />
    <PopularRoutes />
      <WhyChooseUs />
      <FleetPreview />
    <JourneyGuide />

      {/* Booking Form Section */}
      <section className="section-padding bg-gradient-to-b from-brand-green-50/40 to-white">
        <div className="container-brand">
          <SectionHeading
            eyebrow="Book Your Ride"
            title="Quick"
            highlight="Booking"
            description="Fill in the details below and get instant confirmation via WhatsApp"
          />
          <div className="mt-10">
            <BookingForm />
          </div>
        </div>
      </section>

      <VideoSection />
      <TestimonialsPreview />
    </PublicLayout>
  );
}
