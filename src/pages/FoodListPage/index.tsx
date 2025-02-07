import { useEffect } from 'react';
import Container from '../../components/Container';
import NavBar from '../../components/NavBar';
import RestaurantGrid from '../../components/RestaurantGrid';
import Searchbar from '../../components/Searchbar';
import Tab from '../../components/Tab';
import TabItem from '../../components/TabItem';
import useFoodCategories from '../../hooks/useFoodCategories';
import useFoodList from '../../hooks/useFoodList';
import { useToaster } from '../../hooks/useToaster';
import useCategoryTab from '../../usecase/useCategoryTab';
import useFoodFilter from '../../usecase/useFoodFilter';
import './styles.css';

const FoodListPage = () => {
  const toaster = useToaster();

  const {
    foodCategories,
    loading: loadingFoodCategories,
    error: errorFoodCategories,
  } = useFoodCategories();

  const {
    foodList,
    loading: loadingFoodList,
    error: errorFoodList,
    refetch: refetchFoodList,
  } = useFoodList();

  const {
    activeCategory,
    categoryList,
    handleCategoryClick
  } = useCategoryTab({
    foodCategories
  })

  const {
    filteredFoodList,
    searchFood,
    loadMoreFood,
  } = useFoodFilter({
    foodList,
    categoryId: activeCategory,
  })

  useEffect(() => {
    if (errorFoodCategories) {
      toaster.open({ message: errorFoodCategories, variant: 'error' });
    }

    if (errorFoodList) {
      toaster.open({ message: errorFoodList, variant: 'error' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorFoodCategories, errorFoodList]);

  return (
    <>
      <NavBar />
      <main>
        <Container>
          <div className='food-list-page-wrapper'>
            <Searchbar onChange={event => searchFood((event.target as HTMLInputElement).value)} />
            <Tab loading={loadingFoodCategories}>
              {categoryList.map((tab) => (
                <TabItem
                  key={tab.id}
                  active={tab.isActive}
                  onClick={() => handleCategoryClick(tab.id)}
                >
                  {tab.name}
                </TabItem>
              ))}
            </Tab>
            <RestaurantGrid
              loading={loadingFoodList}
              error={errorFoodList}
              items={filteredFoodList}
              onError={refetchFoodList}
              onLoadMore={loadMoreFood}
            />
          </div>
        </Container>
      </main>
    </>
  )
}

export default FoodListPage;

