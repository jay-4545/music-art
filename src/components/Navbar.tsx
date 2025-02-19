"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            active={active}
            setActive={setActive}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem active={active} setActive={setActive} item="Our Services">
          <div className="flex flex-col space-y-4 ">
            <HoveredLink href="/services">All Services</HoveredLink>
            <HoveredLink href="/services">Basic Music Theory</HoveredLink>
            <HoveredLink href="/services">Advanced Composition</HoveredLink>
            <HoveredLink href="/services">Song Writing</HoveredLink>
            <HoveredLink href="/services">Music Production</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem
            active={active}
            setActive={setActive}
            item="Contact Us"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
