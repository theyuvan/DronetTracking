
import React from 'react';
import { Home, Package, Map, Settings, BarChart, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavItem = ({ icon, label, active }: NavItemProps) => (
  <Button
    variant="ghost"
    className={cn(
      "w-full justify-start mb-1",
      active ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground"
    )}
  >
    <div className="flex items-center">
      <div className="mr-2">{icon}</div>
      <span>{label}</span>
    </div>
  </Button>
);

const DroneSidebar = () => {
  return (
    <div className="h-full flex flex-col border-r border-gray-200 bg-white p-4">
      <div className="flex flex-col flex-1">
        <h2 className="text-lg font-semibold mb-6">Navigation</h2>
        
        <div className="space-y-1">
          <NavItem icon={<Home className="h-5 w-5" />} label="Dashboard" />
          <NavItem icon={<Package className="h-5 w-5" />} label="Deliveries" active />
          <NavItem icon={<Map className="h-5 w-5" />} label="Drone Map" />
          <NavItem icon={<BarChart className="h-5 w-5" />} label="Analytics" />
        </div>
        
        <Separator className="my-6" />
        
        <div className="space-y-1">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Settings</h3>
          <NavItem icon={<Settings className="h-5 w-5" />} label="Preferences" />
          <NavItem icon={<HelpCircle className="h-5 w-5" />} label="Help & Support" />
        </div>
      </div>
      
      <div className="mt-auto rounded-lg bg-primary/5 p-4">
        <h3 className="font-medium text-sm">Current Fleet Status</h3>
        <div className="mt-2 text-sm">
          <div className="flex justify-between mb-1">
            <span className="text-muted-foreground">Active Drones</span>
            <span className="font-medium">7/10</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Deliveries Today</span>
            <span className="font-medium">24</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DroneSidebar;
