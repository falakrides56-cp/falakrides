'use client';

import { useState, useMemo } from 'react';
import {
  User,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Car,
  Users,
  Briefcase,
  CreditCard,
  FileText,
  CheckCircle2,
  MessageCircle,
  X,
  RotateCcw,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar as CalendarPicker } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import cities from '@/data/cities.json';
import fleet from '@/data/fleet.json';
import { BRAND, buildWhatsAppMessage } from '@/lib/constants';

interface BookingFormProps {
  compact?: boolean;
}

interface FormData {
  fullName: string;
  phone: string;
  pickupCity: string;
  dropoffCity: string;
  pickupDate: string;
  pickupTime: string;
  returnEnabled: boolean;
  returnDate: string;
  returnTime: string;
  carType: string;
  passengers: string;
  serviceType: string;
  payment: string;
  pickupLocation: string;
  notes: string;
}

const SERVICE_TYPES = [
  'Airport Transfer',
  'Umrah Ziyarat',
  'City Tour',
  'Intercity Transfer',
  'Self Drive',
  'With Driver',
];

const PAYMENT_OPTIONS = ['Cash', 'Card', 'Online Transfer'];

const CAR_TYPES = ['Sedan (Economy/Standard)', 'SUV', 'Luxury', 'Van/7-Seater'];

const initialData: FormData = {
  fullName: '',
  phone: '',
  pickupCity: '',
  dropoffCity: '',
  pickupDate: '',
  pickupTime: '',
  returnEnabled: false,
  returnDate: '',
  returnTime: '',
  carType: '',
  passengers: '1',
  serviceType: '',
  payment: 'Cash',
  pickupLocation: '',
  notes: '',
};

