"use client";

import React from "react";
import Link from "next/link";
import { Youtube, Instagram, Facebook, Github, Slack } from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

interface SocialMediaProps {
  className?: string;
  tooltipClassName?: string;

}

const socialLink = [
  { title: "Youtube", href: "https://www.youtube.com/@cynlinkstore", icon: <Youtube className="w-5 h-5" /> },
  { title: "Instagram", href: "https://www.instagram.com/cynlinkstore/", icon: <Instagram className="w-5 h-5" /> },
  { title: "Facebook", href: "https://www.facebook.com/cynlinkstore", icon: <Facebook className="w-5 h-5" /> },
  { title: "Github", href: "https://github.com/cynlinkstore", icon: <Github className="w-5 h-5" /> },
  { title: "Slack", href: "https://twitter.com/cynlinkstore", icon: <Slack className="w-5 h-5" /> },
];

const SocialMedia = ({ className, tooltipClassName }: SocialMediaProps) => {
  return (
    <TooltipProvider>
      <div className={`flex gap-4 ${className ?? ""}`}>
        {socialLink.map((item) => (
          <Tooltip key={item.title}>
            <TooltipTrigger asChild>
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-shop_light_gold hoverEffect"
              >
                {item.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent side="top" className={tooltipClassName}>{item.title}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
