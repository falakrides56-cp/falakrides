'use client';

import { useState } from 'react';
import { Eye, Edit, Trash2, X, Filter } from 'lucide-react';
import bookingsData from '@/data/bookings.json';
import StatusBadge from '@/components/shared/StatusBadge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

type Booking = (typeof bookingsData)[0];

export default function AdminBookings() {
  const [bookings, setBookings] = useState(bookingsData);
  const [filter, setFilter] = useState<string>('all');
  const [selected, setSelected] = useState<Booking | null>(null);

  const filtered = filter === 'all' ? bookings : bookings.filter((b) => b.status === filter);

  const handleDelete = (id: string) => {
    setBookings((prev) => prev.filter((b) => b.id !== id));
  };

  const handleStatusChange = (id: string, status: string) => {
    setBookings((prev) => prev.map((b) => (b.id === id ? { ...b, status } : b)));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-2xl font-bold text-brand-green-700">Bookings</h1>
        <p className="mt-1 text-sm text-muted-foreground">Manage all customer bookings</p>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="flex items-center gap-1.5 text-sm font-semibold text-brand-green-700">
          <Filter className="h-4 w-4 text-brand-gold-500" /> Status:
        </span>
        {['all', 'confirmed', 'pending', 'cancelled'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              'rounded-md border px-3.5 py-2 text-xs font-semibold capitalize transition-colors',
              filter === f
                ? 'border-brand-green-900 bg-brand-green-900 text-white'
                : 'border-brand-green-200 bg-white text-brand-green-800 hover:bg-brand-green-50'
            )}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-lg border border-brand-green-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-brand-green-200 bg-brand-green-50 text-left text-xs font-bold uppercase text-brand-green-700">
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Customer</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Route</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Car</th>
                <th className="px-4 py-3">Service</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((b) => (
                <tr key={b.id} className="border-b border-brand-green-100 last:border-0 hover:bg-brand-green-50/70">
                  <td className="px-4 py-3 text-xs font-semibold text-brand-gold-600">{b.id}</td>
                  <td className="px-4 py-3 font-medium text-brand-green-700">{b.name}</td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">{b.phone}</td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">{b.pickup} → {b.dropoff}</td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">{b.date}</td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">{b.carType}</td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">{b.serviceType}</td>
                  <td className="px-4 py-3">
                    <select
                      value={b.status}
                      onChange={(e) => handleStatusChange(b.id, e.target.value)}
                      className="rounded-md border border-brand-green-100/80 bg-white px-2 py-1 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-brand-gold-400/40"
                    >
                      <option value="confirmed">Confirmed</option>
                      <option value="pending">Pending</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td className="px-4 py-3 font-semibold text-brand-green-700">{b.amount} SAR</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setSelected(b)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-brand-green-600 hover:bg-brand-green-50"
                        title="View"
                        aria-label={`View booking ${b.id}`}
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-amber-600 hover:bg-amber-50"
                        title="Edit"
                        aria-label={`Edit booking ${b.id}`}
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(b.id)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-red-600 hover:bg-red-50"
                        title="Delete"
                        aria-label={`Delete booking ${b.id}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="p-8 text-center text-sm text-muted-foreground">No bookings found.</div>
        )}
      </div>

      {/* Detail modal */}
      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-lg rounded-lg">
          <DialogHeader>
            <DialogTitle className="font-serif text-lg font-bold text-brand-green-700">
              Booking Details — {selected?.id}
            </DialogTitle>
          </DialogHeader>
          {selected && (
            <div className="space-y-3">
              {[
                ['Customer', selected.name],
                ['Phone', selected.phone],
                ['Pickup', selected.pickup],
                ['Dropoff', selected.dropoff],
                ['Date', selected.date],
                ['Time', selected.time],
                ['Return Date', selected.returnDate || 'N/A'],
                ['Return Time', selected.returnTime || 'N/A'],
                ['Car Type', selected.carType],
                ['Passengers', String(selected.passengers)],
                ['Service Type', selected.serviceType],
                ['Payment', selected.payment],
                ['Amount', `${selected.amount} SAR`],
                ['Notes', selected.notes || 'None'],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between border-b border-brand-green-50 pb-2">
                  <span className="text-xs font-semibold text-brand-gold-600">{label}</span>
                  <span className="text-right text-sm font-medium text-brand-green-700">{value}</span>
                </div>
              ))}
              <div className="flex justify-between border-b border-brand-green-50 pb-2">
                <span className="text-xs font-semibold text-brand-gold-600">Status</span>
                <StatusBadge status={selected.status as 'confirmed' | 'pending' | 'cancelled'} />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
