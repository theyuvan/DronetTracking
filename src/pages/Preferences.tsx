import React from 'react';
import DroneSidebar from '@/components/DroneSidebar';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Slider } from '@/components/ui/slider';

const Preferences = () => {
  return (
    <div className="drone-tracker-grid">
      <div className="drone-sidebar">
        <DroneSidebar />
      </div>
      
      <div className="drone-main overflow-auto">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-primary">Preferences</h2>
          
          <div className="bg-secondary p-6 rounded-lg border border-gray-700 shadow-sm">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-primary mb-4">Notification Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-primary">Email Notifications</h4>
                      <p className="text-sm text-muted-foreground">Receive email updates about deliveries</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-primary">SMS Alerts</h4>
                      <p className="text-sm text-muted-foreground">Get text messages for critical updates</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-primary">Push Notifications</h4>
                      <p className="text-sm text-muted-foreground">Receive updates in your browser</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
              
              <Separator className="bg-gray-700" />
              
              <div>
                <h3 className="text-lg font-medium text-primary mb-4">Map Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-primary">Show Drone Labels</h4>
                      <p className="text-sm text-muted-foreground">Display drone IDs on the map</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-primary">Show Delivery Paths</h4>
                      <p className="text-sm text-muted-foreground">Display routes on the map</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-2">Map Refresh Rate</h4>
                    <p className="text-sm text-muted-foreground mb-4">Adjust how often the map updates</p>
                    <Slider defaultValue={[10]} max={30} step={5} />
                    <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                      <span>5s</span>
                      <span>15s</span>
                      <span>30s</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator className="bg-gray-700" />
              
              <div>
                <h3 className="text-lg font-medium text-primary mb-4">Account Preferences</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-primary mb-2">Time Zone</h4>
                    <select className="w-full rounded-md border border-gray-700 bg-secondary p-2">
                      <option>Pacific Time (PT)</option>
                      <option>Mountain Time (MT)</option>
                      <option>Central Time (CT)</option>
                      <option>Eastern Time (ET)</option>
                    </select>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-2">Distance Unit</h4>
                    <div className="flex space-x-2">
                      <Button variant="outline">Miles</Button>
                      <Button variant="ghost">Kilometers</Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline">Reset to Defaults</Button>
                <Button>Save Preferences</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preferences;