import { Outlet } from "react-router-dom";
import { SidebarNavigation } from "@/components/Sidebar";

export function Layout() {
  return (
    <div className="app-shell">
      <SidebarNavigation activeUrl="/"/>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
