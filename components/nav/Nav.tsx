import Link from "next/link";
import React from "react";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { Search } from "lucide-react";

const Nav = () => {
  return (
    <div className="flex justify-evenly h-[90px] bg-white text-[#0D0E43] items-center">
      <span className="text-[34px] leading-10">Hekto</span>

      <div className="flex items-center gap-9">
        <Link href="/" passHref>
          <span>Home</span>
        </Link>
        <Link href="/pages" passHref>
          <span>Pages</span>
        </Link>
        <Link href="/products" passHref>
          <span>Products</span>
        </Link>
        <Link href="/blog" passHref>
          <span>Blog</span>
        </Link>
        <Link href="/shop" passHref>
          <span>Shop</span>
        </Link>
      </div>

      <div className="flex items-center w-full max-w-sm">
        <Input type="text" placeholder="Search" />
        <Button type="submit" className="bg-[#FB2E86]">
          <Search className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default Nav;
