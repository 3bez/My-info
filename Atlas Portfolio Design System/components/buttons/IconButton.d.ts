import * as React from "react";

/**
 * Square 44px icon-only control — social links, nav actions, toolbar buttons.
 * Always pass `label` for accessibility.
 */
export interface IconButtonProps {
  /** The icon node (Lucide svg / <i>). */
  children: React.ReactNode;
  /** Accessible label (also the tooltip). */
  label: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  /** Use "ink" on dark surfaces. @default "default" */
  tone?: "default" | "ink";
  /** Drop the border for a lighter footprint. @default false */
  bare?: boolean;
  className?: string;
}

export function IconButton(props: IconButtonProps): JSX.Element;
