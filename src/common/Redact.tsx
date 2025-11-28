import type { PropsWithChildren } from "react";

const redacted = false;

export function Redact(props: PropsWithChildren) {
  if (redacted) {
    return <>Redacted</>;
  }
  return props.children;
}
