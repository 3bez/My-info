import * as React from "react";

/**
 * Single-line text input. Warm hairline border, amber focus ring.
 *
 * @startingPoint section="Forms" subtitle="Inputs, textarea & field labels" viewport="700x320"
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** "ink" for dark sections. @default "default" */
  tone?: "default" | "ink";
  /** Red error border. @default false */
  error?: boolean;
}

export function Input(props: InputProps): JSX.Element;
