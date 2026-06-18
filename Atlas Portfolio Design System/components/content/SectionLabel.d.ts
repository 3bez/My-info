import * as React from "react";

/**
 * Numbered section eyebrow — amber index, hairline rule, mono label.
 */
export interface SectionLabelProps {
  /** Section index, e.g. "02". */
  number?: React.ReactNode;
  children: React.ReactNode;
  /** "ink" for dark sections. @default "default" */
  tone?: "default" | "ink";
  className?: string;
}

export function SectionLabel(props: SectionLabelProps): JSX.Element;
