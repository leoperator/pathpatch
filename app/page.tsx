import MapDashboard from "@/components/map/MapDashboard";
import DriverTable from "@/components/ui/DriverTable";
import TopHeader from "@/components/ui/TopHeader";
import DispatchPanel from "@/components/ui/DispatchPanel";

export default function DashboardPage() {
  return (
    <>
      <TopHeader title="Delivery Dashboard" />

      <div className="p-8 space-y-8 max-w-[1600px] mx-auto w-full">
        {/* Top Half: Map and Controls */}
        <div className="grid grid-cols-12 gap-8 h-[480px]">
          
          {/* Left: Interactive Map */}
          <div className="col-span-8 bg-surface-container-lowest rounded-sm overflow-hidden relative shadow-sm border border-outline-variant/10">
            <MapDashboard />
          </div>

          {/* Right: Smart Dispatch Panel */}
          <div className="col-span-4 flex flex-col gap-6">
            <DispatchPanel />
          </div>

        </div>

        {/* Bottom Half: Driver Table */}
        <DriverTable />
      </div>
    </>
  );
}