import { createContext, useContext } from "react"

interface MenuState {
  isOpenMenu: boolean
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export const MenuContext = createContext<MenuState | undefined>(undefined)

export const useMenu = () => {
  const context = useContext(MenuContext)
  if (!context) throw new Error("useMenu must be used within MenuProvider")
  
  return context
}
