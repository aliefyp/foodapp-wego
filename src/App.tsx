import './App.css'
import DarkModeToggle from './components/DarkModeToggle'
import Searchbar from './components/Searchbar'

function App() {
  return (
    <>
      <nav>
        <DarkModeToggle />
      </nav>
      <main>
        <Searchbar />
      </main>
    </>
  )
}

export default App
