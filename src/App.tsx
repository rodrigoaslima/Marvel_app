import Home from "./Pages/Home"
import { CharacterProvider } from "./context/CharacterContext"


function App() {
  return (
    <CharacterProvider>
      <Home/>
    </CharacterProvider>
  )
}

export default App
