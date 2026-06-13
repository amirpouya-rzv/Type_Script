import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type Side = "left" | "top" | "bottom" | "right"

export function TooltipSides({
  title,
  side = "top",
  children  
}: {
  title: string
  side?: Side
  children: React.ReactNode  
}) {
  return (
    <Tooltip>
      <TooltipTrigger  asChild>
        {children}
      </TooltipTrigger>
      <TooltipContent side={side}>
        <p>{title}</p>
      </TooltipContent>
    </Tooltip>
  )
}