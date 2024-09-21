"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from '@/app/components/ui/navbar-menu';
import { cn } from "@/app/lib/utils";
import Link from "next/link";



export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-3 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
       <Link href={'/'}><MenuItem setActive={setActive} active={active} item="Home"></MenuItem></Link> 
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/android-dev">Android Devlopment</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/smo">Smo</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contactus"}><MenuItem setActive={setActive} active={active} item="Contact Us"></MenuItem></Link>
        
        
      </Menu>
    </div>
  );
}
