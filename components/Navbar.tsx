"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

import UserMenu from "./UserMenu";

export default function Navbar() {
  return (
    <div className="pt-5 flex flex-col">
      <div className="navbar max-w-[1500px] mx-auto w-[90%] flex justify-between items-center px-5 py-3 bg-secondary shadow-xl rounded-3xl">
        <div>
          <Link href={"/"} className="flex flex-col gap-1 items-center">
            <h1 className="text-6xl text-primary baloo">NextSTEP</h1>
            <h6 className="text-tetiary">Odkryj swoją ścieżkę</h6>
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <h6 className="text-tetiary text-lg">Czym jest NextSTEP</h6>
          <UserMenu />
          <UserButton />
        </div>
      </div>
    </div>
  );
}
