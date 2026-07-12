import { Outlet } from "react-router-dom";

import AppHeader from "../components/header/AppHeader";
import ProfileSidebar from "../components/sidebar/ProfileSidebar";

export default function AppLayout() {
  return (
    <>
      <AppHeader />

      <main className="app-layout">

        <ProfileSidebar />

        <section className="page-content">
          <Outlet />
        </section>

      </main>
    </>
  );
}