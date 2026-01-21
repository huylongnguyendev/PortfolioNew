import Header from "./layouts/Header"
import Body from "./layouts/sections/Body"
import AppProvider from "./lib/providers/AppProvider"
import { Toaster } from "sonner"
function App() {

  return (
    <>
      <AppProvider>
        <Header />
        <Body />
        <Toaster richColors closeButton />
      </AppProvider>
    </>
  )
}

export default App
