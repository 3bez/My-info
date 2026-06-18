import * as React from "react";

/**
 * One entry in the vertical experience timeline — node + rail, period, role,
 * company/location, description, and skill tags.
 */
export interface TimelineEntryProps {
  role: React.ReactNode;
  company: React.ReactNode;
  location?: React.ReactNode;
  /** e.g. "2021 — Present". */
  period: React.ReactNode;
  description?: React.ReactNode;
  /** Skill tags rendered as <Tag>. */
  tags?: string[];
  /** Highlight as the current role (amber node). @default false */
  current?: boolean;
  /** "ink" for dark sections. @default "default" */
  tone?: "default" | "ink";
  className?: string;
}

export function TimelineEntry(props: TimelineEntryProps): JSX.Element;
