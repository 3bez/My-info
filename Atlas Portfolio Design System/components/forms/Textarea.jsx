import React from "react";

// Reuses the .atlas-input styling injected by Input.jsx; import ensures it's present.
import "./Input.jsx";

export function Textarea({ tone = "default", error = false, rows = 5, className = "", ...rest }) {
  const cls = [
    "atlas-input",
    tone === "ink" ? "atlas-input--ink" : "",
    error ? "atlas-input--error" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return <textarea className={cls} rows={rows} style={{ resize: "vertical", minHeight: "6rem" }} {...rest} />;
}
