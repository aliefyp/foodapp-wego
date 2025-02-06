import { HiOutlinePlus } from 'react-icons/hi'
import './App.css'
import Button from './components/Button'
import DarkModeToggle from './components/DarkModeToggle'
import RestaurantCard from './components/RestaurantCard'
import RestaurantGrid from './components/RestaurantGrid'
import Searchbar from './components/Searchbar'
import Tab from './components/Tab'
import Tabs from './components/Tabs'
import useFoodCategories from './hooks/useFoodCategories'
import useFoodList from './hooks/useFoodList'
import useCategoryTab from './usecase/useCategoryTab'

function App() {
  const { foodCategories, loading: loadingFoodCategories, error: errorFoodCategories } = useFoodCategories();
  const { foodList, loading: loadingFoodList, error: errorFoodList, loadMore, search } = useFoodList();

  const { categoryTabs, handleTabClick } = useCategoryTab({
    items: foodCategories.map((item) => ({ id: item.id, name: item.name }))
  })

  return (
    <>
      <nav>
        <DarkModeToggle />
      </nav>
      <main>
        <Searchbar onChange={event => search((event.target as HTMLInputElement).value)} />
        <Tabs>
          {categoryTabs.map((tab) => (
            <Tab
              key={tab.id}
              active={tab.isActive}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.name}
            </Tab>
          ))}
        </Tabs>
        <RestaurantGrid>
          {foodList.map((item) => (
            <RestaurantCard
              key={item.id}
              image={item.imageUrl}
              name={item.name}
              promotion={item.promotion}
              rating={item.rating}
              isNew={item.isNew}
              minCookTime={item.minCookTime}
              maxCookTime={item.maxCookTime}
            />
          ))}
        </RestaurantGrid>
        <Button
          variant="secondary"
          startIcon={<HiOutlinePlus />}
          style={{ margin: 'auto' }}
          onClick={loadMore}
        >
          Show more
        </Button>
      </main>
    </>
  )
}

export default App
