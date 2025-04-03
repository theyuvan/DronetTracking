
import React from 'react';
import { Clock, Package, MapPin, Video, User, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DroneMap from './DroneMap';

interface DroneTrackingDetailProps {
  orderId?: string;
}

const DroneTrackingDetail = ({ orderId = 'DRN1025' }: DroneTrackingDetailProps) => {
  // Mock data for the tracking details
  const trackingData = {
    orderId: orderId,
    customer: "Alex Johnson",
    status: "in-transit",
    eta: "10:45 AM",
    progress: 65,
    address: "123 Main St, Seattle, WA",
    droneId: "DX-455",
    packageSize: "Medium",
    packageWeight: "2.4 kg",
    packageDimensions: "30cm x 20cm x 15cm",
    contactPhone: "+1 (206) 555-0123",
    email: "alex.johnson@example.com"
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      {/* User Info Section */}
      <Card className="border-2 border-gray-200">
        <CardHeader className="flex flex-row items-center justify-between bg-gray-50 border-b">
          <CardTitle className="text-xl flex items-center gap-2">
            <User className="h-5 w-5" />
            User Information
          </CardTitle>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Order #{trackingData.orderId}</span>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-muted-foreground">Customer Name</p>
              <p className="font-medium">{trackingData.customer}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Contact Phone</p>
              <p className="font-medium">{trackingData.contactPhone}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Email Address</p>
              <p className="font-medium">{trackingData.email}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Delivery Address</p>
              <p className="font-medium">{trackingData.address}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Video Section */}
        <Card className="border-2 border-gray-200">
          <CardHeader className="bg-gray-50 border-b">
            <CardTitle className="text-xl flex items-center gap-2">
              <Video className="h-5 w-5" />
              Video Section
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 flex flex-col items-center justify-center h-[300px] bg-gray-100">
            <div className="text-center">
              <div className="bg-gray-200 rounded-full p-6 mb-3">
                <Video className="h-12 w-12 text-gray-500" />
              </div>
              <p className="font-medium">Live drone feed unavailable</p>
              <p className="text-sm text-muted-foreground">Live video will be available once the drone is in range.</p>
            </div>
          </CardContent>
        </Card>

        {/* Package Information */}
        <Card className="border-2 border-gray-200">
          <CardHeader className="bg-gray-50 border-b">
            <CardTitle className="text-xl flex items-center gap-2">
              <Package className="h-5 w-5" />
              Package Data
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex justify-between items-center py-2 border-b border-dashed">
                <span className="text-muted-foreground flex items-center gap-1">
                  <Info className="h-4 w-4" /> Package Size
                </span>
                <span className="font-medium">{trackingData.packageSize}</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b border-dashed">
                <span className="text-muted-foreground flex items-center gap-1">
                  <Info className="h-4 w-4" /> Weight
                </span>
                <span className="font-medium">{trackingData.packageWeight}</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b border-dashed">
                <span className="text-muted-foreground flex items-center gap-1">
                  <Info className="h-4 w-4" /> Dimensions
                </span>
                <span className="font-medium">{trackingData.packageDimensions}</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b border-dashed">
                <span className="text-muted-foreground flex items-center gap-1">
                  <Info className="h-4 w-4" /> Drone ID
                </span>
                <span className="font-medium">{trackingData.droneId}</span>
              </div>
              
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground flex items-center gap-1">
                  <Info className="h-4 w-4" /> Status
                </span>
                <span className="font-medium text-drone-blue">In Transit</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Location and ETA Section */}
      <Card className="border-2 border-gray-200">
        <CardHeader className="bg-gray-50 border-b">
          <CardTitle className="text-xl flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Location of the package and Estimated time of arrival
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 h-[350px] bg-gray-100 rounded-lg overflow-hidden">
              <DroneMap />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-medium mb-4">Delivery Information</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-muted-foreground flex items-center gap-1">
                      <Clock className="h-4 w-4" /> Estimated Time of Arrival
                    </p>
                    <p className="font-bold text-xl text-drone-blue">{trackingData.eta}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-4 w-4" /> Delivery Address
                    </p>
                    <p className="font-medium">{trackingData.address}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-drone-blue/10 p-4 rounded-lg mt-4">
                <h3 className="font-medium mb-2">Delivery Progress</h3>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block text-drone-blue">
                        {trackingData.progress}% Complete
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                    <div 
                      style={{ width: `${trackingData.progress}%` }} 
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-drone-blue" 
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Preparing</span>
                    <span>In Transit</span>
                    <span>Delivered</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DroneTrackingDetail;
