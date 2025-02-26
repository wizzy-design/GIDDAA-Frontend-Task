import Sidebar from "@/components/shared/Sidebar";
import { UserProvider } from "@/context/UserContext";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserProvider>
      <main className="flex items-start gap-0 bg-white">
        <Sidebar />

        <div className="mt-6 w-full space-y-5 md:overflow-hidden lg:mt-0 lg:space-y-10">
          {children}
        </div>
      </main>
    </UserProvider>
  );
}
