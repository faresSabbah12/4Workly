import { Bell, Moon, Search, Sun } from 'lucide-react';
import { useTheme } from '@/providers/theme-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SidebarTrigger } from '@/components/ui/sidebar';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-background/80 sticky top-0 z-40 flex h-16 items-center justify-between border-b px-6 backdrop-blur">
      {/* LEFT SIDE */}
      <div className="flex items-center gap-4">
        <SidebarTrigger />

        <h1 className="text-foreground text-xl font-semibold">Dashboard</h1>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3">
        {/* SEARCH */}
        <div className="relative hidden md:block">
          <Search className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />

          <Input placeholder="Search..." className="w-64 pl-9" />
        </div>

        {/* THEME BUTTON */}
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          {theme === 'dark' ? (
            <Sun className="size-5" />
          ) : (
            <Moon className="size-5" />
          )}
        </Button>
        {/* NOTIFICATIONS */}
        <Button variant="ghost" size="icon">
          <Bell className="size-5" />
        </Button>

        {/* PROFILE */}
        <div className="bg-primary text-primary-foreground flex size-10 items-center justify-center rounded-full font-semibold">
          F
        </div>
      </div>
    </header>
  );
}
