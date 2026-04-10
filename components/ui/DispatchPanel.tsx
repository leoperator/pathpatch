"use client";

import { useState } from 'react';
import { useLogisticsStore } from '@/lib/store';
import { geocodeAddress } from '@/lib/geocoding';

export default function DispatchPanel() {
  const setHub = useLogisticsStore((state) => state.setHub);
  const addTruck = useLogisticsStore((state) => state.addTruck);
  const clearFleet = useLogisticsStore((state) => state.clearFleet);

  const [warehouse, setWarehouse] = useState('');
  const [destination, setDestination] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState('');

  const handleDispatch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!warehouse || !destination) {
      setError("Please enter both locations.");
      return;
    }

    setIsCalculating(true);
    setError('');

    try {
      const hubCoords = await geocodeAddress(warehouse);
      const destCoords = await geocodeAddress(destination);

      if (!hubCoords || !destCoords) {
        throw new Error("Could not find coordinates for one or both locations.");
      }

      clearFleet();
      setHub({
        id: "hub-custom",
        name: warehouse,
        coordinates: hubCoords
      });

      addTruck({
        truckId: `unit-${Math.floor(Math.random() * 10000)}`,
        status: 'In Transit',
        destination: {
          name: destination,
          coordinates: destCoords
        },
        stops: []
      });

      setWarehouse('');
      setDestination('');

    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsCalculating(false);
    }
  };

  return (
    <div className="bg-surface-container-lowest shadow-sm border border-outline-variant/10 rounded-sm p-6 flex flex-col gap-6 h-full">
      <div>
        <h3 className="font-headline font-bold text-lg text-on-surface uppercase tracking-tight">Smart Dispatch</h3>
        <p className="text-xs text-on-surface-variant mt-1">Enter locations to calculate optimal routing.</p>
      </div>

      <form onSubmit={handleDispatch} className="flex flex-col gap-4 flex-grow">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Warehouse (Start)</label>
          <input 
            type="text" 
            value={warehouse}
            onChange={(e) => setWarehouse(e.target.value)}
            placeholder="e.g., Facility Alpha" 
            className="bg-surface-container-low border border-outline-variant/30 rounded-sm py-3 px-4 text-sm focus:ring-1 focus:ring-primary outline-none text-on-surface"
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Store (End)</label>
          <input 
            type="text" 
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="e.g., Node Beta" 
            className="bg-surface-container-low border border-outline-variant/30 rounded-sm py-3 px-4 text-sm focus:ring-1 focus:ring-primary outline-none text-on-surface"
          />
        </div>

        {error && <p className="text-[10px] text-error font-bold">{error}</p>}

        <div className="mt-auto pt-4">
          <button 
            type="submit" 
            disabled={isCalculating}
            className={`w-full py-3 text-xs font-bold uppercase tracking-widest transition-all rounded-sm ${
              isCalculating 
                ? 'bg-surface-container-high text-outline cursor-wait' 
                : 'bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container'
            }`}
          >
            {isCalculating ? 'Calculating...' : 'Dispatch Unit'}
          </button>
        </div>
      </form>
    </div>
  );
}