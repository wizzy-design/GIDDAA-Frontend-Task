"use client";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="custom-scrollbar3 sticky left-0 top-0 block h-screen min-w-[250px] overflow-auto bg-[#335F32] text-white">
      <header className="my-8 flex flex-col gap-4 border-b border-solid border-[#979797] pb-6">
        <Image
          src="/logo.svg"
          alt=""
          width={99.9082260131836}
          height={39}
          className="mx-5"
        />

        <p className="mx-5 text-sm">Residencia Moderno Smart...</p>
      </header>

      <div className="space-y-8 px-5 py-2">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 cursor-pointer text-sm font-bold ${
              pathname.includes(item.name.toLowerCase())
                ? "bg-white rounded-[100px] px-4 py-2.5 text-[#335F32]"
                : ""
            }`}
          >
            <Image
              src={item.icon}
              alt={item.name + " icon"}
              width={26}
              height={26}
            />
            <p>{item.name}</p>
          </div>
        ))}
        <div className="space-y-3 bg-red-500">COME BACK TO THIS</div>
      </div>
    </div>
  );
};

export default Sidebar;

const menuItems = [
  { name: "Dashboard", icon: "Dashboard.svg" },
  { name: "Properties", icon: "Properties.svg" },
  { name: "Plans", icon: "Plans.svg" },
  { name: "Mortgage Options", icon: "Mortgage.svg" },
  { name: "CRM", icon: "CRM.svg" },
  { name: "Sales & Transactions", icon: "Sales.svg" },
  { name: "House Inspections", icon: "House.svg" },
  { name: "Leads", icon: "Leads.svg" },
  { name: "Applications", icon: "Applications.svg" },
  { name: "Application Review", icon: "Review.svg" },
  { name: "Risk Assessment", icon: "Risk.svg" },
  { name: "Organization Settings", icon: "Organization.svg" },
];
