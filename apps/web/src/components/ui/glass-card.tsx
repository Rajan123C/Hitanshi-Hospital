import * as React from "react"
import { cn } from "@/lib/utils"

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  intensity?: "low" | "medium" | "high"
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, intensity = "low", ...props }, ref) => {
    const intensityStyles = {
      low: "bg-white/40 border-white/20 backdrop-blur-sm",
      medium: "bg-white/60 border-white/40 backdrop-blur-md",
      high: "bg-white/80 border-white/60 backdrop-blur-lg",
    }

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-[12px] border shadow-sm transition-all duration-300",
          intensityStyles[intensity],
          className
        )}
        {...props}
      />
    )
  }
)
GlassCard.displayName = "GlassCard"

export { GlassCard }
