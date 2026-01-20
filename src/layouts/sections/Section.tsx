import type { ChildrenType, ClassNameType } from "@/lib/types/common.type"
import { cn } from "@/lib/utils"

interface Props {
  className?: ClassNameType
  children: ChildrenType
}

function Section({ className, children }: Props) {
  return (
    <>
      <section className={cn("py-0", className)}>
        {children}
      </section>
    </>
  )
}

export default Section