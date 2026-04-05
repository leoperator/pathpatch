export default function DashboardPage() {
  return (
    <>
      <header className="h-16 bg-surface-container-lowest border-b border-outline-variant/20 flex items-center justify-between px-8 sticky top-0 z-10">
        <div className="flex items-center gap-8 flex-grow">
          <span className="font-headline font-bold text-lg text-primary">Delivery Dashboard</span>
          <div className="relative w-96">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
            <input className="w-full bg-surface-container-low border-none rounded-sm py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-primary placeholder:text-outline/60" placeholder="Search fleet, drivers, or routes..." type="text" />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <button className="relative p-1 text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full border-2 border-surface-container-lowest"></span>
            </button>
            <button className="p-1 text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
        </div>
      </header>

      <div className="p-8 space-y-8 max-w-[1600px] mx-auto w-full">
        {/* Top Half: Map and Metrics */}
        <div className="grid grid-cols-12 gap-8 h-[480px]">
          
          {/* Left: Interactive Map Placeholder */}
          <div className="col-span-8 bg-surface-container-lowest rounded-sm overflow-hidden relative shadow-sm border border-outline-variant/10">
            <div className="absolute inset-0 bg-surface-container-highest flex items-center justify-center">
               <span className="text-on-surface-variant text-sm font-bold tracking-widest uppercase">Mapbox Instance Goes Here</span>
            </div>
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <div className="bg-surface-container-lowest/90 backdrop-blur-md p-3 shadow-sm border border-outline-variant/10">
                <h3 className="text-xs font-bold text-on-surface uppercase tracking-tight mb-2">Fleet Visibility</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    <span className="text-[10px] font-medium">Active (142)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Performance Metrics */}
          <div className="col-span-4 flex flex-col gap-6">
            <div className="bg-surface-container-lowest p-6 rounded-sm shadow-sm flex flex-col justify-between border-l-4 border-secondary flex-grow">
              <div>
                <span className="text-on-surface-variant font-label text-[10px] font-bold uppercase tracking-wider">Delivery Success Rate</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl font-headline font-extrabold text-on-surface">98.2%</span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-sm shadow-sm flex flex-col justify-between border-l-4 border-error flex-grow">
              <div>
                <span className="text-on-surface-variant font-label text-[10px] font-bold uppercase tracking-wider">Average Delay Time</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl font-headline font-extrabold text-on-surface">14 min</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Half: Driver Table */}
        <DriverTable />
      </div>
    </>
  );
}

// Temporary component block: Move this to components/ui/DriverTable.tsx later
function DriverTable() {
  return (
    <section className="bg-surface-container-lowest rounded-sm shadow-sm border border-outline-variant/10 overflow-hidden">
      <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center bg-surface-container-low/30">
        <h2 className="font-headline font-bold text-lg text-on-surface">Active Drivers</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low/50">
              <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest border-b border-outline-variant/10">Driver Name</th>
              <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest border-b border-outline-variant/10">Current Route Status</th>
              <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest border-b border-outline-variant/10">Vehicle Warnings</th>
              <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest border-b border-outline-variant/10 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/10">
            <tr className="hover:bg-surface-container-low/40 transition-colors">
              <td className="px-6 py-4">
                <div className="text-sm font-bold text-on-surface">Unit Alpha</div>
                <div className="text-[10px] text-on-surface-variant">ID: #DX-9022</div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  <span className="text-sm text-on-surface">In Transit</span>
                  <span className="text-[10px] text-on-surface-variant ml-2">Node A ➔ Node B</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="px-2 py-0.5 bg-surface-container-high text-[10px] font-medium rounded-sm border border-outline-variant/10">None Detected</span>
              </td>
              <td className="px-6 py-4 text-right">
                <button className="bg-primary text-on-primary px-4 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-primary-container transition-all">Alert</button>
              </td>
            </tr>
            <tr className="hover:bg-surface-container-low/40 transition-colors">
              <td className="px-6 py-4">
                <div className="text-sm font-bold text-on-surface">Unit Beta</div>
                <div className="text-[10px] text-on-surface-variant">ID: #DX-1148</div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></span>
                  <span className="text-sm text-on-surface font-semibold text-tertiary-container">At Depot</span>
                  <span className="text-[10px] text-on-surface-variant ml-2">Facility Delta</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="px-2 py-0.5 bg-error-container text-on-error-container text-[10px] font-bold rounded-sm border border-error/10">Low Pressure</span>
              </td>
              <td className="px-6 py-4 text-right">
                <button className="bg-primary text-on-primary px-4 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-primary-container transition-all">Alert</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}