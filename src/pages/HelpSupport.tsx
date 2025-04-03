import React from 'react';
import DroneSidebar from '@/components/DroneSidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const HelpSupport = () => {
  return (
    <div className="drone-tracker-grid">
      <div className="drone-sidebar">
        <DroneSidebar />
      </div>
      
      <div className="drone-main overflow-auto">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-primary">Help & Support</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-secondary p-6 rounded-lg border border-gray-700 shadow-sm">
                <h3 className="text-lg font-medium text-primary mb-4">Frequently Asked Questions</h3>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-primary">How do I track my delivery?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      You can track your delivery by clicking on the "Deliveries" section in the sidebar, finding your order, and clicking "Track". Alternatively, you can use the tracking ID that was emailed to you after your order was confirmed.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-primary">What do the different drone statuses mean?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      <ul className="list-disc pl-5 space-y-2">
                        <li><span className="font-medium">Idle</span>: The drone is at the hub and not currently assigned.</li>
                        <li><span className="font-medium">Loading</span>: The drone is being prepared with your package.</li>
                        <li><span className="font-medium">In Transit</span>: The drone is on its way to your delivery location.</li>
                        <li><span className="font-medium">Delivering</span>: The drone has arrived and is in the process of dropping off the package.</li>
                        <li><span className="font-medium">Returning</span>: The drone has completed delivery and is returning to base.</li>
                        <li><span className="font-medium">Maintenance</span>: The drone is unavailable due to scheduled maintenance.</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-primary">What if I miss my delivery?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Our drones will attempt to deliver your package twice. If both attempts fail, the package will be returned to our distribution center, and you'll be contacted to reschedule or arrange an alternative delivery method.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-primary">How does the drone know where to deliver?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Our drones use a combination of GPS coordinates, computer vision, and real-time mapping to navigate. For precise delivery, we recommend marking a clear, flat landing zone at your delivery address.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-primary">What weather conditions affect drone deliveries?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Our drones can operate in most weather conditions, but severe circumstances like heavy rain, snow, high winds (above 25mph), or storms may delay deliveries. Safety is our priority, and we'll notify you if weather affects your delivery time.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            
            <div>
              <div className="bg-secondary p-6 rounded-lg border border-gray-700 shadow-sm">
                <h3 className="text-lg font-medium text-primary mb-4">Contact Support</h3>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-1">Your Name</label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-1">Email Address</label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-primary mb-1">Subject</label>
                    <Input id="subject" placeholder="Subject of your inquiry" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-1">Message</label>
                    <Textarea id="message" placeholder="Describe your issue or question" rows={5} />
                  </div>
                  
                  <Button className="w-full">Send Message</Button>
                </form>
                
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <h4 className="font-medium text-primary mb-2">Other Ways to Reach Us</h4>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center text-muted-foreground">
                      <span className="font-medium mr-2 text-primary">Email:</span> support@dronetrack.com
                    </p>
                    <p className="flex items-center text-muted-foreground">
                      <span className="font-medium mr-2 text-primary">Phone:</span> (555) 123-4567
                    </p>
                    <p className="flex items-center text-muted-foreground">
                      <span className="font-medium mr-2 text-primary">Hours:</span> Mon-Fri, 8am-8pm EST
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;