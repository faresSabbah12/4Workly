import { AppSidebar } from './layouts/AppSidebar';
import { Navbar } from './layouts/Navbar';

import {
  SidebarInset,
  SidebarProvider,
} from '@/components/ui/sidebar';

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        <Navbar />

        <main className="bg-background min-h-screen p-6">
          <h1 className="text-3xl font-bold">
            Welcome to Workly
          </h1>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default App;