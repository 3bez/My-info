import * as React from "react";

/**
 * Form field wrapper: mono uppercase label + required/optional marker + hint/error line.
 * Wrap an <Input> or <Textarea> as its child.
 */
export interface FieldProps {
  label?: React.ReactNode;
  htmlFor?: string;
  /** Show a required asterisk. */
  required?: boolean;
  /** Show an "optional" tag (ignored if required). */
  optional?: boolean;
  /** Helper text under the control. */
  hint?: React.ReactNode;
  /** Error message — replaces hint and turns the line red. */
  error?: React.ReactNode;
  /** "ink" for dark sections. @default "default" */
  tone?: "default" | "ink";
  children: React.ReactNode;
  className?: string;
}

export function Field(props: FieldProps): JSX.Element;
