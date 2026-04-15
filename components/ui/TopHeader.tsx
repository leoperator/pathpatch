"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

export default function TopHeader({ title = "Delivery Dashboard" }: { title?: string }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="h-16 bg-surface-container-lowest border-b border-outline-variant/20 flex items-center justify-between px-8 sticky top-0 z-50">
      <div className="flex items-center gap-8 flex-grow">
        <span className="font-headline font-bold text-lg text-primary">{title}</span>
        <div className="relative w-96">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
          <input className="w-full bg-surface-container-low border-none rounded-sm py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-primary placeholder:text-outline/60 outline-none" placeholder="Search fleet, drivers, or routes..." type="text" />
        </div>
      </div>
      
      <div className="flex items-center gap-6 relative">
        <div className="flex items-center gap-4">
          
          {/* Theme Toggle Button */}
          {mounted && (
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-1 text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center"
            >
              <span className="material-symbols-outlined">
                {theme === 'dark' ? 'dark_mode' : 'light_mode'}
              </span>
            </button>
          )}

          {/* Notification Button */}
          <button 
            onClick={() => setShowNotifications(!showNotifications)} 
            className="p-1 text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center"
          >
            <span className="material-symbols-outlined">notifications</span>
          </button>

          {/* Settings Link */}
          <Link href="/settings" className="p-1 text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined">settings</span>
          </Link>
        </div>

        {/* Notification Dropdown Menu */}
        {showNotifications && (
          <div className="absolute top-12 right-12 w-80 bg-surface-container-lowest border border-outline-variant/20 shadow-md rounded-sm overflow-hidden z-50 flex flex-col">
            <div className="px-4 py-3 bg-surface-container-low/50 border-b border-outline-variant/10 flex justify-between items-center">
              <span className="font-bold text-sm text-on-surface">Recent Alerts</span>
              <span className="text-[10px] font-bold text-primary cursor-pointer hover:underline">Mark all read</span>
            </div>
            
            <div className="flex flex-col">
              <div className="px-4 py-3 hover:bg-surface-container-low/50 cursor-pointer border-b border-outline-variant/10 transition-colors">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-xs font-bold text-error">Severe Traffic Anomaly</span>
                  <span className="text-[10px] text-on-surface-variant">2m ago</span>
                </div>
                <p className="text-[10px] text-on-surface-variant leading-relaxed">Gridlock detected on route to Node Beta. Dynamic rerouting suggested.</p>
              </div>
              
              <div className="px-4 py-3 hover:bg-surface-container-low/50 cursor-pointer transition-colors">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-xs font-bold text-on-surface">Unit Alpha Update</span>
                  <span className="text-[10px] text-on-surface-variant">14m ago</span>
                </div>
                <p className="text-[10px] text-on-surface-variant leading-relaxed">Successfully delivered payload to Node Alpha. Awaiting next dispatch.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}