export default function BookingForm({ compact = false }: BookingFormProps) {
  const [data, setData] = useState<FormData>(initialData);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [pickupDateObj, setPickupDateObj] = useState<Date | undefined>();
  const [returnDateObj, setReturnDateObj] = useState<Date | undefined>();

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const summaryItems = useMemo(
    () => [
      { label: 'Name', value: data.fullName || '—' },
      { label: 'Phone', value: data.phone ? `+966 ${data.phone}` : '—' },
      {
        label: 'Pickup → Dropoff',
        value:
          data.pickupCity && data.dropoffCity
            ? `${data.pickupCity} → ${data.dropoffCity}`
            : '—',
      },
      {
        label: 'Pickup',
        value: data.pickupDate
          ? `${data.pickupDate}${data.pickupTime ? ` ${data.pickupTime}` : ''}`
          : '—',
      },
      {
        label: 'Return',
        value: data.returnEnabled && data.returnDate
          ? `${data.returnDate}${data.returnTime ? ` ${data.returnTime}` : ''}`
          : 'N/A',
      },
      {
        label: 'Car',
        value: data.carType ? `${data.carType} (${data.passengers} pax)` : '—',
      },
      { label: 'Service', value: data.serviceType || '—' },
      { label: 'Payment', value: data.payment || '—' },
    ],
    [data]
  );

  const buildWhatsAppText = (): string => {
    const lines = [
      `*New Booking Request — Falak Ride*`,
      ``,
      `*Name:* ${data.fullName || '—'}`,
      `*Phone:* +966 ${data.phone || '—'}`,
      `*Route:* ${data.pickupCity} → ${data.dropoffCity}`,
      `*Pickup:* ${data.pickupDate} ${data.pickupTime}`,
      `*Return:* ${data.returnEnabled ? `${data.returnDate} ${data.returnTime}` : 'N/A'}`,
      `*Car:* ${data.carType}`,
      `*Passengers:* ${data.passengers}`,
      `*Service:* ${data.serviceType}`,
      `*Payment:* ${data.payment}`,
    ];
    if (data.pickupLocation) lines.push(`*Pickup Location:* ${data.pickupLocation}`);
    if (data.notes) lines.push(`*Notes:* ${data.notes}`);
    return lines.join('\n');
  };

  const handleConfirm = () => {
    setShowConfirm(true);
  };

  const handleWhatsApp = () => {
    const text = buildWhatsAppText();
    const link = buildWhatsAppMessage(text);
    window.open(link, '_blank');
    setShowConfirm(false);
    setShowSuccess(true);
  };

  const handleSubmit = () => {
    setShowConfirm(false);
    setShowSuccess(true);
  };

  const handleReset = () => {
    setData(initialData);
    setPickupDateObj(undefined);
    setReturnDateObj(undefined);
  };

  const inputClass = 'border-brand-green-200 focus-visible:ring-brand-gold-500/40';

  return (
    <div className={cn('w-full', compact ? '' : 'mx-auto max-w-7xl')}>
      <div className={cn('grid gap-8', compact ? 'grid-cols-1' : 'lg:grid-cols-[1fr_340px]')}>
        {/* Form */}
        <div className="rounded-lg border border-brand-green-200 bg-white p-5 sm:p-7 lg:p-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Full Name */}
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-brand-green-700">
                <User className="mr-1 inline h-3.5 w-3.5 text-brand-gold-500" />
                Full Name
              </Label>
              <Input
                placeholder="Enter your full name"
                value={data.fullName}
                onChange={(e) => update('fullName', e.target.value)}
                className={inputClass}
              />
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-brand-green-700">
                <Phone className="mr-1 inline h-3.5 w-3.5 text-brand-gold-500" />
                Phone Number
              </Label>
              <div className="flex">
                <span className="inline-flex items-center rounded-l-md border border-r-0 border-brand-green-100/80 bg-brand-green-50 px-3 text-sm font-medium text-brand-green-700">
                  +966
                </span>
                <Input
                  type="tel"
                  placeholder="5X XXX XXXX"
                  value={data.phone}
                  onChange={(e) => update('phone', e.target.value.replace(/[^0-9\s]/g, ''))}
                  className={cn(inputClass, 'rounded-l-none')}
                />
              </div>
            </div>

            {/* Pickup City */}
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-brand-green-700">
                <MapPin className="mr-1 inline h-3.5 w-3.5 text-brand-gold-500" />
                Pickup City
              </Label>
              <Select value={data.pickupCity} onValueChange={(v) => update('pickupCity', v)}>
                <SelectTrigger className={inputClass}>
                  <SelectValue placeholder="Select pickup city" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city.value} value={city.label}>
                      {city.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Dropoff City */}
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-brand-green-700">
                <MapPin className="mr-1 inline h-3.5 w-3.5 text-brand-gold-500" />
                Dropoff City
              </Label>
              <Select value={data.dropoffCity} onValueChange={(v) => update('dropoffCity', v)}>
                <SelectTrigger className={inputClass}>
                  <SelectValue placeholder="Select dropoff city" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city.value} value={city.label}>
                      {city.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Pickup Date */}
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-brand-green-700">
                <Calendar className="mr-1 inline h-3.5 w-3.5 text-brand-gold-500" />
                Pickup Date
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    className={cn(
                      'flex h-10 w-full items-center justify-between rounded-md border border-brand-green-200 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-gold-500/40',
                      !data.pickupDate && 'text-muted-foreground'
                    )}
                  >
                    {data.pickupDate || 'Pick a date'}
                    <Calendar className="h-4 w-4 text-brand-gold-500" />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarPicker
                    mode="single"
                    selected={pickupDateObj}
                    onSelect={(d) => {
                      setPickupDateObj(d);
                      update('pickupDate', d ? format(d, 'yyyy-MM-dd') : '');
                    }}
                    initialFocus
                    className="rounded-lg border-0"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Pickup Time */}
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-brand-green-700">
                <Clock className="mr-1 inline h-3.5 w-3.5 text-brand-gold-500" />
                Pickup Time
              </Label>
              <Input
                type="time"
                value={data.pickupTime}
                onChange={(e) => update('pickupTime', e.target.value)}
                className={inputClass}
              />
            </div>

            {/* Return Toggle */}
            <div className="space-y-1.5 sm:col-span-2">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="return-toggle"
                  checked={data.returnEnabled}
                  onCheckedChange={(checked) => update('returnEnabled', checked === true)}
                  className="border-brand-green-200 data-[state=checked]:bg-brand-green-600 data-[state=checked]:border-brand-green-600"
                />
                <Label htmlFor="return-toggle" className="text-xs font-semibold text-brand-green-700 cursor-pointer">
                  Add return trip (optional)
                </Label>
              </div>
            </div>

            {/* Return Date & Time */}
            {data.returnEnabled && (
              <>
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold text-brand-green-700">
                    <Calendar className="mr-1 inline h-3.5 w-3.5 text-brand-gold-500" />
                    Return Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        className={cn(
                          'flex h-10 w-full items-center justify-between rounded-md border border-brand-green-200 bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-brand-gold-500/40',
                          !data.returnDate && 'text-muted-foreground'
                        )}
                      >
                        {data.returnDate || 'Pick a date'}
                        <Calendar className="h-4 w-4 text-brand-gold-500" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarPicker
                        mode="single"
                        selected={returnDateObj}
                        onSelect={(d) => {
                          setReturnDateObj(d);
                          update('returnDate', d ? format(d, 'yyyy-MM-dd') : '');
                        }}
                        initialFocus
                        className="rounded-lg border-0"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold text-brand-green-700">
                    <Clock className="mr-1 inline h-3.5 w-3.5 text-brand-gold-500" />
                    Return Time
                  </Label>
                  <Input
                    type="time"
                    value={data.returnTime}
                    onChange={(e) => update('returnTime', e.target.value)}
                    className={inputClass}
                  />
                </div>
              </>
            )}

            {/* Car Type */}
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-brand-green-700">
                <Car className="mr-1 inline h-3.5 w-3.5 text-brand-gold-500" />
                Car Type
              </Label>
              <Select value={data.carType} onValueChange={(v) => update('carType', v)}>
                <SelectTrigger className={inputClass}>
                  <SelectValue placeholder="Select car type" />
                </SelectTrigger>
                <SelectContent>
                  {CAR_TYPES.map((car) => (
                    <SelectItem key={car} value={car}>{car}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Passengers */}
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-brand-green-700">
                <Users className="mr-1 inline h-3.5 w-3.5 text-brand-gold-500" />
                Passengers
              </Label>
              <Select value={data.passengers} onValueChange={(v) => update('passengers', v)}>
                <SelectTrigger className={inputClass}>
                  <SelectValue placeholder="Select passengers" />
                </SelectTrigger>
                <SelectContent>
                  {['1', '2', '3', '4', '5', '6', '7', '8+'].map((n) => (
                    <SelectItem key={n} value={n}>{n}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Service Type */}
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-brand-green-700">
                <Briefcase className="mr-1 inline h-3.5 w-3.5 text-brand-gold-500" />
                Service Type
              </Label>
              <Select value={data.serviceType} onValueChange={(v) => update('serviceType', v)}>
                <SelectTrigger className={inputClass}>
                  <SelectValue placeholder="Select service type" />
                </SelectTrigger>
                <SelectContent>
                  {SERVICE_TYPES.map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Payment */}
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-brand-green-700">
                <CreditCard className="mr-1 inline h-3.5 w-3.5 text-brand-gold-500" />
                Payment Preference
              </Label>
              <div className="flex gap-2">
                {PAYMENT_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => update('payment', opt)}
                    className={cn(
                      'flex-1 rounded-md border px-3 py-2.5 text-sm font-semibold transition-colors',
                      data.payment === opt
                        ? 'border-brand-gold-500 bg-brand-gold-100 text-brand-green-900'
                        : 'border-brand-green-200 bg-white text-brand-green-700 hover:border-brand-gold-400'
                    )}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Pickup Location */}
            <div className="space-y-1.5 sm:col-span-2">
              <Label className="text-xs font-semibold text-brand-green-700">
                <MapPin className="mr-1 inline h-3.5 w-3.5 text-brand-gold-500" />
                Pickup Location / Address <span className="text-muted-foreground font-normal">(optional)</span>
              </Label>
              <Input
                placeholder="Hotel name, airport terminal, street address, etc."
                value={data.pickupLocation}
                onChange={(e) => update('pickupLocation', e.target.value)}
                className={inputClass}
              />
            </div>

            {/* Notes */}
            <div className="space-y-1.5 sm:col-span-2">
              <Label className="text-xs font-semibold text-brand-green-700">
                <FileText className="mr-1 inline h-3.5 w-3.5 text-brand-gold-500" />
                Notes <span className="text-muted-foreground font-normal">(optional)</span>
              </Label>
              <Textarea
                placeholder="Any special requests or additional information..."
                value={data.notes}
                onChange={(e) => update('notes', e.target.value)}
                className={cn(inputClass, 'min-h-[80px] resize-none')}
              />
            </div>
          </div>

          {/* Price note */}
          <p className="mt-4 text-xs italic text-muted-foreground">
            Prices depend on city, duration, and car availability.
          </p>

          {/* Actions */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button
              onClick={handleConfirm}
              className="flex items-center gap-2 rounded-md bg-brand-gold-500 px-6 py-3 text-sm font-bold text-brand-green-900 transition-colors hover:bg-brand-gold-400"
            >
              <CheckCircle2 className="h-4 w-4" />
              Confirm & Send
            </button>
            <button
              onClick={handleReset}
              className="flex items-center gap-2 rounded-md border border-brand-green-200 px-4 py-3 text-sm font-semibold text-brand-green-900 transition-colors hover:bg-brand-green-50"
            >
              <RotateCcw className="h-4 w-4" />
              Reset
            </button>
          </div>
        </div>

        {/* Live Summary Panel */}
        <div className="lg:sticky lg:top-20 lg:self-start">
          <div className="overflow-hidden rounded-lg bg-brand-green-900 p-5 text-white sm:p-6">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-1.5 w-8 rounded-full bg-brand-gold-400" />
              <h3 className="font-serif text-base font-bold text-white">Booking Summary</h3>
            </div>

            <div className="space-y-2.5">
              {summaryItems.map((item) => (
                <div key={item.label} className="flex items-start justify-between gap-2 border-b border-white/10 pb-2">
                  <span className="text-xs font-medium text-brand-gold-300">{item.label}</span>
                  <span className="text-right text-xs font-semibold text-white">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-md border border-white/15 p-3 text-center">
              <p className="text-xs text-white/70">
                Need help? Call us at
              </p>
              <a href={`tel:${BRAND.phone}`} className="font-serif text-sm font-bold text-brand-gold-300">
                {BRAND.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <Dialog open={showConfirm} onOpenChange={setShowConfirm}>
        <DialogContent className="max-w-md rounded-lg border-brand-green-200">
          <DialogHeader>
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-brand-gold-50">
              <MessageCircle className="h-7 w-7 text-brand-gold-600" />
            </div>
            <DialogTitle className="text-center font-serif text-lg font-bold text-brand-green-700">
              Confirm Your Booking
            </DialogTitle>
            <DialogDescription className="text-center text-sm text-muted-foreground">
              By clicking WhatsApp, your booking details will be sent for confirmation.
              Our team will respond shortly to finalize your booking.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex-col gap-2 sm:flex-col">
            <button
              onClick={handleWhatsApp}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-brand-gold-500 px-6 py-3 text-sm font-bold text-brand-green-900 transition-colors hover:bg-brand-gold-400"
            >
              <MessageCircle className="h-4 w-4" />
              Send via WhatsApp
            </button>
            <button
              onClick={handleSubmit}
              className="flex w-full items-center justify-center gap-2 rounded-md border border-brand-green-200 px-6 py-3 text-sm font-semibold text-brand-green-900 transition-colors hover:bg-brand-green-50"
            >
              <CheckCircle2 className="h-4 w-4" />
              Submit Booking
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Success Modal */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="max-w-sm rounded-lg">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-brand-gold-100">
              <CheckCircle2 className="h-8 w-8 text-brand-gold-700" />
            </div>
            <h3 className="font-serif text-lg font-bold text-brand-green-700">Booking Submitted!</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Your booking request has been received. Our team will contact you shortly to confirm the details.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="mt-5 w-full rounded-md bg-brand-green-900 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-green-800"
            >
              Done
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
