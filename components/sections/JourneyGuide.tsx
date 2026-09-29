import Link from 'next/link';
import { ArrowRight, ClipboardList, MapPinned, MessageCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const steps = [
  {
    icon: MapPinned,
    title: 'Choose your journey',
    description: 'Pick your route, service, and the vehicle that suits your group.',
  },
  {
    icon: ClipboardList,
    title: 'Share your trip details',
    description: 'Add pickup times, passenger details, and any notes for your driver.',
  },
  {
    icon: MessageCircle,
    title: 'Confirm with our team',
    description: 'Send your request on WhatsApp and coordinate the final details.',
  },
];

const questions = [
  {
    question: 'What details should I have ready?',
    answer: 'Have your pickup and drop-off locations, travel date and time, passenger count, and preferred service ready. You can also include a pickup address or trip notes in the booking form.',
  },
  {
    question: 'How do I confirm my booking request?',
    answer: 'Complete the booking form and continue to WhatsApp to send your trip details to our team. They can coordinate the final arrangements with you.',
  },
  {
    question: 'Can I arrange airport or intercity transport?',
    answer: 'Yes. Airport pickups, intercity routes, Umrah and Ziyarat trips, and city transfers are available in the services catalogue.',
  },
  {
    question: 'How do I choose the right vehicle?',
    answer: 'Compare passenger capacity, luggage space, and vehicle features in the fleet catalogue, then select your preferred vehicle in the booking form.',
  },
];

export default function JourneyGuide() {
  return (
    <section className="section-padding bg-brand-green-50">
      <div className="container-brand grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase text-brand-gold-700 before:h-px before:w-7 before:bg-brand-gold-500">
            Travel, made simple
          </span>
          <h2 className="font-serif text-3xl font-bold leading-tight text-brand-green-900 md:text-4xl">
            From first details to confirmed pickup
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            A clear three-step process keeps your airport transfer, city ride, or Ziyarat trip organized.
          </p>

          <ol className="mt-8 border-y border-brand-green-200">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-4 border-b border-brand-green-200 py-5 last:border-b-0">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white text-brand-gold-700">
                  <step.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase text-brand-gold-700">Step 0{index + 1}</p>
                  <h3 className="mt-1 font-semibold text-brand-green-900">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <Link
            href="/booking"
            className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-green-900 transition-colors hover:text-brand-gold-700"
          >
            Start a booking <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="border border-brand-green-200 bg-white p-5 sm:p-8">
          <p className="text-xs font-bold uppercase text-brand-gold-700">Good to know</p>
          <h3 className="mt-2 text-2xl font-bold text-brand-green-900">Travel questions, answered</h3>
          <Accordion type="single" collapsible className="mt-4">
            {questions.map((item, index) => (
              <AccordionItem key={item.question} value={`question-${index}`}>
                <AccordionTrigger className="py-5 text-left text-sm font-semibold text-brand-green-900 hover:no-underline md:text-base">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}