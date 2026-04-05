export default function DashboardSidebar() {
  return (
    <aside className="w-64 bg-surface-container-low flex flex-col border-r border-outline-variant/20 h-screen sticky top-0">
      <div className="p-6 flex flex-col gap-1">
        <h1 className="text-primary font-headline font-extrabold text-xl tracking-tight">Logistics Pro</h1>
        <p className="text-on-surface-variant font-label text-xs uppercase tracking-widest">System Admin</p>
      </div>
      <nav className="mt-4 flex-grow px-3 space-y-1">
        <a className="flex items-center gap-3 px-3 py-3 bg-primary text-on-primary rounded-sm transition-all" href="#">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-body text-sm font-medium">Dashboard</span>
        </a>
        <a className="flex items-center gap-3 px-3 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-sm transition-all" href="#">
          <span className="material-symbols-outlined">local_shipping</span>
          <span className="font-body text-sm font-medium">Fleet Status</span>
        </a>
      </nav>
      <div className="p-4 border-t border-outline-variant/20 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-surface-container-highest border border-outline-variant"></div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-on-surface">Admin User</span>
          <span className="text-[10px] text-on-surface-variant">System Administrator</span>
        </div>
      </div>
    </aside>
  );
}