import './App.css'
import DarkModeToggle from './components/DarkModeToggle'
import RestaurantCard from './components/RestaurantCard'
import RestaurantGrid from './components/RestaurantGrid'
import Searchbar from './components/Searchbar'
import Tab from './components/Tab'
import Tabs from './components/Tabs'
import useFoodCategories from './hooks/useFoodCategories'
import useFoodList from './hooks/useFoodList'
import useCategoryTab from './usecase/useCategoryTab'

const dummy = [
  {
    "id": "628b5decc94a27754f30e6f1",
    "index": 0,
    "rating": 3.9508,
    "promotion": "gift",
    "isNew": false,
    "categoryId": "6288a89fac9e970731bfaa7b",
    "minCookTime": 80,
    "maxCookTime": 100,
    "restaurant": "Niquent",
    "name": "Niquent Drinks",
    "imageUrl": "https://zen.wego.com/cdn-cgi/image/width=600/web/mock/exam/drink.jpg"
  },
  {
    "id": "628b5decf39bcc4e982fc88a",
    "index": 1,
    "rating": 4.9874,
    "promotion": "1+1",
    "isNew": false,
    "categoryId": "6288a89f1f0152b8c2cd512b",
    "minCookTime": 120,
    "maxCookTime": 140,
    "restaurant": "Boilicon",
    "name": "Boilicon Shushi",
    "imageUrl": "https://zen.wego.com/cdn-cgi/image/width=600/web/mock/exam/sushi.jpg"
  },
  {
    "id": "628b5dec6678e96d75f2f7de",
    "index": 2,
    "rating": 3.4518,
    "promotion": null,
    "isNew": true,
    "categoryId": "6288a89f1f0152b8c2cd512b",
    "minCookTime": 100,
    "maxCookTime": 120,
    "restaurant": "Quinex",
    "name": "Quinex Shushi",
    "imageUrl": "https://zen.wego.com/cdn-cgi/image/width=600/web/mock/exam/sushi.jpg"
  },
]

function App() {
  const { foodCategories, loading: loadingFoodCategories, error: errorFoodCategories } = useFoodCategories();
  const { foodList, loading: loadingFoodList, error: errorFoodList } = useFoodList();

  const { categoryTabs, handleTabClick } = useCategoryTab({
    items: foodCategories.map((item) => ({ id: item.id, name: item.name }))
  })

  return (
    <>
      <nav>
        <DarkModeToggle />
      </nav>
      <main>
        <Searchbar />
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
      </main>
    </>
  )
}

export default App
