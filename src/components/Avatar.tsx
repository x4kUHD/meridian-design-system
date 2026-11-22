import * as React from "react";
import { cn } from "../cn";

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL. Falls back to `initials` when absent. */
  src?: string;
  alt?: string;
  /** One to two letters shown when there is no image. */
  initials?: string;
  size?: "sm" | "md" | "lg";
}

export function Avatar({ className, src, alt = "", initials, size = "md", ...props }: AvatarProps) {
  return (
    <span data-size={size} className={cn("mdn-avatar", className)} {...props}>
      {src ? <img src={src} alt={alt} /> : initials}
    </span>
  );
}
