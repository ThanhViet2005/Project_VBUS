"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminNotFound from "./not-found";
import Sidebar from "@/components/admin/Sidebar";
import AdminHeader from "@/components/admin/AdminHeader";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      setIsAdmin(false);
      return;
    }

    try {
      const user = JSON.parse(storedUser);
      if (user && user.role === 'ADMIN') {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    } catch (e) {
      setIsAdmin(false);
    }
  }, []);

  if (isAdmin === null) {
    return <div className="h-screen bg-[#020817]"></div>;
  }

  if (isAdmin === false) {
    return <AdminNotFound />;
  }

  return (
    <div className="flex bg-[#020817] min-h-screen">
      <Sidebar />
      <main className="ml-[280px] flex-1 flex flex-col">
        <AdminHeader />
        <div className="p-8 flex-1">
          {children}
        </div>
      </main>
    </div>
  );
}

