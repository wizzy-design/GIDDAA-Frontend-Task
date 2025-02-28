"use client";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import useUser from "@/context/UserContext";

const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(true)}
        className={`absolute left-4 top-6 lg:hidden ${
          isOpen ? "hidden" : "block"
        }`}
      >
        <FaBars size={24} className="" />
      </button>

      <button
        onClick={() => setIsOpen(false)}
        className={`absolute left-[210px] top-6 z-[60] lg:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <FaTimes size={24} className="text-white" />
      </button>

      <div
        className={`custom-scrollbar3 fixed left-0 top-0 z-50 h-screen min-w-[250px] overflow-auto bg-[#335F32] text-white transition-transform duration-300 shadow-[0px_4px_4px_0px_#0000000D] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <header className="my-8 flex h-[108px] flex-col gap-4 border-b border-solid border-[#979797]">
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

          {/* Username and email */}
          <div className="absolute bottom-2.5 w-[210px] 2xl:bottom-1/2">
            <div className="flex h-[33.999995749028542] cursor-pointer items-center gap-2 rounded-[100px] bg-[#F0F0F0] px-3 py-5">
              {sessionStorage.getItem("logo") ? (
                <Image
                  src={sessionStorage.getItem("logo") || ""}
                  alt="User logo"
                  width={29}
                  height={29}
                  className="rounded-full"
                />
              ) : (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300">
                  <span className="text-sm font-bold text-white">
                    {sessionStorage
                      .getItem("fullName")
                      ?.charAt(0)
                      .toUpperCase()}
                  </span>
                </div>
              )}

              <div className="flex flex-col truncate">
                <span className="text-[11px] font-semibold text-black">
                  {sessionStorage.getItem("fullName")}
                </span>
                <span className="text-[9px] font-semibold text-[#667085]">
                  {sessionStorage.getItem("email")}
                </span>
              </div>
              <SidebarPopup />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

const menuItems = [
  { name: "Dashboard", icon: "/Dashboard.svg" },
  { name: "Properties", icon: "/Properties.svg" },
  // { name: "Plans", icon: "/Plans.svg" },
  // { name: "Mortgage Options", icon: "/Mortgage.svg" },
  // { name: "CRM", icon: "/CRM.svg" },
  // { name: "Sales & Transactions", icon: "/Sales.svg" },
  // { name: "House Inspections", icon: "/House.svg" },
  // { name: "Leads", icon: "/Leads.svg" },
  // { name: "Applications", icon: "/Applications.svg" },
  // { name: "Application Review", icon: "/Review.svg" },
  // { name: "Risk Assessment", icon: "/Risk.svg" },
  // { name: "Organization Settings", icon: "/Organization.svg" },
];

function SidebarPopup() {
  const { logout } = useUser();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Image
          src={"/3-dots.svg"}
          alt="3 dots"
          width={10.84}
          height={1.0159592628479004}
          className="absolute right-2 w-5 rotate-90"
        />
      </PopoverTrigger>
      <PopoverContent
        className="w-fit rounded-[15px] border border-solid border-[#E1E1E1] bg-white p-0 shadow-sm"
        sideOffset={20}
        align="end"
      >
        <ul className="space-y-4">
          <li className="flex items-center gap-2.5 px-4 py-1 pt-3 text-xs">
            <Image
              src="/profile.svg"
              alt="Profile icon"
              width={16}
              height={16}
            />{" "}
            My Profile
          </li>
          <li className="flex items-center gap-2.5 px-4 text-xs">
            <Image
              src="/changePass.svg"
              alt="Change password icon"
              width={16}
              height={16}
            />{" "}
            Change Password
          </li>
          <li className="flex cursor-pointer items-center gap-2.5 border-t border-solid border-[#F0F0F0] px-4 py-3 text-xs text-[#E40000]">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 focus:outline-none"
            >
              <Image
                src="/logout.svg"
                alt="Logout icon"
                width={16}
                height={16}
              />{" "}
              Logout
            </button>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
}
