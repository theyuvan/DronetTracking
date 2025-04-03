
import React from 'react';
import { Package, Clock, MapPin, User, AlertTriangle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface DeliveryCardProps {
  id: string;
  customer: string;
  status: 'in-transit' | 'delivered' | 'delayed' | 'preparing';
  eta: string;
  progress: number;
  address: string;
  droneId: string;
  color: string;
}

const statusMap = {
  'in-transit': { label: 'In Transit', color: 'bg-blue-100 text-blue-800' },
  'delivered': { label: 'Delivered', color: 'bg-green-100 text-green-800' },
  'delayed': { label: 'Delayed', color: 'bg-amber-100 text-amber-800' },
  'preparing': { label: 'Preparing', color: 'bg-gray-100 text-gray-800' },
};

const DeliveryCard = ({ id, customer, status, eta, progress, address, droneId, color }: DeliveryCardProps) => {
  return (
    <Link to={`/tracking/${id}`}>
      <Card className="overflow-hidden transition-all hover:shadow-md">
        <div className={cn("h-1", color)} />
        <CardHeader className="p-4 pb-2 flex flex-row items-center justify-between">
          <CardTitle className="text-sm font-medium">Order #{id}</CardTitle>
          <Badge 
            variant="secondary" 
            className={cn("font-normal text-xs", statusMap[status].color)}
          >
            {statusMap[status].label}
          </Badge>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="flex items-center mb-2">
            <User className="h-4 w-4 mr-2 text-muted-foreground" />
            <span className="text-sm">{customer}</span>
          </div>
          
          <div className="flex items-center mb-2">
            <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
            <span className="text-sm text-muted-foreground truncate" title={address}>
              {address}
            </span>
          </div>
          
          <div className="flex items-center mb-3">
            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">ETA: {eta}</span>
          </div>
          
          <div className="mb-1 flex justify-between text-xs">
            <span>Delivery Progress</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className={cn("h-1.5", color.replace('bg-', 'bg-opacity-20 ') + " [&>div]:"+color)} />
          
          <div className="mt-3 flex items-center justify-between text-xs">
            <div className="flex items-center">
              <Package className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
              <span>Drone #{droneId}</span>
            </div>
            
            {status === 'delayed' && (
              <div className="flex items-center text-amber-600">
                <AlertTriangle className="h-3.5 w-3.5 mr-1" />
                <span>Slight delay</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

const DeliveryCards = () => {
  const deliveries: DeliveryCardProps[] = [
    {
      id: "DRN1025",
      customer: "Alex Johnson",
      status: "in-transit",
      eta: "10:45 AM",
      progress: 65,
      address: "123 Main St, Seattle, WA",
      droneId: "DX-455",
      color: "bg-drone-blue",
    },
    {
      id: "DRN1026",
      customer: "Sarah Williams",
      status: "in-transit",
      eta: "11:15 AM",
      progress: 35,
      address: "789 Oak Dr, Seattle, WA",
      droneId: "DX-218",
      color: "bg-drone-green",
    },
    {
      id: "DRN1024",
      customer: "Michael Brown",
      status: "delayed",
      eta: "10:30 AM",
      progress: 42,
      address: "456 Pine Ave, Seattle, WA",
      droneId: "DX-371",
      color: "bg-drone-amber",
    },
    {
      id: "DRN1023",
      customer: "Emily Davis",
      status: "delivered",
      eta: "9:30 AM",
      progress: 100,
      address: "234 Cedar Ln, Seattle, WA",
      droneId: "DX-127",
      color: "bg-drone-teal",
    },
    {
      id: "DRN1027",
      customer: "James Wilson",
      status: "preparing",
      eta: "11:45 AM",
      progress: 15,
      address: "567 Elm St, Seattle, WA",
      droneId: "DX-502",
      color: "bg-drone-gray",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 p-4">
      {deliveries.map((delivery) => (
        <DeliveryCard key={delivery.id} {...delivery} />
      ))}
    </div>
  );
};

export default DeliveryCards;
