import { useEffect } from 'react';
import Container from '../../components/Container';
import NavBar from '../../components/NavBar';
import RestaurantGrid from '../../components/RestaurantGrid';
import Searchbar from '../../components/Searchbar';
import Tab from '../../components/Tab';
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
  } = useCategoryTab({
    foodCategories
  })

  const {
    searchQuery,
    filteredFoodList,
    handleSearchChange,
    handleLoadMore,
    handleSearchClear,
  } = useFoodFilter({
    foodList,
    categoryId: activeCategory,
  })

  useEffect(() => {
    if (errorFoodCategories) toaster.open(errorFoodCategories);
    if (errorFoodList) toaster.open(errorFoodList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorFoodCategories, errorFoodList]);

  return (
    <>
      <NavBar />
      <main>
        <Container>
          <div className='food-list-page-wrapper'>
            <Searchbar
              value={searchQuery}
              onChange={handleSearchChange}
              onClear={handleSearchClear}
            />
            <Tab
              loading={loadingFoodCategories}
              items={categoryList}
            />
            <RestaurantGrid
              loading={loadingFoodList}
              error={errorFoodList}
              items={filteredFoodList}
              onError={refetchFoodList}
              onLoadMore={handleLoadMore}
            />
          </div>
        </Container>
      </main>
    </>
  )
}

export default FoodListPage;

