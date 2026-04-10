import TopHeader from "@/components/ui/TopHeader";

export default function SettingsPage() {
  return (
    <>
      <TopHeader title="System Settings" />
      
      <div className="p-8 max-w-[1000px] mx-auto w-full space-y-8">
        
        <section className="bg-surface-container-lowest rounded-sm shadow-sm border border-outline-variant/10 overflow-hidden">
          <div className="p-6 border-b border-outline-variant/10 bg-surface-container-low/30">
            <h2 className="font-headline font-bold text-lg text-on-surface">Routing Preferences</h2>
            <p className="text-xs text-on-surface-variant mt-1">Configure how the system calculates optimal paths.</p>
          </div>
          
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-on-surface">Avoid Toll Roads</h3>
                <p className="text-xs text-on-surface-variant mt-1">Prioritize free routes even if they increase delivery time.</p>
              </div>
              <input type="checkbox" className="w-4 h-4 accent-primary" />
            </div>
            
            <div className="h-px w-full bg-outline-variant/10"></div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-on-surface">Dynamic Recalculation</h3>
                <p className="text-xs text-on-surface-variant mt-1">Automatically push new routes to drivers if traffic delays exceed 15 minutes.</p>
              </div>
              <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary" />
            </div>
          </div>
        </section>

        <section className="bg-surface-container-lowest rounded-sm shadow-sm border border-outline-variant/10 overflow-hidden">
          <div className="p-6 border-b border-outline-variant/10 bg-surface-container-low/30">
            <h2 className="font-headline font-bold text-lg text-on-surface">API Configurations</h2>
          </div>
          <div className="p-6">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">OSRM Engine URL</label>
              <input 
                type="text" 
                defaultValue="https://router.project-osrm.org/route/v1/driving/" 
                disabled
                className="bg-surface-container-low border border-outline-variant/20 rounded-sm py-2 px-3 text-sm text-on-surface-variant cursor-not-allowed"
              />
              <p className="text-[10px] text-error mt-1">Contact system admin to change routing engine endpoint.</p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}