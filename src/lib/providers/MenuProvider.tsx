import { useState } from "react"
import { MenuContext } from "../context/MenuContext"
import type { ChildrenType } from "../types/common.type"

export const MenuProvider = ({ children }: { children: ChildrenType }) => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

  return (
    <MenuContext.Provider value={{ isOpenMenu, setIsOpenMenu }}>
      {children}
    </MenuContext.Provider>
  )
}