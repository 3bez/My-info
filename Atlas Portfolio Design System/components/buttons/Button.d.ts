import * as React from "react";

/**
 * Primary call-to-action button for the Atlas portfolio system.
 * Mono uppercase label, restrained radius, amber primary with a soft glow on hover.
 *
 * @startingPoint section="Buttons" subtitle="Primary / secondary / ghost CTA" viewport="700x160"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: "primary" | "secondary" | "ghost" | "inverse";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Render as a link instead of a button. */
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  /** Leading icon node (e.g. a Lucide <i> / svg). */
  icon?: React.ReactNode;
  /** Trailing icon node (e.g. an arrow). */
  iconRight?: React.ReactNode;
  disabled?: boolean;
  /** Stretch to fill the container width. @default false */
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export function Button(props: ButtonProps): JSX.Element;
