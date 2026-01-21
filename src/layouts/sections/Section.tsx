import type { ChildrenType, ClassNameType } from "@/lib/types/common.type"
import { cn } from "@/lib/utils"

interface Props {
  className?: ClassNameType
  children: ChildrenType
  id: string
}

function Section({ className, children, id }: Props) {
  return (
    <>
      <section id={id} className={cn("py-0 mt-10", className)}>
        {children}
      </section>
    </>
  )
}

export default Section