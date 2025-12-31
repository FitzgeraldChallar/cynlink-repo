import React from 'react'
import {Clock, Mail, MapPin, Phone} from "lucide-react";


interface ContactItemData {
    title: string;
    subtitle: string;
    icon: React.ReactNode;
}

const data: ContactItemData[] = [
    {
        title: "Visit Us",
        subtitle: "123 Main Street, Monrovia, Liberia",
        icon: <MapPin className="w-5 h-5" />
    },
    {
        title: "Email Us",
        subtitle: "info@cynlink.com",
        icon: <Mail className="w-5 h-5" />
    },
    {
        title: "Call Us",
        subtitle: "+231 88 736 5288",
        icon: <Phone className="w-5 h-5" />
    },
    {
        title: "Open Hours",
        subtitle: "Mon-Fri 9AM - 6PM",
        icon: <Clock className="w-5 h-5" />
    }
    
];

const FooterTop = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 xl:gap-50 border-b pt-5 pb-5">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-4"
        >
          {/* Icon */}
          <div className="text-shop_gold shrink-0 mt-1">
            {item.icon}
          </div>

          {/* Text */}
          <div>
            <p className="text-sm font-semibold text-shop_dark">
              {item.title}
            </p>
            <p className="text-sm text-gray-500">
              {item.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};



export default FooterTop
