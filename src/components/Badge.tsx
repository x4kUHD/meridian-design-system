import * as React from "react";
import { cn } from "../cn";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Semantic colour. `success` and `danger` carry meaning; do not use them decoratively. */
  tone?: "neutral" | "brand" | "success" | "warning" | "danger" | "info";
}

export function Badge({ className, tone = "neutral", ...props }: BadgeProps) {
  return <span data-tone={tone} className={cn("mdn-badge", className)} {...props} />;
}
