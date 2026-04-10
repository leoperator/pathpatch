"use client";

import { useState } from 'react';
import { useLogisticsStore } from '@/lib/store';

export default function FleetStatusPage() {
  const routes = useLogisticsStore((state) => state.routes);
  const addTruck = useLogisticsStore((state) => state.addTruck);
  const removeTruck = useLogisticsStore((state) => state.removeTruck);

  const [newTruckId, setNewTruckId] = useState('');
  const [newDestination, setNewDestination] = useState('');

  const handleAddTruck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTruckId || !newDestination) return;

    addTruck({
      truckId: newTruckId,
      status: 'Pending',
      destination: {
        name: newDestination,
        // Mock coordinates for the hackathon UI test
        coordinates: [77.3000, 28.5000] 
      },
      stops: []
    });

    setNewTruckId('');
    setNewDestination('');
  };

  return (
    <>
      <header className="h-16 bg-surface-container-lowest border-b border-outline-variant/20 flex items-center px-8 sticky top-0 z-10">
        <span className="font-headline font-bold text-lg text-primary">Fleet Management</span>
      </header>

      <div className="p-8 space-y-8 max-w-[1600px] mx-auto w-full">
        
        {/* Add Truck Form */}
        <section className="bg-surface-container-lowest p-6 rounded-sm shadow-sm border border-outline-variant/10">
          <h2 className="font-headline font-bold text-lg text-on-surface mb-4">Dispatch New Unit</h2>
          <form onSubmit={handleAddTruck} className="flex items-end gap-4">
            <div className="flex flex-col gap-1 flex-grow">
              <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Unit ID</label>
              <input 
                type="text" 
                value={newTruckId}
                onChange={(e) => setNewTruckId(e.target.value)}
                placeholder="e.g., Unit Delta" 
                className="bg-surface-container-low border border-outline-variant/30 rounded-sm py-2 px-3 text-sm focus:ring-1 focus:ring-primary outline-none"
              />
            </div>
            <div className="flex flex-col gap-1 flex-grow">
              <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Destination Name</label>
              <input 
                type="text" 
                value={newDestination}
                onChange={(e) => setNewDestination(e.target.value)}
                placeholder="e.g., Facility Omega" 
                className="bg-surface-container-low border border-outline-variant/30 rounded-sm py-2 px-3 text-sm focus:ring-1 focus:ring-primary outline-none"
              />
            </div>
            <button type="submit" className="bg-primary text-on-primary px-6 py-2 text-sm font-bold uppercase tracking-widest hover:bg-primary-container transition-all h-[38px]">
              Add to Fleet
            </button>
          </form>
        </section>

        {/* Fleet Table */}
        <section className="bg-surface-container-lowest rounded-sm shadow-sm border border-outline-variant/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low/50">
                  <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest border-b border-outline-variant/10">Unit ID</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest border-b border-outline-variant/10">Destination</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest border-b border-outline-variant/10">Status</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest border-b border-outline-variant/10 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {routes.map((route) => (
                  <tr key={route.truckId} className="hover:bg-surface-container-low/40 transition-colors">
                    <td className="px-6 py-4 text-sm font-bold text-on-surface">{route.truckId}</td>
                    <td className="px-6 py-4 text-sm text-on-surface-variant">{route.destination.name}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-0.5 text-[10px] font-bold rounded-sm border ${
                        route.status === 'Pending' ? 'bg-surface-variant text-on-surface border-outline-variant/30' : 
                        route.status === 'In Transit' ? 'bg-secondary-container text-on-secondary-container border-secondary/20' : 
                        'bg-surface-container-high text-on-surface-variant border-outline-variant/10'
                      }`}>
                        {route.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button 
                        onClick={() => removeTruck(route.truckId)}
                        disabled={route.status !== 'Pending'}
                        className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all ${
                          route.status === 'Pending' 
                            ? 'bg-error text-on-error hover:bg-error-container hover:text-on-error-container cursor-pointer' 
                            : 'bg-surface-container-highest text-outline cursor-not-allowed'
                        }`}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </>
  );
}