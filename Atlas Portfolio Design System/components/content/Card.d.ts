import * as React from "react";

/**
 * Surface container for projects, certifications, and feature panels.
 * Warm hairline border, soft shadow, optional hover-lift and amber icon chip.
 *
 * @startingPoint section="Content" subtitle="Project & certification cards" viewport="700x360"
 */
export interface CardProps {
  children: React.ReactNode;
  /** Lift + shadow on hover (use for clickable cards). @default false */
  hover?: boolean;
  /** "ink" for dark sections. @default "default" */
  tone?: "default" | "ink";
  /** Remove padding (for media-flush cards). @default false */
  flush?: boolean;
  /** Icon node rendered in an amber chip at top. */
  icon?: React.ReactNode;
  className?: string;
}

export function Card(props: CardProps): JSX.Element;
