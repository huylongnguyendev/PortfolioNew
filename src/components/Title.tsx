import type { ClassNameType } from "@/lib/types/common.type"
import { cn } from "@/lib/utils"

interface Props {
  className?: ClassNameType
  title: string
  subtitle?: string
}

function Title({ className, title, subtitle }: Props) {
  return (
    <>
      <div className="text-center">
        <h2 className={cn("text-2xl md:text-3xl text-primary ", className)}>{title}</h2>
        {
          subtitle && <p className="text-muted-foreground text-lg md:text-xl">{subtitle}</p>
        }
      </div>
    </>
  )
}

export default Title