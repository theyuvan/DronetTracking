
import React from 'react';
import { Package } from 'lucide-react';

const DroneMap = () => {
  return (
    <div className="map-container bg-blue-50 border border-gray-200">
      {/* This is a simple SVG map for demonstration - in a real app, we would use Mapbox or Google Maps */}
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background map elements */}
        <rect x="50" y="100" width="900" height="600" fill="#e6efff" rx="8" />
        
        {/* Roads */}
        <path
          d="M100 300 H900 M200 150 V700 M450 150 V700 M700 150 V700 M100 500 H900"
          stroke="#cbd5e1"
          strokeWidth="8"
        />
        
        {/* Main landmarks */}
        <rect x="150" y="250" width="100" height="100" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" rx="4" />
        <rect x="650" y="350" width="150" height="100" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" rx="4" />
        <rect x="350" y="550" width="120" height="80" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" rx="4" />
        
        {/* Warehouse (starting point) */}
        <rect x="150" y="550" width="80" height="80" fill="#2563eb" stroke="#1e40af" strokeWidth="2" rx="4" />
        <text x="190" y="590" textAnchor="middle" fill="white" fontSize="12">Warehouse</text>
        
        {/* Delivery paths */}
        <path
          d="M190 550 C190 450, 300 400, 380 350 C450 300, 550 300, 620 350"
          stroke="#2563eb"
          strokeWidth="3"
          fill="none"
          strokeDasharray="5 5"
          className="drone-path"
        />
        
        <path
          d="M190 550 C190 500, 250 480, 350 500 C450 520, 550 500, 590 450"
          stroke="#16a34a"
          strokeWidth="3"
          fill="none"
          strokeDasharray="5 5"
          className="drone-path"
        />
        
        <path
          d="M190 550 C220 480, 280 470, 420 520 C500 550, 550 570, 600 580"
          stroke="#d97706"
          strokeWidth="3"
          fill="none"
          strokeDasharray="5 5"
          className="drone-path"
        />
        
        {/* Drones on path */}
        <g className="animate-drone-flight">
          <circle cx="380" cy="350" r="8" fill="#2563eb" />
          <polygon 
            points="380,340 375,355 385,355" 
            fill="#2563eb" 
            transform="rotate(45, 380, 350)" 
          />
        </g>
        
        <g className="animate-drone-flight" style={{ animationDelay: "-1s" }}>
          <circle cx="350" cy="500" r="8" fill="#16a34a" />
          <polygon 
            points="350,490 345,505 355,505" 
            fill="#16a34a"
            transform="rotate(15, 350, 500)" 
          />
        </g>
        
        <g className="animate-drone-flight" style={{ animationDelay: "-2s" }}>
          <circle cx="420" cy="520" r="8" fill="#d97706" />
          <polygon 
            points="420,510 415,525 425,525" 
            fill="#d97706"
            transform="rotate(-15, 420, 520)" 
          />
        </g>
        
        {/* Delivery destinations */}
        <circle cx="620" cy="350" r="10" fill="white" stroke="#2563eb" strokeWidth="3" />
        <circle cx="590" cy="450" r="10" fill="white" stroke="#16a34a" strokeWidth="3" />
        <circle cx="600" cy="580" r="10" fill="white" stroke="#d97706" strokeWidth="3" />
        
        {/* Destination icons */}
        <foreignObject x="610" y="340" width="20" height="20">
          <div className="flex items-center justify-center h-full">
            <Package className="h-4 w-4 text-blue-600" />
          </div>
        </foreignObject>
        
        <foreignObject x="580" y="440" width="20" height="20">
          <div className="flex items-center justify-center h-full">
            <Package className="h-4 w-4 text-green-600" />
          </div>
        </foreignObject>
        
        <foreignObject x="590" y="570" width="20" height="20">
          <div className="flex items-center justify-center h-full">
            <Package className="h-4 w-4 text-amber-600" />
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};

export default DroneMap;
