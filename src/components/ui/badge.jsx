import React from "react"
import { cn } from "@/lib/utils"

export function Badge({ className, children }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-zinc-800 px-2 py-1 text-xs text-zinc-300",
        className
      )}
    >
      {children}
    </span>
  )
}