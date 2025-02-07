import { HiOutlinePlus } from 'react-icons/hi'
import './App.css'
import Button from './components/Button'
import Container from './components/Container'
import NavBar from './components/NavBar'
import RestaurantCard from './components/RestaurantCard'
import RestaurantGrid from './components/RestaurantGrid'
import Searchbar from './components/Searchbar'
import Tab from './components/Tab'
import TabItem from './components/TabItem'
import useFoodCategories from './hooks/useFoodCategories'
import useFoodList from './hooks/useFoodList'
import useCategoryTab from './usecase/useCategoryTab'

function App() {
  const {
    foodCategories,
    loading: loadingFoodCategories,
    error: errorFoodCategories,
  } = useFoodCategories();

  const {
    foodList,
    loading: loadingFoodList,
    error: errorFoodList,
    loadMore,
    search,
    filterByCategory,
  } = useFoodList();

  const { categoryTabs, handleTabClick } = useCategoryTab({
    items: foodCategories.map((item) => ({ id: item.id, name: item.name }))
  })

  const handleTabChange = (id: string) => {
    filterByCategory(id);
    handleTabClick(id);
  };

  return (
    <>
      <NavBar />
      <main>
        <Container>
          <div className='content-wrapper'>
            <Searchbar onChange={event => search((event.target as HTMLInputElement).value)} />
            <Tab>
              {categoryTabs.map((tab) => (
                <TabItem
                  key={tab.id}
                  active={tab.isActive}
                  onClick={() => handleTabChange(tab.id)}
                >
                  {tab.name}
                </TabItem>
              ))}
            </Tab>
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
          </div>
        </Container>
      </main>
    </>
  )
}

export default App
