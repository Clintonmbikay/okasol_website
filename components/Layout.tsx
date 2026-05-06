import { Outlet } from 'react-router-dom';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { WhatsAppFloat } from './WhatsAppFloat';

export function Layout() {
  return (
    <div className="min-h-screen bg-[#1A1614] text-[#F4EFE7]">
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}