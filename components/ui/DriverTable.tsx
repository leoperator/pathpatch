export default function DriverTable() {
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