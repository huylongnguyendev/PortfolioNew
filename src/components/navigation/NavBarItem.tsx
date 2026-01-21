import type { INavItem } from "@/lib/types/nav.type"
import { cn } from "@/lib/utils"
import { memo } from "react"

interface Props {
  item: INavItem
  isActive: boolean
  onClick: () => void
}

const NavBarItem = memo(({ item, isActive, onClick }: Props) => {

  return (
    <>
      <li
        onClick={onClick}
        className="relative max-md:w-full font-semibold capitalize group"
      >
        <div className={cn("absolute bottom-0 left-1.5 w-0 h-0.5 bg-primary transitions group-hover:w-2/3", isActive && "md:w-1/2")} />
        <a
          href={item.href}
          className={cn("block px-1.5 py-1 rounded-md transitions max-md:hover:text-primary-foreground max-md:hover:bg-primary max-md:active:text-primary-foreground max-md:active:bg-primary hover:text-primary", isActive && "text-primary max-md:bg-primary max-md:text-primary-foreground")}
        >
          {item.title}
        </a>
      </li>
    </>
  )
})

export default NavBarItem