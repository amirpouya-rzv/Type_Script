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
  disabled = false, 
}: {
  title: string
  side?: Side
  children: React.ReactNode
  disabled?: boolean
}) {
  if (disabled) return <>{children}</> 

  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent side={side}>
        <p>{title}</p>
      </TooltipContent>
    </Tooltip>
  )
}