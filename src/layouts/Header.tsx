import Logo from "@/components/Logo"
import NavBar from "@/components/navigation/NavBar"
import NavInteractive from "@/components/navigation/NavInteractive"

function Header() {
  return (
    <>
      <header className="sticky w-full top-0 z-50 bg-background py-2">
        <nav className="container flex items-center justify-between">
          <Logo />
          <NavBar />
          <NavInteractive />
        </nav>
      </header>
    </>
  )
}

export default Header