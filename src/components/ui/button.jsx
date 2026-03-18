import React from "react"
import { cn } from "@/lib/utils"

export function Button({ className, children, ...props }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-500 transition",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}