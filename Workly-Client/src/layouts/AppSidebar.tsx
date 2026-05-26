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
import { navigationRoutes } from '@/routes/navigationRoutes';
import { Link } from 'react-router-dom';

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
              {navigationRoutes.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
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
                    <Link to={item.path}>
                      <item.icon className="!size-7 shrink-0" />

                      <span>{item.title}</span>
                    </Link>
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
