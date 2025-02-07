import ToasterProvider from './contexts/ToasterProvider'
import FoodListPage from './pages/FoodListPage'

function App() {
  return (
    <ToasterProvider>
      <FoodListPage />
    </ToasterProvider>
  )
}

export default App
