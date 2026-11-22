import * as React from "react";
import { cn } from "../cn";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** `raised` floats on a soft shadow; `sunken` recedes into the canvas. */
  variant?: "default" | "raised" | "sunken";
  /** Inner padding. Use `none` when the card wraps a table. */
  padding?: "none" | "md" | "lg";
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(function Card(
  { className, variant = "default", padding = "md", ...props },
  ref,
) {
  return (
    <div ref={ref} data-variant={variant} data-padding={padding} className={cn("mdn-card", className)} {...props} />
  );
});

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mdn-card-header", className)} {...props} />;
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("mdn-card-title", className)} {...props} />;
}

export function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("mdn-card-description", className)} {...props} />;
}

export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mdn-card-footer", className)} {...props} />;
}
