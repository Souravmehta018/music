'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";



export default function Navbar({ className }: { className?: string }){
    return(
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}> 
            Navbar </div>
    )
}