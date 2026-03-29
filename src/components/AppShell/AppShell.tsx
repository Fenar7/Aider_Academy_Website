"use client";

import { usePathname } from "next/navigation";
import GlobalExperienceLayer from "@/components/AppShell/GlobalExperienceLayer";
import SiteHeader from "@/components/ContactComponents/SiteHeader/SiteHeader";

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = ({ children }: AppShellProps) => {
  const pathname = usePathname();
  const showSiteHeader = !pathname.startsWith("/studio");

  return (
    <GlobalExperienceLayer enabled={showSiteHeader}>
      {showSiteHeader ? <SiteHeader /> : null}
      {children}
    </GlobalExperienceLayer>
  );
};

export default AppShell;
