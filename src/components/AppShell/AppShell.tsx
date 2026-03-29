"use client";

import { usePathname } from "next/navigation";
import SiteHeader from "@/components/ContactComponents/SiteHeader/SiteHeader";

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = ({ children }: AppShellProps) => {
  const pathname = usePathname();
  const showSiteHeader = !pathname.startsWith("/studio");

  return (
    <>
      {showSiteHeader ? <SiteHeader /> : null}
      {children}
    </>
  );
};

export default AppShell;
