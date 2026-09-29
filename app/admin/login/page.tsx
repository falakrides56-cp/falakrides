'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, User, ArrowRight } from 'lucide-react';
import { LogoIcon } from '@/components/shared/Logo';

export default function AdminLogin() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/admin');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-green-900 px-4 py-10">
      <div className="w-full max-w-sm">
        <div className="rounded-lg border border-brand-green-200 bg-white p-8">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-brand-gold-100">
              <LogoIcon className="h-12 w-12" />
            </div>
            <h1 className="mt-4 font-serif text-xl font-bold text-brand-green-700">Falak Ride Admin</h1>
            <p className="mt-1 text-sm text-muted-foreground">Sign in to manage your dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-brand-green-700">Username</label>
              <div className="relative">
                    <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="text"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="admin"
                      className="h-10 w-full rounded-lg border border-brand-green-100/80 bg-white pl-10 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold-400/40"
                    />
                  </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-brand-green-700">Password</label>
              <div className="relative">
                    <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="h-10 w-full rounded-lg border border-brand-green-100/80 bg-white pl-10 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold-400/40"
                    />
                  </div>
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-md bg-brand-gold-500 px-6 py-3 text-sm font-bold text-brand-green-900 transition-colors hover:bg-brand-gold-400"
            >
              Sign In <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            This is a demo login — any credentials will work.
          </p>
        </div>

        <p className="mt-4 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Falak Ride. All rights reserved.
        </p>
      </div>
    </div>
  );
}
