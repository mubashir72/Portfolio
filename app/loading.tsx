import React from "react";
import { Terminal } from "lucide-react";

/**
 * Loading Skeleton Component
 * Displays a clean dark loading indicator while Next.js routes load.
 */
export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg text-fg">
      <div className="p-4 rounded-xl bg-bg-surface border border-border shadow-glow-md animate-bounce">
        <Terminal className="w-10 h-10 text-accent animate-pulse" />
      </div>
      <div className="mt-4 flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest">
        <span>Loading Portfolio</span>
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
      </div>
    </div>
  );
}
