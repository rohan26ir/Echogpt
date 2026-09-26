import { ReactNode } from "react";

export default function Badge({ children }: { children?: ReactNode }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-400 border border-orange-500/20">
      {children}
    </span>
  );
}