"use client";
import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import {
  Heart,
  PhoneCall,
  ShoppingBagIcon,
  ShoppingCartIcon,
  User,
} from "lucide-react";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "../select/Select";
import { Button } from "../button/Button";

const Header = () => {
  return (
    <div className="flex justify-evenly h-11 bg-[#7E33E0] text-[#F1F1F1] items-center">
      <div className="flex items-center gap-11">
        <div className="flex items-center">
          <EnvelopeIcon className="w-4 h-4" />
          <p className="ml-[10px]">olukotunken@gmail.com</p>
        </div>
        <div className="flex items-center">
          <PhoneCall className="w-4 h-4" />
          <p className="ml-[10px]">+234 7062988188</p>
        </div>
      </div>
      {/*  */}
      <div className="flex items-center gap-[17px]">
        <div className="flex items-center">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="English" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="espanol">Spanish</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="USD" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="usd">USD</SelectItem>
              <SelectItem value="ngn">NGN</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center">
          <Button variant="link" className="text-[#F1F1F1]">
            Login
            <User className="w-4 h-4 ml-1" />
          </Button>
        </div>
        <div className="flex items-center">
          <Button variant="link" className="text-[#F1F1F1]">
            Wishlist
            <Heart className="w-4 h-4 ml-1" />
          </Button>
        </div>

        <div className="flex items-center">
          <Button variant="link" className="text-[#F1F1F1]">
            <ShoppingCartIcon className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
