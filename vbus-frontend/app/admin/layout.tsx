"use client";
import { useEffect, useState } from "react";
import { useRouter, notFound } from "next/navigation";
import AdminNotFound from "./not-found";
import Sidebar from "@/components/admin/Sidebar";


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
      if (user.role === 'ADMIN') {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    } catch (e) {
      setIsAdmin(false);
    }
  }, []);

  // While checking, show nothing or a loader
  if (isAdmin === null) {
    return <div className="h-screen bg-[#020817]"></div>;
  }

  // If not admin, show the local 404 screen
  if (isAdmin === false) {
    return <AdminNotFound />;
  }


  return (
    <div className="flex bg-[#020817] min-h-screen">
      <Sidebar />
      <main className="ml-[280px] flex-1">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}

