import { Menu } from "lucide-react"
import MenuToggle from "../toggles/MenuToggle"
import { ModeToggle } from "../toggles/ModeToggle"

function NavInteractive() {
  return (
    <>
      <div className="space-x-2">
        <ModeToggle />
        <MenuToggle>
          <Menu />
        </MenuToggle>
      </div>
    </>
  )
}

export default NavInteractive