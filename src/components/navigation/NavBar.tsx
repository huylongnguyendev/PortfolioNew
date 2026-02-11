import { X } from "lucide-react"
import MenuToggle from "../toggles/MenuToggle"
import { listNavData } from "@/lib/data/nav.data"
import NavBarItem from "./NavBarItem"
import { useCallback, useEffect, useRef, useState } from "react"
import { useMenu } from "@/lib/context/MenuContext"
import { cn } from "@/lib/utils"

function NavBar() {
  console.log("render nav")
  const [activeHash, setActiveHash] = useState<string>(window.location.hash || "#")

  const ulRef = useRef<HTMLUListElement>(null)
  const { isOpenMenu, setIsOpenMenu } = useMenu()

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (ulRef.current && !ulRef.current.contains(e.target as Node))
      setIsOpenMenu(false)
  }, [setIsOpenMenu])

  const handleClose = useCallback(() => {
    setIsOpenMenu(false)
  }, [setIsOpenMenu])

  const handleHashChange = useCallback(() => {
    setActiveHash(window.location.hash)
  }, [])

  useEffect(() => {
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [handleHashChange])

  useEffect(() => {
    if (!isOpenMenu) return
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpenMenu, handleClickOutside])

  return (
    <>
      <ul
        ref={ulRef}
        className={cn("max-md:absolute -top-320 right-0 md:flex items-center transitions max-md:w-11/12 max-md:h-dvh bg-background p-4 rounded-md max-md:shadow-md z-50", isOpenMenu && "top-0")}
      >
        <li className="flex items-center justify-end mb-8">
          <MenuToggle>
            <X className="text-destructive" />
          </MenuToggle>
        </li>
        {
          listNavData.map(item =>
            <NavBarItem
              key={item.id}
              item={item}
              isActive={activeHash === item.href}
              onClick={handleClose}
            />
          )
        }
      </ul>
    </>
  )
}

export default NavBar