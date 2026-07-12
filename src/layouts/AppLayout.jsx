import { Outlet } from "react-router-dom";

import AppHeader from "../components/header/AppHeader";
import ProfileSidebar from "../components/sidebar/ProfileSidebar";

import "../styles/layout.css";

export default function AppLayout() {
  return (
    <>
      <AppHeader />

      <main className="app-layout">
        <aside className="profile-sidebar">
          <ProfileSidebar />
        </aside>

        <section className="page-content">
          <Outlet />
        </section>
      </main>
    </>
  );
}