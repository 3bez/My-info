import * as React from "react";

/**
 * Multi-line text input — shares Input's styling, vertically resizable.
 */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** "ink" for dark sections. @default "default" */
  tone?: "default" | "ink";
  error?: boolean;
  /** @default 5 */
  rows?: number;
}

export function Textarea(props: TextareaProps): JSX.Element;
