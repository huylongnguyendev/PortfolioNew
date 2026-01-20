import Header from "./layouts/Header"
import Body from "./layouts/sections/Body"
import AppProvider from "./lib/providers/AppProvider"

function App() {

  return (
    <>
      <AppProvider>
        <Header />
        <Body />
      </AppProvider>
    </>
  )
}

export default App
