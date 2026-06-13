import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type Side = "left" | "top" | "bottom" | "right"

export function TooltipSides({
  title,
  side = "top",
  children,
  disabled = false, // ✅ اضافه شد
}: {
  title: string
  side?: Side
  children: React.ReactNode
  disabled?: boolean
}) {
  if (disabled) return <>{children}</> // ✅ اگه disabled بود tooltip نشون نده

  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent side={side}>
        <p>{title}</p>
      </TooltipContent>
    </Tooltip>
  )
}