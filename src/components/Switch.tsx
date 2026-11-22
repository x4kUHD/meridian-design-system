import * as React from "react";
import { cn } from "../cn";

export interface SwitchProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange" | "role"> {
  /** Controlled state. Omit to let the switch manage itself. */
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export function Switch({ className, checked, defaultChecked = false, onCheckedChange, onClick, ...props }: SwitchProps) {
  const [internal, setInternal] = React.useState(defaultChecked);
  const on = checked ?? internal;
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      className={cn("mdn-switch", className)}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;
        if (checked === undefined) setInternal(!on);
        onCheckedChange?.(!on);
      }}
      {...props}
    />
  );
}
