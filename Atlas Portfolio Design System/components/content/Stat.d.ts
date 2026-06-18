import * as React from "react";

/**
 * Big display statistic — number + amber suffix + mono caption. Used in the hero stat row.
 */
export interface StatProps {
  /** The numeral, e.g. "12" or "60". */
  value: React.ReactNode;
  /** Amber suffix, e.g. "+" or "yrs". */
  suffix?: React.ReactNode;
  /** Mono caption below, e.g. "PROJECTS DELIVERED". */
  label: React.ReactNode;
  /** "ink" for dark sections. @default "default" */
  tone?: "default" | "ink";
  className?: string;
}

export function Stat(props: StatProps): JSX.Element;
