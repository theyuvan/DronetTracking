import React from 'react';
import { Bell, Menu, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const DroneHeader = () => {
  return (
    <header className="bg-secondary border-b border-gray-700 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Button variant="outline" size="icon" className="mr-4 lg:hidden">
          <Menu className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-bold text-primary hidden md:block">DroneTrack</h1>
      </div>
      
      <div className="flex-1 max-w-md mx-4 hidden md:block">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search deliveries..."
            className="pl-8 bg-secondary/50"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
        </Button>
        <Button variant="outline" size="icon">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default DroneHeader;
