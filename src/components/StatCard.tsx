import * as React from "react";
import { cn } from "../cn";
import { Card } from "./Card";

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** What is being measured, e.g. "Total revenue". */
  label: string;
  /** The headline figure, already formatted. */
  value: string;
  /** Change versus the previous period, already formatted, e.g. "+12.4%". */
  delta?: string;
  /** Whether the change is good, bad or neither. This is not the sign of the number: churn going down is `positive`. */
  trend?: "positive" | "negative" | "neutral";
  /** An icon element, shown in a tinted tile. */
  icon?: React.ReactNode;
}

export function StatCard({ className, label, value, delta, trend = "neutral", icon, ...props }: StatCardProps) {
  return (
    <Card variant="raised" className={cn(className)} {...props}>
      <div className="mdn-stat-label">
        <span>{label}</span>
        {icon ? <span className="mdn-stat-icon">{icon}</span> : null}
      </div>
      <div className="mdn-stat-value">{value}</div>
      {delta ? (
        <span className="mdn-stat-delta" data-trend={trend}>
          {delta} <span style={{ color: "var(--color-text-muted)", fontWeight: 400 }}>vs last month</span>
        </span>
      ) : null}
    </Card>
  );
}
