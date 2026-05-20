import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import WorklyLogo from '@/assets/4Workly(1).png';
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  WalletCards,
  Settings,
} from 'lucide-react';

const items = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Employees',
    icon: Users,
  },
  {
    title: 'Attendance',
    icon: CalendarDays,
  },
  {
    title: 'Payroll',
    icon: WalletCards,
  },
  {
    title: 'Settings',
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar
      collapsible="icon"
      className="border-border/50 bg-sidebar text-sidebar-foreground border-r backdrop-blur-xl"
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="mb-6 flex items-center justify-center py-6">
            <img
              src={WorklyLogo}
              alt="4Workly Logo"
              className="h-16 w-auto object-contain transition-all duration-300"
            />
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="group-data-[collapsible=icon]:space-y-4">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className="
                      hover:bg-primary
                      hover:text-primary-foreground
                      h-11
                      rounded-xl
                      text-base
                      font-medium
                      transition-all
                      duration-200

                      group-data-[collapsible=icon]:size-14
                      group-data-[collapsible=icon]:justify-center
                      group-data-[collapsible=icon]:rounded-2xl
                    "
                  >
                    <item.icon className="!size-6 shrink-0" />

                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
