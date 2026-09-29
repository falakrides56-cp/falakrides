import PublicLayout from '@/components/shared/PublicLayout';
import BookingForm from '@/components/shared/BookingForm';
import SectionHeading from '@/components/shared/SectionHeading';
import PageHero from '@/components/shared/PageHero';

export default function BookingPage() {
  return (
    <PublicLayout>
      <PageHero
        eyebrow="Reserve Your Ride"
        title="Book Now"
        description="Fill in your trip details and confirm instantly via WhatsApp"
      />

      {/* Booking form */}
      <section className="section-padding bg-gradient-to-b from-brand-green-50/30 to-white">
        <div className="container-brand">
          <SectionHeading
            eyebrow="Booking Form"
            title="Plan Your"
            highlight="Trip"
            description="Complete the form below — our team will confirm your booking right away"
          />
          <div className="mt-10">
            <BookingForm />
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
