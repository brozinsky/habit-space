"use client"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useHabitStore } from "@/hooks/stores/useHabitStore";
import { HABITS } from "@/lib/habits";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

export function AppSidebar() {
  const setSelectedHabit = useHabitStore((state) => state.setSelectedHabit);
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup>
          <SidebarGroupLabel>Habits</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {HABITS.map((habit, i) => (
                <SidebarMenuItem key={i}>
                  <SidebarMenuButton asChild>
                    <span className="hover:bg-white/30 cursor-pointer" onClick={() => setSelectedHabit(habit.name)}>
                      {habit.name}
                    </span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
