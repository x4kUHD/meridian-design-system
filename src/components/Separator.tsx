import * as React from "react";
import { cn } from "../cn";

export interface SeparatorProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: "horizontal" | "vertical";
}

export function Separator({ className, orientation = "horizontal", ...props }: SeparatorProps) {
  return <hr role="separator" data-orientation={orientation} className={cn("mdn-separator", className)} {...props} />;
}
