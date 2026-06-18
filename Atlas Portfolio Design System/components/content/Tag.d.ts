import * as React from "react";

/**
 * Small mono chip for tech / skill tags.
 */
export interface TagProps {
  children: React.ReactNode;
  /** @default "default" */
  variant?: "default" | "solid" | "accent" | "ink";
  /** Hover affordance + button role. @default false */
  interactive?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}

export function Tag(props: TagProps): JSX.Element;
