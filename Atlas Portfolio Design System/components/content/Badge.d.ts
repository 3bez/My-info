import * as React from "react";

/**
 * Pill badge for project types / categories. Uppercase mono, optional dot.
 */
export interface BadgeProps {
  children: React.ReactNode;
  /** @default "muted" */
  variant?: "accent" | "muted" | "outline" | "ink";
  /** Leading status dot. @default false */
  dot?: boolean;
  className?: string;
}

export function Badge(props: BadgeProps): JSX.Element;
