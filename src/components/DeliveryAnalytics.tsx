
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', deliveries: 12 },
  { name: 'Tue', deliveries: 19 },
  { name: 'Wed', deliveries: 15 },
  { name: 'Thu', deliveries: 18 },
  { name: 'Fri', deliveries: 24 },
  { name: 'Sat', deliveries: 10 },
  { name: 'Sun', deliveries: 7 },
];

const DeliveryAnalytics = () => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Weekly Deliveries</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis 
                dataKey="name" 
                tickLine={false} 
                axisLine={false}
                fontSize={12}
              />
              <YAxis 
                tickLine={false} 
                axisLine={false} 
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px',
                  fontSize: '12px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
                formatter={(value) => [`${value} deliveries`, 'Count']}
                labelFormatter={(label) => `${label}`}
              />
              <Bar 
                dataKey="deliveries" 
                fill="#2563eb" 
                radius={[4, 4, 0, 0]}
                barSize={30}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeliveryAnalytics;
