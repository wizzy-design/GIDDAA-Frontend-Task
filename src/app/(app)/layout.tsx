// import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
// import MobileSidebar from "@/components/shared/MobileSidebar";
// import Profile from "@/components/shared/Profile";
// import Sidebar from "@/components/shared/Sidebar";
import { UserProvider } from "@/context/UserContext";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserProvider>
      <main className="flex items-start gap-0 bg-[#F8F9FA]">
        {/* <MobileSidebar />

        <Sidebar /> */}

        <div className="w-full space-y-5 px-4 py-6 pb-40 md:overflow-hidden lg:space-y-10">
          {/* <div className="flex items-center justify-end lg:justify-between lg:pr-10">
            <BreadcrumbSection />

            <Profile />
          </div> */}

          {children}
        </div>
      </main>
    </UserProvider>
  );
}
