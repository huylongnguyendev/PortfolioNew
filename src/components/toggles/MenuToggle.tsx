import type { ChildrenType } from "@/lib/types/common.type"
import { Button } from "../ui/button"
import { useMenu } from "@/lib/context/MenuContext"

function MenuToggle({ children }: { children: ChildrenType }) {
  const { isOpenMenu, setIsOpenMenu } = useMenu()
  return (
    <>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        className="md:hidden"
      >
        {children}
      </Button>
    </>
  )
}

export default MenuToggle