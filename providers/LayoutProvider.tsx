"use client";

import { usePathname } from "next/navigation";
import { fetchUsers } from "@/app/(auth)/actions/fetchUsers";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LayoutProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPublicRoute = ["/sign-in", "/sign-up"].includes(
    pathname.split("/")[1]
  );

  const getNavbar = () => {
    if (isPublicRoute) {
      return null;
    } else {
      return <Navbar />;
    }
  };

  const getFooter = () => {
    if (isPublicRoute) {
      return null;
    } else {
      return <Footer />;
    }
  };

  const getContent = () => {
    if (isPublicRoute) {
      return null;
    } else {
      return <>{children}</>;
    }
  };

  const getCurrentUser = async () => {
    try {
      const response: any = await fetchUsers();
      if (response.error) {
        throw new Error(response.error.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      return;
    }
  };

  useEffect(() => {
    if(!isPublicRoute) {
      getCurrentUser();
    }
  }, [])

  return (
    <div className="flex flex-col justify-between min-h-screen bg-secondary">
        {getNavbar()}
        {getContent()}
        {getFooter()}
    </div>
  )
}
