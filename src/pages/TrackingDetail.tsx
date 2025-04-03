
import React from 'react';
import { useParams } from 'react-router-dom';
import DroneTrackingDetail from '@/components/DroneTrackingDetail';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrackingDetail = () => {
  const { orderId } = useParams<{ orderId: string }>();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4">
        <div className="mb-6">
          <Link to="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>
        </div>
        
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Drone Delivery Tracking</h1>
          <p className="text-muted-foreground">Track your package in real-time as it makes its journey to you.</p>
        </div>
        
        <DroneTrackingDetail orderId={orderId} />
      </div>
    </div>
  );
};

export default TrackingDetail;
