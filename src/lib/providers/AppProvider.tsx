import type { ChildrenType } from "../types/common.type"
import { MenuProvider } from "./MenuProvider"
import { ThemeProvider } from "./ThemeProvider"

function AppProvider({ children }: { children: ChildrenType }) {
  return (
    <>
      <ThemeProvider
        defaultTheme="dark"
        storageKey="vite-ui-theme"
      >
        <MenuProvider>
          {children}
        </MenuProvider>
      </ThemeProvider>
    </>
  )
}

export default AppProvider