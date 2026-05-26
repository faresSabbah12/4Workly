import { Outlet } from 'react-router-dom';

import { AppSidebar } from './layouts/AppSidebar';
import { Navbar } from './layouts/Navbar';

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        <Navbar />

        <main className="bg-background min-h-screen p-6">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default App;
