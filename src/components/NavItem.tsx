import * as React from "react";
import { cn } from "../cn";

export interface NavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Marks the current page. */
  active?: boolean;
  /** An icon element shown before the label. */
  icon?: React.ReactNode;
}

export function NavItem({ className, active, icon, children, ...props }: NavItemProps) {
  return (
    <a aria-current={active ? "page" : undefined} className={cn("mdn-nav-item", className)} {...props}>
      {icon}
      {children}
    </a>
  );
}
